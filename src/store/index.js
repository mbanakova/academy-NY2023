import { createStore } from 'vuex'

export default createStore({
  state: {
    features: [
      {
        title: 'Быстрая доставка',
        description: 'Можем собрать букет и передать его в доставку всего за час.',
        svg: 'advantage-1.svg',
      },
      {
        title: 'Всегда свежие цветы',
        description: 'Тщательно следим за состоянием цветов, а опытные флористы отбирают для букетов каждый цветок.',
        svg: 'advantage-2.svg',
      },
      {
        title: 'Отправляем фото цветов',
        description: 'Перед доставкой сделаем фотографию букета и отправим вам.',
        svg: 'advantage-3.svg',
      }
    ],
    slides: [
      {
        name: 'Букет «Нежность»',
        description: 'Элегантный букет, который станет отличным подарком на день рождения или юбилей.',
        size: '30x40',
        price: 3600,
        img: 'popular.png'
      },
      {
        name: 'Букет 2',
        description: 'bla bla',
        size: '20x40',
        price: 3000,
        img: 'popular-2.png'
      },
    ],
    feedback: [
      {
        text: 'Всё очень понравилось! Быстрое оформление заказа, выбор удобного времени доставки. Всем большое спасибо!',
        author: 'Марина'
      },
      {
        text: 'Внимательные флористы, вежливые. Магазин находится прям рядом с метро. Букет очень понравился, буду ещё заказывать!',
        author: 'Татьяна'
      },
      {
        text: 'Выбор букетов на любой вкус и цену. Бывают хорошие скидки, а флористы всегда помогут и точно соберут красивый букет!',
        author: 'Ольга'
      },
    ],
    bouquet: [
      {
        title: 'Свадебные букеты',
        description: 'Букеты для невест',
        img: 'select-1.jpg',
        link: '#'
      },
      {
        title: 'Букеты с пионами',
        description: 'Букеты с сезонными пионами',
        img: 'select-2.jpg',
        link: '#'
      },
      {
        title: 'Выбрать букет',
        description: 'Букеты в ассортименте',
        img: 'select-3.jpg',
        link: '#'
      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getFeatures(state) {
      return state.features
    },
    getSlides(state) {
      return state.slides
    },
    getFeedback(state) {
      return state.feedback
    },
    getBouquets(state) {
      return state.bouquet
    },
  },
})
