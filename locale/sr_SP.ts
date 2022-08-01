export default {
	locale: "Српски (Србија)",
	// Common / Repeated words and phrases
	common: {
		appName: "7TV",
		appHost: "7tv.app",
		supportEmail: "kathy{'@'}7tv.app",
		learnMore: "Сазнајте више",
		more: "Више",
		retry: "Покушајте поново",
		back: "Назад",
		download: "Преузми | Преузимања",
		features: "Карактеристике",
		comments: "Коментари",
		search: "Претражите",
		update: "Ажурирајте",
		report: "Пријави",
		delete: "Обриши",
		cancel: "Откажи",
		activity: "Активност",
		loading: "Учитавање",
		save_changes: "Сачувај Промене",
		reset: "Ресетуј",
		object: {
			user: "Корисник",
			emote_set: "Комплет емотикона",
			emote: "Емотикон",
		},
	},
	// Text that appears on the home page
	home: {
		slogan: "Емотикон Платформа за све",
		app_description: "Лако управљајте стотинама другачијих емотикона за своје Twitch или YouTube канале",
		why_app: "Зашто @:common.appName{'?'}",
		download_browser: "Додатак за претраживач",
		download_mobile: "Мобилне Апликације",
		download_misc: "Друге Апликације",
		features: {
			emote_sets: {
				name: "Комплет емотикона",
				detail: "Групирајте емотиконе у прилагодиве скупове које можете делити са другим корисницима или брзо пренети на свој канал.",
			},
			many_emote_slots: {
				name: "Стотине слотова за емотиконе",
				detail: "Почните са {0} слотова, са могућим максимумом {1} и без додатног плаћања.",
			},
			channel_emote_names: {
				name: "Уникатна имена за сваки канал",
				detail: "Не свиђа вам се наслов емотикона који је дао креатор? То је у реду, можете га променити само за свој канал.",
			},
			real_time: {
				name: "У тренутном времену",
				detail: "Промена емотикона на вашем каналу је тренутна за све гледаоце. F5 није потребан.",
			},
			emote_versions: {
				name: "Верзионисање емотикона",
				detail: "Измените тематске варијанте или ажурирајте емотикон на побољшану верзију.",
			},
			next_gen: {
				name: "Формати слика нове генерације као што су WEBM и AVIF",
				detail: "Користимо нове, оптимизоване формате слика да бисмо смањили коришћени проток.",
			},
			source_available: {
				name: "Извор-доступан",
				detail: "Цела база кодова доступна је на GitHub са лиценцом доступном са изворним кодом. Свако може прегледати и допринети.",
			},
		},
		socials: {
			discord: "Придружите се @:common.appName у Discord",
			discord_online_count: "{0} Тренутно активних корисника",
			twitter: "Запратите нас на Twitter",
			github: "Допринесите",
		},
	},
	// Nav Bar
	nav: {
		home: "Почетна",
		about: "О апликацији",
		emotes: "Емотикони",
		store: "Претплатите се",
		admin: "Администрација",
		sign_in: "Пријавите се",
		wip_notice: {
			heading: "Добродошли на нови @:common.appName вебсајт",
			text1: "Ово је рани преглед новог искуства @:common.appName{'.'}",
			text2: "Истражите нове ствари и реците нам како изгледа! Напомена да ће пролазити кроз константне промене и може често да се поквари.",
		},
	},
	activity: {
		emote_created: "Креирано {T}",
		emote_renamed: "Преименовано {T} из {O} у {N}",
		emote_listing_approved: "Одобрено {T} за јавну листу",
		emote_listing_revoked: "Уклоњено {T} са јавне листе",
		emote_merged: "Спојили {T} са {0}",
		emote_ownership_transferred: "Власништво {T} пребачено {U}",
		emote_restored: "{T} обновљен",
		emote_updated: "Својства за {T} су промењена",
		emote_deleted: "Обрисао {T}",
		emote_processed: "Извршена је нова обрада за {T}",
		emote_version_created: "Направљена верзија '{VER}' за {T}",
		emote_version_renamed: "Преименована верзија '{VER}' за {T} из {1} у {2}",
		emote_version_approved: "Одобрена верзија '{VER}' за {T} за јавну листу",
		emote_version_restored: "Обновљена верзија {VER} за {T}",
		emote_version_deleted: "Обрисана верзија {VER} за {T}",
		user_created: "{T} Креиран",
		user_deleted: "Обрисао {T}",
		user_editor_added: "{U} додан као Уредник",
		user_editor_added_other: "{U1} додан као Уредник за {U2}",
		user_editor_removed: "Одузете уредничке привилегије од {U}",
		user_editor_removed_other: "Одузете уредничке привилегије од {U1} за {U2}",
		user_banned: "{T} банован",
		user_unbanned: "{T} одбанован",
		user_updated: "Својства за {T} су промењена",
		user_sign_in: "{T} су се пријавили",
		user_sign_out: "{T} су се одјавили",
		user_forbidden: "{T}-у је забрањен приступ за {0}",
		emote_set_created: "{T} Креиран",
		emote_set_emote_added: "Додан емотикон {AE} у {T}",
		emote_set_emote_removed: "Уклоњен емотикон {AE} из {T}",
		emote_set_emote_renamed: "Преименован емотикон {AE} из {O} у {N} у {T}",
		emote_set_updated: "Својства за {T} су промењена",
	},
	// Text that is relevant to emotes
	emote: {
		add: "Креирајте Емотикон",
		author: "Креирано од",
		created_at: "Креирано",
		versions: "Верзије",
		preview_loading: "Учитавање прегледа... {'('}{0}{'/'}{1}{')'}",
		preview_failed: "Неуспешно учитавање прегледа",
		processing: "Процесовање Емотикона - ово може да потраје.",
		use: "Користите емотикон",
		switch_version: "Пребаците се на ову верзију",
		in_n_sets: "{0} у скупу | {0} у скуповима",
		disable: "Искључите емотикон",
		update: "Ажурирај",
		report: "Пријави емотикон",
		Privacy: "Приватност",
		comments: "Коментари",
		channels: "Канали",
		common_names: "Друга имена за овај емотикон",
		usage_stats: "Статистике Емотикона",
		no_longer_available: "This emote is no longer available",
		delete_prompt: {
			heading: "Избриши {0}",
			heading_versions: "Избриши верзију '{0}' из {1}",
			notice: "Да ли сте сигурни да желите да обришете емотикон {0}{'?'}",
			notice_versions: "Да ли сте сигурни да желите да обришете верзију '{0}' из {1}{'?'}",
			reason: "Разлог за брисање",
		},
		unlisted: {
			heading: "Упозорење!",
			warning: "Овај емотикон није на јавној листи.",
			warning_flagged: "Овај емотикон је склоњен са јавне листе због: {FLAG_LIST}",
			notice: "Смете да додате емотикон на канал, али не можемо да верификујемо да ли сме да прикаже на стриму.",
			notice_flagged: "Смете да додате емотикон на канал, али ми верујемо да није безбедно за стрим.",
			show_button: "Прикажи Емотикон",
			flag_sexual_content: "Сексуално или сексуално сугестивни садржај",
			flag_epilepsy: "Брзо трепери / изазива епилепсију",
			flag_edgy: "Увредљиво или непристојно",
			flag_twitch_banned: "Забрањено на Twitch-u",
		},
		list: {
			searching: "Претрага је у току",
			emote_count: "{0} емотикон/а",
			no_emotes_listed: "Нису пронађени емотикони",
			fetching_slowly: "Извините, изгледа као да ће требати неки време",
		},
		upload: {
			emote_name: "Име емотикона",
			version_name: "Име верзије",
			version_description: "Опис Верзије",
			submit_emote: "Креирајте Емотикон",
			create_emote_version: "Креирај верзију емотикона",
			image_upload: "Отпреми слику",
			accepted_formats: "Прихваћени формати",
			filetype: "Фајл",
			animation: "Анимација",
			transparency: "Провидност",
			emote_details: "Детаљи емотикона",
			version_details: "Детаљи Верзије",
			attribution: "Атрибуција",
			original_creator: "Оригинални креатор",
			as_child: "Креирате {IS_DIVERGED} верзију {0}. ",
			content_moderation: "Модерација садржаја",
			half_transparency_tooltip: "Пиксели могу бити потпуно провидни или потпуно непровидни (нема између)",
		},
	},
	emote_set: {
		create: "Нови @:common.object.emote_set",
		select: "Изаберите @:common.object.emote_set",
		explain: {
			section: "Шта је @:common.object.emote_set{'s'}?",
			hint: "Комплети емотикона су скуп емотикона који се могу везати за ваш канал или делити са другим корисницима.",
		},
		no_space: "Пуни Слотови",
		none_selected: "Комплет Није Изабран",
		editing: "Уређивање {0}",
		owner: "{USER} Комплет Емотикона",
		owned: "Комплет Емотикона Које Поседујете",
		label_renamed: "Преименовано",
		label_conflict: "Конфликт",
		label_default: "Подразумевано",
		modal: {
			selected_channel_count: "канал није изабран | {0} канал је изабран | {0} канали су изабрани",
			create_button: "Креирај @:common.object.emote_set",
			rename_in_set: "Преименуј у {0}",
			context_rename: "Промени Име Емотикона",
			context_set_default: "Постави Као Подразумевано",
			context_unset_default: "Уклони као Подразумевано",
		},
	},
	// Text that is relevant to users
	user: {
		emote_sets: "Емотикон сетови",
		channel_emotes: "Емотикони канала",
		joined_at: "Придружено {0}",
		editors: "Уредници",
		roles: "Улоге",
		connections: "Канали | Канали & Налози",
		new_connections: "Повежи налоге...",
		no_channel_emotes: "{0} нема емотикона на {1} каналу",
		no_channels: "{0} нема канала!",
		card: {
			view_full_profile: "Прегледај Цео Профил",
		},
		settings: {
			button: "Измени Профил",
			section_profile: "Профил",
			username: "Корисничко име",
			display_name: "Приказано Име",
			profile_picture: "Профилна Слика",
		},
	},
	store: {},
	// Text that is relating to the reporting system
	reporting: {
		report: "Пријави",
		emote_reason: {
			i_made_this: "Креирао сам овај емотикон, али га је поставио неко други",
			duplicate: "Овај емотикон је дупликат",
			pornographic: "Овај емотикон садржи порнографске или претерано сексуалне слике",
			violence_gore: "Овај емотикон показује екстремни степен насиља или крви",
			i_appear_there: "Овај емотикон ме приказује и не свиђа ми се",
			offensive: "Сматрам да је овај емотикон увредљив",
			other: "Нешто друго",
		},
		uncategorized_prompt: "Y чему је проблем?",
		details: "Детаљи (додатне информације и / или докази за вашу пријаву)",
		success: "Пријава је успешно послата",
		notify: "Бићете обавештени путем поштанског сандучета чим се ваша пријава обради или ако затражимо додатне информације.",
		complete_step_one: "Настави",
		abuse_notice: "Злоупотреба функције пријављивања може поништити ваш приступ.",
	},
	// Text that is relevant to the inbox
	inbox: {
		inbox: "Примљено",
		tabs: {
			all: "Све поруке",
			unread: "Непрочитано",
			important: "Важно",
		},
		unread_tag: "Непрочитано",
		// System inbox messages
		generic: {
			emote_listed: {
				subject: "Емотикон Одобрен за јавну листу",
				content: `
# Ваш емотикон {EMOTE_NAME} одобрен је за јавну листу \n
Сада ће бити доступан у Директоријуму Емотикона и почеће да се појављује на @:common.appHost{'.'}
`,
			},
			emote_not_listed: {
				subject: "Емотикон Није Одобрен за Јавну Листу",
				content: `
# Ваш емотикон {EMOTE_NAME} је одбијен
Неће бити доступан путем јавног Директоријума Емотикона или видљив на @:commom.appHost,
али остаће доступан корисницима путем везе.
`,
			},
			emote_ownership_claim_request: {
				subject: "Позив за власништво над емотиконом",
				content: `
## {OWNER_DISPLAY_NAME} жели да преузмете власништво над '{ЕМОТЕ_NАМЕ}'

[Прикажи Емотикон] ({EMOTE_URL})

** [Прихвати захтев] ({EMOTE_CLAIM_URL})** | / [Одбиј захтев] ({EMOTE_DECLINE_URL})								`,
			},
			client_banned: {
				subject: "Забрањен ти је приступ",
				reason: {
					pornographic_content: "",
				},
				content: `
# Налог је блокиран
Ваш приступ @:common.appName је сада ограничен.<br/><br/>
### Разлог за ову акцију
{BAN_REASON}<br/><br/>
### Примењена ограничења<br/>
{EFFECT_NO_PERMISSIONS}
{EFFECT_NO_AUTH}
{EFFECT_NO_OWNERSHIP}
{EFFECT_MEMORY_HOLE}

<br/>ова забрана истиче **{BAN_EXPIRE_AT}**.
_ Ако мислите да је ово грешка, контактирајте @:common.supportEmail{'.'}_
`,
				effect: {
					no_permissions: "* Забрањено ти је да користиш апликацију",
					no_auth: "* Забрањено ти је да се улогујеш",
					no_ownership: "* Било који материјал који сте креирали неће више бити доступан",
					memory_hole: "* Нећете бити видљиви другим корисницима",
					ip_blocked: "* Вашој IP-адреси је блокиран приступ свим услугама @:common.appName",
				},
			},
			report_closed: {
				subject: "Пријава затворена",
				content: `
Хвала вам што сте нас обавестили, ваша пријава {'#'}{CASE_ID} је обрађена.`,
			},
		},
	},
	// 404 Messages
	notFound: {
		troll_despair: "Нисмо успели да пронађемо то што тражите",
		doctor_wtf: "Шта је ово дођавола?",
		pot_friend: "Ја сам лонац, пријатељу",
	},
};
