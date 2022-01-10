import NewModel from './images/new-model.png'
import SlideImg from './images/slide-img.png'
import ManItem from "./images/man-item.png";
import Man from "./images/category-man.png";
import WoMan from "./images/WoMan.png";
export const newModels = [
  {
    title: 'Коктейльное платье',
    img: NewModel,
    price: '40 000',
  },
  {
    title: 'Вечернее платье',
    img: NewModel,
    price: '60 000',
  },
  {
    title: 'Дэфолтный скин',
    img: NewModel,
    price: '00 000',
  },
  {
    title: 'Старое платье',
    img: NewModel,
    price: '10 000',
  },
]

export const slideDescription = [
  {
    title: "Зимняя распродажа",
    sales: "СКИДКИ ДО 90%",
    linkTitle: "СМОТРЕТЬ МОДЕЛИ",
    img: SlideImg,
    defSale: "9 900 ₽",
    sale: "1 900 ₽"
  },
  {
    title: "Летняя распродажа",
    sales: "СКИДКИ ДО 70%",
    linkTitle: "СМОТРЕТЬ МОДЕЛИ",
    img: SlideImg,
    defSale: "11 900 ₽",
    sale: "6 900 ₽"
  },
  {
    title: "Просто распродажа",
    sales: "СКИДКИ ДО 45%",
    linkTitle: "СМОТРЕТЬ МОДЕЛИ",
    img: SlideImg,
    defSale: "2 900 ₽",
    sale: "900 ₽"
  },
]

export const catalogItems = [
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  }
]

export const categories = {
  colMan: {
    titleSex: 'МУЖСКАЯ ',
    description: 'Обувь, полуверы, костюмы',
    linkID: 1,
    img: Man,
  },
  colWoMan: {
    titleSex: 'ЖЕНСКАЯ ',
    description: 'Обувь, полуверы, костюмы',
    linkID: 2,
    img: WoMan,
  }
}