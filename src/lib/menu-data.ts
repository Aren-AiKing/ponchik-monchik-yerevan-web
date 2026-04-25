import ponchikStrawberry from "@/assets/ponchik-strawberry.jpg";
import ponchikChocolate from "@/assets/ponchik-chocolate.jpg";
import ponchikVanilla from "@/assets/ponchik-vanilla.jpg";
import monchik from "@/assets/monchik.jpg";
import meatPie from "@/assets/meat-pie.jpg";
import coffee from "@/assets/coffee.jpg";
import breakfast from "@/assets/breakfast.jpg";

export type MenuCategory =
  | "ponchiks"
  | "monchiks"
  | "pies"
  | "breakfast"
  | "coffee"
  | "desserts"
  | "savory";

export interface I18nText {
  hy: string;
  ru: string;
  en: string;
}

export interface MenuItem {
  id: string;
  category: MenuCategory;
  image: string;
  popular?: boolean;
  homepage?: boolean;
  name: I18nText;
  description: I18nText;
  bestWarm?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "p-strawberry",
    category: "ponchiks",
    image: ponchikStrawberry,
    popular: true,
    homepage: true,
    bestWarm: true,
    name: {
      hy: "Ելակային պոնչիկ",
      ru: "Клубничный пончик",
      en: "Strawberry Ponchik",
    },
    description: {
      hy: "Փափուկ պոնչիկ ելակային ջեմով և վարդագույն գլազուրով",
      ru: "Мягкий пончик с клубничным джемом и розовой глазурью",
      en: "Soft ponchik with strawberry jam and pink glaze",
    },
  },
  {
    id: "p-chocolate",
    category: "ponchiks",
    image: ponchikChocolate,
    popular: true,
    homepage: true,
    bestWarm: true,
    name: {
      hy: "Շոկոլադե պոնչիկ",
      ru: "Шоколадный пончик",
      en: "Chocolate Ponchik",
    },
    description: {
      hy: "Հարուստ շոկոլադե գանաշով՝ կրեմային ու փափուկ ներսի համ",
      ru: "С насыщенной шоколадной ганашью и кремовой начинкой",
      en: "Rich chocolate ganache over a soft, creamy center",
    },
  },
  {
    id: "p-vanilla",
    category: "ponchiks",
    image: ponchikVanilla,
    popular: true,
    homepage: true,
    bestWarm: true,
    name: {
      hy: "Վանիլային պոնչիկ",
      ru: "Ванильный пончик",
      en: "Vanilla Ponchik",
    },
    description: {
      hy: "Կլասիկ վանիլային կրեմով, պարդրա շաքարով",
      ru: "Классический ванильный крем под пудрой",
      en: "Classic vanilla cream, dusted with powdered sugar",
    },
  },
  {
    id: "m-honey",
    category: "monchiks",
    image: monchik,
    popular: true,
    homepage: true,
    name: {
      hy: "Մեղրի մոնչիկ",
      ru: "Медовый мончик",
      en: "Honey Monchik",
    },
    description: {
      hy: "Փոքրիկ խայթ մեղրով և տրորած պիստակով",
      ru: "Маленький кусочек с мёдом и фисташками",
      en: "Bite-sized treat with honey glaze and crushed pistachios",
    },
  },
  {
    id: "m-cinnamon",
    category: "monchiks",
    image: monchik,
    name: {
      hy: "Դարչնի մոնչիկ",
      ru: "Мончик с корицей",
      en: "Cinnamon Monchik",
    },
    description: {
      hy: "Տաք դարչնի-շաքարի ծածկույթով",
      ru: "В тёплой корично-сахарной обсыпке",
      en: "Tossed in warm cinnamon sugar",
    },
  },
  {
    id: "pie-meat",
    category: "pies",
    image: meatPie,
    popular: true,
    homepage: true,
    name: {
      hy: "Մսով կարկանդակ",
      ru: "Пирожок с мясом",
      en: "Meat Pie",
    },
    description: {
      hy: "Փխրուն խմոր, համեմված մսային խորիզ",
      ru: "Слоёное тесто и сочная мясная начинка",
      en: "Flaky pastry with seasoned meat filling",
    },
  },
  {
    id: "pie-cheese",
    category: "pies",
    image: meatPie,
    name: {
      hy: "Պանրով բուրեկ",
      ru: "Бурек с сыром",
      en: "Cheese Burek",
    },
    description: {
      hy: "Հալված պանիր և ոսկեգույն ընկույզիկ խմոր",
      ru: "Расплавленный сыр и золотистое слоёное тесто",
      en: "Melted cheese in golden flaky layers",
    },
  },
  {
    id: "br-eggs",
    category: "breakfast",
    image: breakfast,
    popular: true,
    name: {
      hy: "Խաշած ձու և թարմ հաց",
      ru: "Омлет с тостами",
      en: "Scrambled Eggs & Toast",
    },
    description: {
      hy: "Փափուկ ձու, թարմ լավաշ կամ տոստ, լոլիկներ",
      ru: "Нежный омлет, тосты и томаты черри",
      en: "Soft eggs, fresh toast, cherry tomatoes",
    },
  },
  {
    id: "br-pancakes",
    category: "breakfast",
    image: breakfast,
    name: {
      hy: "Տնական նրբաբլիթներ",
      ru: "Домашние блинчики",
      en: "Homestyle Pancakes",
    },
    description: {
      hy: "Մեղրի, ջեմի կամ թարմ պտուղի հետ",
      ru: "С мёдом, джемом или свежими фруктами",
      en: "With honey, jam, or fresh fruit",
    },
  },
  {
    id: "c-cappuccino",
    category: "coffee",
    image: coffee,
    popular: true,
    name: {
      hy: "Կապուչինո",
      ru: "Капучино",
      en: "Cappuccino",
    },
    description: {
      hy: "Կրեմային փրփուր, հավասարակշռված էսպրեսո",
      ru: "Кремовая пенка, ровный эспрессо",
      en: "Creamy foam, balanced espresso",
    },
  },
  {
    id: "c-latte",
    category: "coffee",
    image: coffee,
    name: {
      hy: "Լատտե",
      ru: "Латте",
      en: "Latte",
    },
    description: {
      hy: "Փափուկ կաթ և թեթև սուրճի համ",
      ru: "Мягкое молоко и нежный кофе",
      en: "Velvety milk and gentle espresso",
    },
  },
  {
    id: "c-armenian",
    category: "coffee",
    image: coffee,
    name: {
      hy: "Հայկական սուրճ",
      ru: "Армянский кофе",
      en: "Armenian Coffee",
    },
    description: {
      hy: "Ավանդական, թանձր ու անուշահոտ",
      ru: "Традиционный, густой и ароматный",
      en: "Traditional, thick, and aromatic",
    },
  },
  {
    id: "d-tiramisu",
    category: "desserts",
    image: ponchikChocolate,
    name: {
      hy: "Տիրամիսու",
      ru: "Тирамису",
      en: "Tiramisu",
    },
    description: {
      hy: "Մասկարպոնե, սուրճ ու կակաո",
      ru: "Маскарпоне, кофе и какао",
      en: "Mascarpone, coffee, and cocoa",
    },
  },
  {
    id: "d-cheesecake",
    category: "desserts",
    image: ponchikVanilla,
    name: {
      hy: "Չիզքեյք",
      ru: "Чизкейк",
      en: "Cheesecake",
    },
    description: {
      hy: "Կրեմային չիզքեյք պտղային ծածկույթով",
      ru: "Кремовый чизкейк с фруктовой ноткой",
      en: "Creamy cheesecake with a fruit accent",
    },
  },
  {
    id: "s-pizza",
    category: "savory",
    image: meatPie,
    name: {
      hy: "Մարգարիտա պիցցա",
      ru: "Пицца Маргарита",
      en: "Margherita Pizza",
    },
    description: {
      hy: "Թարմ լոլիկ, մոցարելլա, ռեհան",
      ru: "Свежие томаты, моцарелла, базилик",
      en: "Fresh tomato, mozzarella, basil",
    },
  },
  {
    id: "s-pasta",
    category: "savory",
    image: breakfast,
    name: {
      hy: "Կրեմային մակարոնեղեն",
      ru: "Паста в сливочном соусе",
      en: "Creamy Pasta",
    },
    description: {
      hy: "Թարմ սոուս, պարմեզան, ճաշակով խոտաբույսեր",
      ru: "Сливочный соус, пармезан, травы",
      en: "Fresh sauce, parmesan, fragrant herbs",
    },
  },
  {
    id: "s-sandwich",
    category: "savory",
    image: breakfast,
    name: {
      hy: "Հավի սենդվիչ",
      ru: "Сэндвич с курицей",
      en: "Chicken Sandwich",
    },
    description: {
      hy: "Թարմ բուլկի, հավի ֆիլե, թարմ բանջարեղեն",
      ru: "Свежая булочка, курица гриль, овощи",
      en: "Fresh bun, grilled chicken, crisp veggies",
    },
  },
];

export const CATEGORY_ORDER: MenuCategory[] = [
  "ponchiks",
  "monchiks",
  "pies",
  "breakfast",
  "coffee",
  "desserts",
  "savory",
];
