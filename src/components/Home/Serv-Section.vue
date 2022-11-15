<template>
  <section>
    <div class="section-wrapper">
      <div class="container">
        <div class="serv-title">
          <p class="serv-titile-text">Услуги нашей компании</p>
          <p class="serv-under-title-text">
            Почему мы лучше других логистических компаний
          </p>
        </div>

        <div class="serv-demo">
          <div class="demo-items">
            <div class="select-demo">
              
              <p class="select-item" v-for="(item, index) in services" :key="index"
              :class="{ active : item.active }" @click="changeTab(index)">
                {{item.title}}
              </p>
            </div>
            <img :src="getActiveTab.img" alt="" class="benz"/>
          </div>

          <div class="demo-text">
            <div class="demo-text-title">{{getActiveTab.title}}</div>
            <div class="demo-main-text">
              {{getActiveTab.descr}}
            </div>
            <router-link tag="a" :to="`/serv/${getActiveTab.link}`">
              <button class="serv-btn">
              Все наши услуги
            </button>
            </router-link>
          </div>
        </div>
      </div>
     

      <section>
        <div class="meet-wrapper">
          <div class="container">
            <div class="meet-title">
              Чего вы <span class="meet-big">не встретите</span> в нашей
              компании:
            </div>
            <div class="meet-items">
              <div class="row gy-5">
                <div
                  class="col-6 col-lg-3 for-width"
                  v-for="item in meets"
                  :key="item.id"
                >
                  <img :src="item.img" alt="" />
                  <div class="meet-items-text" v-html="item.text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <More></More>
        </section>
        </section>
    </div>
        <section>
            <div class="question-wrapper">
                <div class="container">
                    <div class="question-title">
                        У Вас остались вопросы? 
                        <div class="question-under-title">
                            Оставьте свои данные и мы свяжемся с <br> Вами в ближайшее время
                        </div>
                    </div>

                    <div class="input-wrapper">
                        <div class="item-input1">
                            <span class="name">Ваше имя</span>
                            <div><input class="f-input" type="text" placeholder="Как к вам обращаться?"></div>
                            
                        </div>
                        <div class="item-input2">
                            <span class="name">Ваше имя</span>
                            <div><input class="f-input" type="text" placeholder="Как к вам обращаться?"></div>
                        </div>
                        <button class="question-btn">Отправить заявку</button>
                    </div>
                        <button class="question-btn2">Отправить заявку</button>

                </div>
            </div>
        </section>
  </section>
</template>

<script>
import More from "@/components/Home/More-serv.vue";

export default {
  components: { More },
 computed: {
    getActiveTab(){
      let image = this.services.find(item => {
        return item.active === true
      })
      return image
    }
  },
  methods: {
    changeTab(index){
      this.services.forEach(item =>{
        item.active = false
      })
      this.services[index].active = true
    }
  },
  data() {
    return {
       services: [
        {
          title: 'Бензовозы',
          img: require('@/assets/img/section/benz.png'),
          active: true,
          descr: 'Бензовооз — тип специальной техники, предназначенной для перевозки нефтепродуктов. Как и все коммерческие грузовые машины, бензовоз предназначен для транспортировки',
          link: '/benz'
        },
        {
          title: 'Негабаритные грузы',
          img: require('@/assets/img/section/over.png'),
          active: false,
          descr: 'Негабари́тный груз — это груз, габариты которого превышают допустимые при транспортировке размеры и установленные правилами дорожного движения нормы. Другими словами, негабаритный размер — это такой размер груза, который невозможно поместить в стандартное транспортное средство',
          link: '/negab'
        },
        {
          title: 'Контейнерные перевозки',
          img: require('@/assets/img/section/cont.png'),
          active: false,
          descr: 'Контейнерные перевозки — грузоперевозки с использованием стандартных контейнеров. Позволяют выполнять бесперегрузочную доставку товаров от отправителя к получателю, тем самым значительно сократив объём промежуточных погрузочно-разгрузочных работ.',
          link: '/container'
        }
      ],
      meets: [
        {
          id: 1,
          img: require("@/assets/img/section/stop.svg"),
          text: "Перевезем ваш груз в <br> короткие сроки",
        },
        {
          id: 2,
          img: require("@/assets/img/section/stop.svg"),
          text: "Перевезем ваш груз в <br> короткие сроки",
        },
        {
          id: 3,
          img: require("@/assets/img/section/stop.svg"),
          text: "Перевезем ваш груз в <br> короткие сроки",
        },
        {
          id: 4,
          img: require("@/assets/img/section/stop.svg"),
          text: "Перевезем ваш груз в <br> короткие сроки",
        },
      ],
    };
  },
};
</script>

<style>
</style>