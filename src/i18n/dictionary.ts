import type { Lang } from "./types";

type Dict = Record<string, string>;

const hy: Dict = {
  // Nav
  "nav.home": "Գլխավոր",
  "nav.menu": "Մենյու",
  "nav.about": "Մեր մասին",
  "nav.gallery": "Պատկերասրահ",
  "nav.reviews": "Կարծիքներ",
  "nav.contact": "Կոնտակտ",
  "nav.faq": "Հարցեր",

  // Common CTAs
  "cta.viewMenu": "Տեսնել մենյուն",
  "cta.callNow": "Զանգահարել",
  "cta.directions": "Ճանապարհ",
  "cta.findUs": "Գտնել մեզ",
  "cta.seeAll": "Տեսնել ամբողջը",
  "cta.openMaps": "Բացել քարտեզում",

  // Header / hours
  "header.openUntil": "Բաց է մինչև 23:30",
  "header.address": "Մոսկովյան 31, Երևան",

  // Hero
  "hero.eyebrow": "Ընտանեկան սրճարան · Երևան",
  "hero.title": "Թարմ պոնչիկներ, տաք սուրճ, հարազատ պահեր",
  "hero.subtitle": "Ponchik Monchik-ը մի տեղ է, ուր քաղցր նոստալգիան, թարմ թխվածքները և ջերմ մթնոլորտը հանդիպում են Երևանի սրտում։",
  "hero.urgency": "Բաց ենք ամեն օր մինչև 23:30 · Թարմ պատրաստված, ամենահամովը՝ տաք վիճակում",

  // Featured
  "featured.title": "Մեր սիրելիները",
  "featured.subtitle": "Մի փոքր ընտրանի՝ ամենաշատ սիրվածներից",
  "featured.bestWarm": "Լավագույնս՝ տաք",

  // How to enjoy
  "howto.title": "Ինչպես վայելել պոնչիկը",
  "howto.subtitle": "Մեր փոքրիկ ուղեցույցը՝ կատարյալ պահի համար",
  "howto.step1.title": "Պատվիրեք տաք-տաք",
  "howto.step1.text": "Թարմ պատրաստված, յուղուռուցիկ ու փափուկ — հենց ինչպես պետք է լինի։",
  "howto.step2.title": "Զուգակցեք մեր սուրճով",
  "howto.step2.text": "Կրեմային կապուչինոն ու քաղցր պոնչիկը՝ կատարյալ զույգը։",
  "howto.step3.title": "Կիսվեք… կամ ոչ",
  "howto.step3.text": "Մենք չենք դատի։ Մի պոնչիկը երբեմն բավական է մեկ-մեկուսի վայելքի համար։",

  // Story
  "story.eyebrow": "Մեր պատմությունը",
  "story.title": "Հարազատ սրճարան՝ ուր ամեն մեկի համար տեղ կա",
  "story.text": "Մենք պատրաստում ենք պոնչիկներ ու հարցասիրուն խոհանոց՝ ընտանիքների, ուսանողների, զբոսաշրջիկների ու բոլորի համար, ովքեր փնտրում են ջերմ մի անկյուն։ Ամեն թասը, ամեն խմորը՝ ձեռագործ։",
  "story.cta": "Կարդալ ավելին",

  // Why
  "why.title": "Ինչու են մարդիկ վերադառնում",
  "why.fresh.title": "Թարմ ու համեղ",
  "why.fresh.text": "Տաք պոնչիկներ, տնական սուրճ, ամեն օր նորից։",
  "why.cozy.title": "Հարմարավետ մթնոլորտ",
  "why.cozy.text": "Փափուկ լույս, տաք գույներ, դանդաղ ժամանակ։",
  "why.friendly.title": "Բարյացակամ սպասարկում",
  "why.friendly.text": "Ընտանեկան ոճ — ինչպես տանը։",
  "why.central.title": "Քաղաքի կենտրոնում",
  "why.central.text": "Մոսկովյան 31, Կասկադից մի քանի քայլ։",

  // Best time
  "besttime.title": "Ե՞րբ ենք ամենահարմարը",
  "besttime.subtitle": "Մենք սիրում ենք բոլոր ժամերը, բայց ահա մեր փոքրիկ խորհուրդը՝ ավելի հանգիստ այցի համար",
  "besttime.morning.label": "Հանգիստ առավոտ",
  "besttime.morning.time": "09:00–11:30",
  "besttime.morning.tip": "Կատարյալ ժամ՝ նախաճաշի և թարմ պոնչիկի համար։",
  "besttime.afternoon.label": "Հանգիստ կեսօր",
  "besttime.afternoon.time": "14:30–17:30",
  "besttime.afternoon.tip": "Ոչ շտապողականություն — միայն սուրճ ու դեսերտ։",
  "besttime.evening.label": "Աշխույժ երեկո",
  "besttime.evening.time": "19:00-ից հետո",
  "besttime.evening.tip": "Մթնոլորտը գունավոր է, բայց փոքր-ինչ ավելի շատ ենք լինում — եկեք քիչ շուտ։",

  // Reviews
  "reviews.title": "Մեր հյուրերի սիրով",
  "reviews.summary": "Մարդիկ վերադառնում են տաք պոնչիկների, հարմարավետ ինտերիերի և ջերմ ընդունելության համար։ Ահա, թե ինչ են ասում.",
  "reviews.note": "Հայտնի վայրերը երբեմն աշխույժ են լինում զբաղված ժամերին — մի փոքր շուտ եկեք առավել հանգիստ փորձառության համար։",
  "reviews.q1": "«Շատ համով պոնչիկներ և ջերմ մթնոլորտ։ Կասեի՝ տնային զգացում»։",
  "reviews.q1.attr": "Հյուր Երևանից",
  "reviews.q2": "«Բարյացակամ անձնակազմ, գեղեցիկ ինտերիեր և շատ լավ սուրճ»։",
  "reviews.q2.attr": "Մշտական այցելու",
  "reviews.q3": "«Հիանալի վայր ընտանիքով այցելելու համար։ Երեխաները սիրեցին»։",
  "reviews.q3.attr": "Ընտանիք",

  // Gallery
  "gallery.title": "Մի փոքր մեր աշխարհից",
  "gallery.subtitle": "Թարմ թխվածք, տաք գույներ, հանդարտ պահեր",

  // Location
  "location.title": "Գտեք մեզ",
  "location.subtitle": "Ամեն օր 09:00–23:30",
  "location.address": "Մոսկովյան 31, Երևան",
  "location.phone": "093 699 909",

  // FAQ teaser
  "faq.title": "Հաճախակի հարցեր",
  "faq.q1": "Կա՞ նստելու տեղ։",
  "faq.a1": "Այո, մենք ունենք հարմարավետ ինտերիեր ընտանիքների ու խմբերի համար։",
  "faq.q2": "Կարո՞ղ եմ վերցնել հետս (takeaway)։",
  "faq.a2": "Իհարկե — բոլոր ապրանքները հասանելի են նաև հետդ տանելու համար։",
  "faq.q3": "Ո՞ր ժամերն են ամենազբաղվածը։",
  "faq.a3": "Ընդհանուր առմամբ՝ երեկոյան 19:00-ից հետո և շաբաթավերջերին։ Հանգիստ այցի համար՝ առավոտյան կամ կեսօրին։",
  "faq.q4": "Կա՞ն բուսակերական տարբերակներ։",
  "faq.a4": "Այո — մենք ունենք հաց, քաղցր պոնչիկներ, սուրճ ու դեսերտներ առանց մսի։",
  "faq.q5": "Կարո՞ղ եմ սուրճ ու դեսերտ միասին պատվիրել։",
  "faq.a5": "Անպայման։ Շատերը մեր սիրելի կոմբինացիան համարում են հենց դա։",
  "faq.q6": "Ունե՞ք աղի ուտեստներ։",
  "faq.a6": "Այո — մենք ունենք բրդուճներ, պիցցա, մակարոնեղեն և տաք ուտեստներ։",

  // Footer
  "footer.tagline": "Թարմ պոնչիկներ ու ջերմ սուրճ Երևանի սրտում",
  "footer.hours": "Աշխատանքային ժամեր",
  "footer.everyDay": "Ամեն օր",
  "footer.contact": "Կոնտակտ",
  "footer.follow": "Հետևեք մեզ",
  "footer.rights": "Բոլոր իրավունքները պաշտպանված են",

  // Menu page
  "menu.title": "Մեր մենյուն",
  "menu.subtitle": "Քաղցրից մինչև աղի — ամեն ինչ՝ թարմ ու սիրով պատրաստված",
  "menu.quickPicks": "Արագ ընտրանի",
  "menu.quickPicks.sub": "Մեր ամենահայտնիները",
  "menu.search": "Որոնել մենյուում…",
  "menu.popular": "Հայտնի",
  "menu.empty": "Ոչ մի արդյունք գտնված չէ։",
  "menu.cat.ponchiks": "Քաղցր պոնչիկներ",
  "menu.cat.monchiks": "Մոնչիկներ",
  "menu.cat.pies": "Կարկանդակ ու բուրեկ",
  "menu.cat.breakfast": "Նախաճաշ",
  "menu.cat.coffee": "Սուրճ ու ըմպելիք",
  "menu.cat.desserts": "Դեսերտներ",
  "menu.cat.savory": "Տաք ուտեստներ",

  // About
  "about.title": "Մեր պատմությունը",
  "about.lead": "Փոքրիկ ընտանեկան սրճարան՝ մեծ սերով դեպի թարմ թխվածքները",
  "about.p1": "Ponchik Monchik-ը ավելին է, քան ուղղակի սրճարան։ Մենք մի վայր ենք, որտեղ ընտանիքները հավաքվում են շաբաթավերջին, ուսանողները՝ դասերից հետո, և զբոսաշրջիկները՝ Երևանի առաջին քաղցր փորձառությունը ստանալու համար։",
  "about.p2": "Մեր պոնչիկները թխվում են փոքր խմբաքանակներով, ամբողջ օրվա ընթացքում։ Մենք հավատում ենք, որ լավագույն համը գալիս է թարմությունից, պարզ բաղադրիչներից և մի փոքր սիրով եփած խմորից։",
  "about.p3": "Անկախ նրանից՝ եկել ես առավոտյան սուրճի, կեսօրին դեսերտի, թե երեկոյան ընկերներով, մենք ուզում ենք, որ զգաս՝ սա քո վայրն է։",
  "about.values.title": "Ինչ ենք գնահատում",
  "about.values.fresh": "Թարմություն ամեն օր",
  "about.values.fresh.text": "Ամեն խմոր ձեռագործ է, ամեն պոնչիկ՝ տաք։",
  "about.values.warm": "Ջերմ ընդունելություն",
  "about.values.warm.text": "Ինչպես հին ընկերոջ տանը։",
  "about.values.local": "Տեղական ոգի",
  "about.values.local.text": "Հայկական ճաշակով, ժամանակակից ոճով։",

  // Reviews page
  "reviews.page.title": "Մեր հյուրերի սիրով",
  "reviews.page.lead": "Իրական մարդկանց իրական տպավորությունները",

  // Contact page
  "contact.title": "Կոնտակտ ու գտնվելու վայր",
  "contact.lead": "Եկեք այցելեք մեզ կամ զանգահարեք — մենք միշտ ուրախ ենք հանդիպել ձեզ։",
  "contact.hours.title": "Աշխատանքային ժամեր",
  "contact.address.title": "Հասցե",
  "contact.phone.title": "Հեռախոս",
  "contact.social.title": "Սոցցանցեր",
  "contact.dineIn": "Տեղում նստել",
  "contact.takeaway": "Հետդ տանել",

  // FAQ page
  "faq.page.title": "Հարցեր ու պատասխաններ",
  "faq.page.lead": "Ամեն ինչ, ինչ կարող է հետաքրքրել ձեզ",

  // Gallery page
  "gallery.page.title": "Պատկերասրահ",
  "gallery.page.lead": "Մի հայացք մեր սրճարանին, պոնչիկներին և մեր հյուրերին",

  // Mobile bar
  "mobile.call": "Զանգ",
  "mobile.directions": "Ճանապարհ",
  "mobile.menu": "Մենյու",

  // Admin link (footer, discreet)
  "footer.admin": "Ադմին",
};

const ru: Dict = {
  "nav.home": "Главная",
  "nav.menu": "Меню",
  "nav.about": "О нас",
  "nav.gallery": "Галерея",
  "nav.reviews": "Отзывы",
  "nav.contact": "Контакты",
  "nav.faq": "Вопросы",

  "cta.viewMenu": "Смотреть меню",
  "cta.callNow": "Позвонить",
  "cta.directions": "Маршрут",
  "cta.findUs": "Найти нас",
  "cta.seeAll": "Смотреть всё",
  "cta.openMaps": "Открыть на карте",

  "header.openUntil": "Открыто до 23:30",
  "header.address": "Московян 31, Ереван",

  "hero.eyebrow": "Семейное кафе · Ереван",
  "hero.title": "Свежие пончики, тёплый кофе, уютные моменты",
  "hero.subtitle": "Ponchik Monchik — это место, где сладкая ностальгия, свежая выпечка и тёплая атмосфера встречаются в самом сердце Еревана.",
  "hero.urgency": "Открыто каждый день до 23:30 · Свежеприготовлено — вкуснее всего тёплыми",

  "featured.title": "Наши любимцы",
  "featured.subtitle": "Небольшая подборка самых любимых",
  "featured.bestWarm": "Лучше тёплыми",

  "howto.title": "Как насладиться пончиком",
  "howto.subtitle": "Маленький гид к идеальному моменту",
  "howto.step1.title": "Заказывайте, пока тёплые",
  "howto.step1.text": "Свежие, мягкие, ароматные — именно такими они и должны быть.",
  "howto.step2.title": "С нашим кофе",
  "howto.step2.text": "Кремовый капучино и сладкий пончик — идеальная пара.",
  "howto.step3.title": "Делитесь… или нет",
  "howto.step3.text": "Не осудим. Иногда один пончик — это маленький личный праздник.",

  "story.eyebrow": "Наша история",
  "story.title": "Уютное кафе, где найдётся место каждому",
  "story.text": "Мы готовим пончики и душевную еду для семей, студентов, туристов и всех, кто ищет тёплый уголок. Каждое тесто — вручную.",
  "story.cta": "Узнать больше",

  "why.title": "Почему к нам возвращаются",
  "why.fresh.title": "Свежо и вкусно",
  "why.fresh.text": "Тёплые пончики, домашний кофе — каждый день заново.",
  "why.cozy.title": "Уютная атмосфера",
  "why.cozy.text": "Мягкий свет, тёплые тона, неспешное время.",
  "why.friendly.title": "Дружелюбный сервис",
  "why.friendly.text": "По-семейному — как дома.",
  "why.central.title": "В центре города",
  "why.central.text": "Московян 31, в двух шагах от Каскада.",

  "besttime.title": "Когда лучше зайти",
  "besttime.subtitle": "Мы рады в любое время, но вот наш маленький совет — для самого спокойного визита",
  "besttime.morning.label": "Тихое утро",
  "besttime.morning.time": "09:00–11:30",
  "besttime.morning.tip": "Идеально для завтрака и свежего пончика.",
  "besttime.afternoon.label": "Спокойный день",
  "besttime.afternoon.time": "14:30–17:30",
  "besttime.afternoon.tip": "Никакой спешки — только кофе и десерт.",
  "besttime.evening.label": "Оживлённый вечер",
  "besttime.evening.time": "после 19:00",
  "besttime.evening.tip": "Атмосферно, но людно — приходите чуть раньше.",

  "reviews.title": "С любовью от наших гостей",
  "reviews.summary": "Гости возвращаются ради тёплых пончиков, уютного интерьера и душевного приёма. Вот что они говорят:",
  "reviews.note": "Популярные места порой бывают оживлёнными в час пик — приходите немного раньше для самого спокойного визита.",
  "reviews.q1": "«Очень вкусные пончики и тёплая атмосфера. Прямо как дома».",
  "reviews.q1.attr": "Гость из Еревана",
  "reviews.q2": "«Дружелюбный персонал, красивый интерьер и отличный кофе».",
  "reviews.q2.attr": "Постоянный гость",
  "reviews.q3": "«Прекрасное место для семьи. Дети в восторге».",
  "reviews.q3.attr": "Семья",

  "gallery.title": "Немного из нашего мира",
  "gallery.subtitle": "Свежая выпечка, тёплые тона, спокойные моменты",

  "location.title": "Найдите нас",
  "location.subtitle": "Ежедневно 09:00–23:30",
  "location.address": "Московян 31, Ереван",
  "location.phone": "093 699 909",

  "faq.title": "Частые вопросы",
  "faq.q1": "Есть ли посадка?",
  "faq.a1": "Да, у нас уютный зал для семей и компаний.",
  "faq.q2": "Можно ли взять с собой?",
  "faq.a2": "Конечно — всё доступно на вынос.",
  "faq.q3": "Какие часы самые загруженные?",
  "faq.a3": "Обычно вечером после 19:00 и в выходные. Для спокойного визита — утро или ранний день.",
  "faq.q4": "Есть ли вегетарианские опции?",
  "faq.a4": "Да — у нас есть выпечка, сладкие пончики, кофе и десерты без мяса.",
  "faq.q5": "Можно заказать кофе и десерт вместе?",
  "faq.a5": "Конечно. Многие именно так и делают — это любимая комбинация.",
  "faq.q6": "Есть ли солёные блюда?",
  "faq.a6": "Да — сэндвичи, пицца, паста и горячие блюда.",

  "footer.tagline": "Свежие пончики и тёплый кофе в сердце Еревана",
  "footer.hours": "Часы работы",
  "footer.everyDay": "Каждый день",
  "footer.contact": "Контакты",
  "footer.follow": "Мы в соцсетях",
  "footer.rights": "Все права защищены",

  "menu.title": "Наше меню",
  "menu.subtitle": "От сладкого до солёного — всё свежее и с любовью",
  "menu.quickPicks": "Быстрый выбор",
  "menu.quickPicks.sub": "Наши хиты",
  "menu.search": "Искать в меню…",
  "menu.popular": "Хит",
  "menu.empty": "Ничего не найдено.",
  "menu.cat.ponchiks": "Сладкие пончики",
  "menu.cat.monchiks": "Мончики",
  "menu.cat.pies": "Пирожки и бурек",
  "menu.cat.breakfast": "Завтраки",
  "menu.cat.coffee": "Кофе и напитки",
  "menu.cat.desserts": "Десерты",
  "menu.cat.savory": "Горячие блюда",

  "about.title": "Наша история",
  "about.lead": "Маленькое семейное кафе с большой любовью к свежей выпечке",
  "about.p1": "Ponchik Monchik — это больше, чем просто кафе. Это место, где собираются семьи в выходные, студенты после занятий, и туристы за первым сладким впечатлением от Еревана.",
  "about.p2": "Наши пончики выпекаются маленькими партиями в течение всего дня. Мы верим, что лучший вкус — это свежесть, простые ингредиенты и тесто с любовью.",
  "about.p3": "Утренний кофе, дневной десерт или вечер с друзьями — мы хотим, чтобы вы чувствовали: это ваше место.",
  "about.values.title": "Что мы ценим",
  "about.values.fresh": "Свежесть каждый день",
  "about.values.fresh.text": "Каждое тесто — вручную, каждый пончик — тёплым.",
  "about.values.warm": "Тёплый приём",
  "about.values.warm.text": "Как у старого друга.",
  "about.values.local": "Местный дух",
  "about.values.local.text": "С армянским вкусом, в современном стиле.",

  "reviews.page.title": "С любовью от наших гостей",
  "reviews.page.lead": "Настоящие впечатления настоящих людей",

  "contact.title": "Контакты и адрес",
  "contact.lead": "Заходите или звоните — мы всегда рады встрече.",
  "contact.hours.title": "Часы работы",
  "contact.address.title": "Адрес",
  "contact.phone.title": "Телефон",
  "contact.social.title": "Соцсети",
  "contact.dineIn": "На месте",
  "contact.takeaway": "С собой",

  "faq.page.title": "Вопросы и ответы",
  "faq.page.lead": "Всё, что может вас интересовать",

  "gallery.page.title": "Галерея",
  "gallery.page.lead": "Взгляд на наше кафе, наши пончики и наших гостей",

  "mobile.call": "Звонок",
  "mobile.directions": "Маршрут",
  "mobile.menu": "Меню",

  "footer.admin": "Админ",
};

const en: Dict = {
  "nav.home": "Home",
  "nav.menu": "Menu",
  "nav.about": "About",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",

  "cta.viewMenu": "View Menu",
  "cta.callNow": "Call Now",
  "cta.directions": "Get Directions",
  "cta.findUs": "Find Us",
  "cta.seeAll": "See all",
  "cta.openMaps": "Open in Maps",

  "header.openUntil": "Open today until 23:30",
  "header.address": "Moskovyan 31, Yerevan",

  "hero.eyebrow": "Family café · Yerevan",
  "hero.title": "Fresh ponchiks, warm coffee, cozy moments",
  "hero.subtitle": "Ponchik Monchik brings sweet nostalgia, fresh-baked flavors, and a welcoming café experience to the heart of Yerevan.",
  "hero.urgency": "Open every day until 23:30 · Freshly fried — best enjoyed warm",

  "featured.title": "Our favorites",
  "featured.subtitle": "A small selection of the most-loved",
  "featured.bestWarm": "Best enjoyed warm",

  "howto.title": "How to enjoy a ponchik",
  "howto.subtitle": "Our little guide to the perfect moment",
  "howto.step1.title": "Order while warm",
  "howto.step1.text": "Soft, golden, freshly fried — exactly how they should be.",
  "howto.step2.title": "Pair with our coffee",
  "howto.step2.text": "Creamy cappuccino and a sweet ponchik — a perfect duo.",
  "howto.step3.title": "Share — or don't",
  "howto.step3.text": "We won't judge. Sometimes one ponchik is just for you.",

  "story.eyebrow": "Our story",
  "story.title": "A neighborhood café with a seat for everyone",
  "story.text": "We make ponchiks and comforting café food for families, students, tourists, and anyone looking for a warm corner. Every batch, every dough — by hand.",
  "story.cta": "Read more",

  "why.title": "Why people keep coming back",
  "why.fresh.title": "Fresh and tasty",
  "why.fresh.text": "Warm ponchiks, real coffee, every single day.",
  "why.cozy.title": "Cozy atmosphere",
  "why.cozy.text": "Soft light, warm tones, slow time.",
  "why.friendly.title": "Friendly service",
  "why.friendly.text": "Family-style — like coming home.",
  "why.central.title": "Heart of Yerevan",
  "why.central.text": "Moskovyan 31, steps from the Cascade.",

  "besttime.title": "Best time to visit",
  "besttime.subtitle": "We love you any time, but here's our little tip for the most relaxed visit",
  "besttime.morning.label": "Quiet mornings",
  "besttime.morning.time": "09:00–11:30",
  "besttime.morning.tip": "Perfect for breakfast and a fresh ponchik.",
  "besttime.afternoon.label": "Calm afternoons",
  "besttime.afternoon.time": "14:30–17:30",
  "besttime.afternoon.tip": "No rush — just coffee and dessert.",
  "besttime.evening.label": "Lively evenings",
  "besttime.evening.time": "after 19:00",
  "besttime.evening.tip": "Cozy but busier — come a little earlier.",

  "reviews.title": "Loved by our guests",
  "reviews.summary": "Guests come back for the warm ponchiks, the cozy interior, and the friendly welcome. Here's what they say:",
  "reviews.note": "Popular spots can get busy at peak hours — visit a little earlier for the most relaxed experience.",
  "reviews.q1": "\"Warm atmosphere and very tasty ponchiks. Felt like home.\"",
  "reviews.q1.attr": "Guest in Yerevan",
  "reviews.q2": "\"Friendly staff, beautiful interior, and great coffee.\"",
  "reviews.q2.attr": "Regular visitor",
  "reviews.q3": "\"Lovely place to visit with family. The kids loved it.\"",
  "reviews.q3.attr": "A family",

  "gallery.title": "A little of our world",
  "gallery.subtitle": "Fresh pastry, warm tones, quiet moments",

  "location.title": "Find us",
  "location.subtitle": "Every day · 09:00–23:30",
  "location.address": "Moskovyan 31, Yerevan",
  "location.phone": "093 699 909",

  "faq.title": "Frequently asked",
  "faq.q1": "Do you have dine-in?",
  "faq.a1": "Yes — our cozy interior welcomes families and groups.",
  "faq.q2": "Do you have takeaway?",
  "faq.a2": "Of course — everything on the menu is available to go.",
  "faq.q3": "What are your busiest hours?",
  "faq.a3": "Usually evenings after 19:00 and weekends. For a calmer visit, mornings and early afternoons are perfect.",
  "faq.q4": "Do you have vegetarian options?",
  "faq.a4": "Yes — pastries, sweet ponchiks, coffee, and desserts without meat.",
  "faq.q5": "Can I order coffee and dessert together?",
  "faq.a5": "Absolutely — that's the most-loved combination here.",
  "faq.q6": "Are there savory items too?",
  "faq.a6": "Yes — sandwiches, pizza, pasta, and warm dishes.",

  "footer.tagline": "Fresh ponchiks and warm coffee in the heart of Yerevan",
  "footer.hours": "Opening hours",
  "footer.everyDay": "Every day",
  "footer.contact": "Contact",
  "footer.follow": "Follow us",
  "footer.rights": "All rights reserved",

  "menu.title": "Our menu",
  "menu.subtitle": "From sweet to savory — everything fresh and made with care",
  "menu.quickPicks": "Quick picks",
  "menu.quickPicks.sub": "Our must-tries",
  "menu.search": "Search the menu…",
  "menu.popular": "Popular",
  "menu.empty": "No items found.",
  "menu.cat.ponchiks": "Sweet Ponchiks",
  "menu.cat.monchiks": "Monchiks",
  "menu.cat.pies": "Pies & Patties",
  "menu.cat.breakfast": "Breakfast",
  "menu.cat.coffee": "Coffee & Drinks",
  "menu.cat.desserts": "Desserts",
  "menu.cat.savory": "Savory",

  "about.title": "Our story",
  "about.lead": "A small family café with a big love for fresh-baked treats",
  "about.p1": "Ponchik Monchik is more than a café. It's where families gather on weekends, students stop by after class, and travelers find their first sweet taste of Yerevan.",
  "about.p2": "Our ponchiks are fried in small batches throughout the day. We believe the best flavor comes from freshness, simple ingredients, and dough made with care.",
  "about.p3": "Whether it's a morning coffee, an afternoon dessert, or an evening with friends — we want this to feel like your place.",
  "about.values.title": "What we care about",
  "about.values.fresh": "Fresh every day",
  "about.values.fresh.text": "Hand-made dough, ponchiks served warm.",
  "about.values.warm": "A warm welcome",
  "about.values.warm.text": "Like an old friend's home.",
  "about.values.local": "A local soul",
  "about.values.local.text": "Armenian taste, modern style.",

  "reviews.page.title": "Loved by our guests",
  "reviews.page.lead": "Real impressions from real people",

  "contact.title": "Contact & location",
  "contact.lead": "Visit us or give us a call — we always love to meet you.",
  "contact.hours.title": "Opening hours",
  "contact.address.title": "Address",
  "contact.phone.title": "Phone",
  "contact.social.title": "Follow us",
  "contact.dineIn": "Dine-in",
  "contact.takeaway": "Takeaway",

  "faq.page.title": "Questions & answers",
  "faq.page.lead": "Everything you might want to know",

  "gallery.page.title": "Gallery",
  "gallery.page.lead": "A glimpse into our café, our ponchiks, and our guests",

  "mobile.call": "Call",
  "mobile.directions": "Directions",
  "mobile.menu": "Menu",

  "footer.admin": "Admin",
};

export const dictionaries: Record<Lang, Dict> = { hy, ru, en };
