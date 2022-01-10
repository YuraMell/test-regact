import NewModel from './images/new-model.png'
import SlideImg from './images/slide-img.png'
import ManItem from "./images/man-item.png";
import Man from "./images/category-man.png";
import WoMan from "./images/WoMan.png";

// export const allProducts = [...new Set([...newModels, ...newModelsSales])];

export const allProducts = [
  {
    title: 'Коктейльное платье',
    img: NewModel,
    price: '40 000',
    _id: 5,
    sales: 0,
    new: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Вечернее платье',
    img: NewModel,
    price: '60 000',
    _id: 6,
    sales: 0,
    new: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Дэфолтный скин',
    img: NewModel,
    price: '00 000',
    _id: 7,
    new: true,
    sales: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Старое платье',
    img: NewModel,
    price: '10 000',
    _id: 8,
    new: true,
    sales: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Пивная футболка',
    img: NewModel,
    price: '30 000',
    _id: 1,
    sales: "50%",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
  {
    title: 'Утреняя футболка',
    img: NewModel,
    price: '25 000',
    _id: 2,
    sales: "50%",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
  {
    title: 'Рарный скин',
    img: NewModel,
    price: '18 000',
    _id: 3,
    sales: "50%",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
  {
    title: 'Старая футболка',
    img: NewModel,
    price: '10 000',
    _id: 4,
    sales: "50%",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
]

export const newModels = allProducts.filter(item => item.new)

export const modelSales = allProducts.filter(item => parseInt(item.sales) > 0)

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
    link_id: 1,
    img: Man,
  },
  colWoMan: {
    titleSex: 'ЖЕНСКАЯ ',
    description: 'Обувь, полуверы, костюмы',
    link_id: 2,
    img: WoMan,
  }
}
