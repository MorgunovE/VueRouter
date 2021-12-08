export default {
  state: {
    shopList: [
      {
        id: 1,
        title: "Nike Red",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt dolorem dolorum ea minus quo repudiandae saepe sint ullam voluptatem.",
        img: require('../assets/img/1.png')
      },
      {
        id: 2,
        title: "Nike Default",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt dolorem dolorum ea minus quo repudiandae saepe sint ullam voluptatem.",
        img: require('../assets/img/4.png')
      },
      {
        id: 3,
        title: "Nike Green",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt dolorem dolorum ea minus quo repudiandae saepe sint ullam voluptatem.",
        img: require('../assets/img/7.png')
      },
      {
        id: 4,
        title: "Nike Street",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet deserunt dolorem dolorum ea minus quo repudiandae saepe sint ullam voluptatem.",
        img: require('../assets/img/10.png')
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state){
      return state.shopList
    }
  }
}