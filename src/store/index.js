import { createStore } from 'vuex'

export default createStore({
  state: {
    slides: [
      {
        name: 'Букет «Нежность»',
        description: 'Элегантный букет, который станет отличным подарком на день рождения или юбилей.',
        size: '30x40',
        price: 3600,
        img: 'popular'
      },
      {
        name: 'Букет 2',
        description: 'bla bla',
        size: '20x40',
        price: 3000,
        img: 'popular-2'
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
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getSlides(state) {
      return state.slides
    },
    getFeedback(state) {
      return state.feedback
    },
  },
})
