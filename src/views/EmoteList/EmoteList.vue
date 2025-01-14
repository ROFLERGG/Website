<template>
	<main class="emotes">
		<div class="listing">
			<div class="above-content">
				<div class="heading-block">
					<div></div>
					<!-- Search Bar -->
					<div class="input-group">
						<TextInput v-model="queryVariables.query" :label="t('common.search')">
							<template #icon>
								<font-awesome-icon :icon="['far', 'search']" />
							</template>
						</TextInput>
					</div>
				</div>

				<div class="create-button-wrapper">
					<div class="create-button">
						<Button
							fa-icon="hexagon-plus"
							:label="t('emote.add').toUpperCase()"
							color="accent"
							use-route="/emotes/create"
							appearance="raised"
						/>
					</div>
					<div class="fill-around"></div>
				</div>

				<div class="heading-end">
					<span> {{ t("emote.list.emote_count", [itemCount]) }} </span>
				</div>
				<div class="go-around-button" />
			</div>

			<div class="emote-page" @keyup.left="paginate('previousPage')">
				<!-- The cards list shows emote cards -->
				<div ref="emotelist" class="cards-list-wrapper">
					<div :class="{ loading }" class="cards-list">
						<EmoteCard v-for="(emote, i) in emotes" :key="i" :emote="emote" :unload="unloadImages" />
					</div>

					<div v-if="loading || errored" class="loader" :class="errored ? 'has-error' : ''">
						<div v-if="loading">
							<div ref="loadingSpinner" class="loading-spinner">
								<PpL />
							</div>
							<span v-if="loading" class="searching-title">{{ t("emote.list.searching") }}...</span>
							<p v-if="loading && slowLoading" class="searching-slow">
								{{ t("emote.list.fetching_slowly") }}
							</p>
						</div>
						<span v-else-if="errored" class="searching-error">
							{{ errored }}
						</span>
					</div>
					<div v-if="emotes.length === 0" class="no-emotes">
						<span>{{ t("emote.list.no_emotes_listed") }}</span>
					</div>
				</div>
			</div>

			<div v-if="itemCount > 0" class="paginator-block">
				<Paginator
					:page="queryVariables.page"
					:items-per-page="queryVariables.limit"
					:length="itemCount"
					@change="(change) => (queryVariables.page = change.page)"
				/>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { onBeforeUnmount, onMounted, reactive, ref, watch, computed } from "vue";
import { useLazyQuery } from "@vue/apollo-composable";
import { SearchEmotes } from "@gql/emotes/search";
import { useI18n } from "vue-i18n";
import Button from "@utility/Button.vue";
import EmoteCard from "@utility/EmoteCard.vue";
import PpL from "@components/base/ppL.vue";
import Paginator from "@views/EmoteList/Paginator.vue";
import TextInput from "@components/form/TextInput.vue";
import { Emote } from "@structures/Emote";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();

useHead({
	title: "Emote Directory - 7TV",
});

// Form data
const emotelist = ref<HTMLElement | null>(null);

/**
 * Calculate how many rows and columns according to the container's size
 *
 * @returns the result of rows * columns
 */
const calculateSizedRows = (): number => {
	if (!emotelist.value) {
		return 0;
	}

	const marginBuffer = 16; // The margin _in pixels between each card
	const cardSize = 160; // The size of the cards in pixels
	const width = emotelist.value?.clientWidth; // The width of emotes container
	const height = emotelist.value?.clientHeight; // The height of the emotes container

	const rows = Math.floor(width / (cardSize + marginBuffer)); // The calculated amount of rows
	const columns = Math.floor(height / (cardSize + marginBuffer)); // The calculated amount of columns

	// Return the result of rows multiplied by columns
	return Math.max(1, rows * columns);
};

const router = useRouter();
const route = useRoute();
const initPage = Number(route.query.p) || 1;
const initQuery = route.query.q?.toString() || "";

const queryVariables = reactive({
	query: initQuery,
	limit: Math.max(1, calculateSizedRows()),
	page: initPage,
});

let initResizer = true;
const resizeObserver = new ResizeObserver(() => {
	if (initResizer) {
		initResizer = false;
		return;
	}

	queryVariables.limit = calculateSizedRows();
});

// Construct the search query
const query = useLazyQuery<SearchEmotes>(SearchEmotes, queryVariables, {
	fetchPolicy: "cache-first",
});

const emotes = ref([] as Emote[]);
const itemCount = ref(0);
const pageCount = computed(() => itemCount.value / queryVariables.limit);

let slowLoad: NodeJS.Timeout;
const slowLoading = ref(false);
const loading = ref(true);
const errored = ref("");
let loadingTimer: NodeJS.Timeout;

watch(query.loading, (v) => {
	unloadImages.value = v;
});

query.onResult((res) => {
	if (loadingTimer) clearTimeout(loadingTimer);
	if (res.loading) {
		loadingTimer = setTimeout(() => {
			loading.value = true;
			if (slowLoad) clearTimeout(slowLoad);
			errored.value = "";
			slowLoading.value = false;
			slowLoad = setTimeout(() => {
				setSpinnerSpeed(2000);
				slowLoading.value = true;
			}, 2500);
			setSpinnerSpeed(500);
		}, 300);
		return;
	}
	if (!res.data) {
		return;
	}

	loading.value = false;
	errored.value = "";
	const items = res.data.emotes.items;
	const cardCount = calculateSizedRows();
	emotes.value = Array(cardCount).fill({ id: null });
	itemCount.value = res.data.emotes.count;
	for (let i = 0; i < cardCount; i++) {
		const item = items[i];
		if (!item) {
			emotes.value.pop();
			continue;
		}
		emotes.value[i] = item;
	}
});

// eslint-disable-next-line no-undef
query.onError((err) => {
	errored.value = err.message;
	emotes.value = [];
	loading.value = false;
});

const loadingSpinner = ref<HTMLDivElement | null>(null);
const setSpinnerSpeed = (v: number) =>
	loadingSpinner.value?.style.setProperty("--loading-spinner-speed", v.toFixed(2) + "ms");
onMounted(() => {
	const cardCount = calculateSizedRows();
	queryVariables.limit = Math.max(Math.min(cardCount, 250), 1);

	query.load();
	emotes.value = new Array(cardCount).fill({ id: null });

	document.addEventListener("keyup", handleArrowKeys);

	resizeObserver.observe(emotelist.value as HTMLDivElement);
});

const unloadImages = ref(false);
onBeforeUnmount(() => {
	unloadImages.value = true;

	document.removeEventListener("keyup", handleArrowKeys);
	resizeObserver.disconnect();
});

const searchText = computed(() => queryVariables.query);
watch(searchText, () => {
	queryVariables.page = 1;
});

// Handle search change (enter keypress or input blur)
const handleArrowKeys = (ev: KeyboardEvent | FocusEvent) => {
	if ((ev instanceof KeyboardEvent && ev.key !== "ArrowLeft" && ev.key !== "ArrowRight") || query.loading.value) {
		return;
	}
	if (ev instanceof KeyboardEvent && ev.key === "ArrowLeft") {
		paginate("previousPage");
	}
	if (ev instanceof KeyboardEvent && ev.key === "ArrowRight") {
		paginate("nextPage");
	}
};

/** Paginate: change the current page */
const paginate = (mode: "nextPage" | "previousPage" | "reload") => {
	if (
		(mode === "previousPage" && queryVariables.page === 1) ||
		(mode === "nextPage" && queryVariables.page > pageCount.value) ||
		query.loading.value
	) {
		return;
	}

	if (mode === "nextPage") {
		queryVariables.page++;
	} else if (mode === "previousPage") {
		queryVariables.page--;
	}
};

watch(queryVariables, (v, old) => {
	let act: "push" | "replace" = "push";

	if (old.query.length > 0) {
		act = "replace";
	}

	router[act]({
		query: {
			p: queryVariables.page,
			q: queryVariables.query || undefined,
		},
	});
});

watch(router.currentRoute, (q) => {
	if (q.query.p) {
		queryVariables.page = Number(q.query.p);
	}

	queryVariables.query = q.query.q ? String(q.query.q) : "";
});
</script>

<style lang="scss" scoped>
@import "@scss/emotes.scss";
</style>
