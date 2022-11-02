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
              <p class="select-item-1" v-on:click="disp('r1')">Бензовозы</p>
              <p class="select-middle-item" v-on:click="disp('r2')">Негабаритные грузы</p>
              <p class="select-last-item" v-on:click="disp('r3')">Контейнерные перевозки</p>
            </div>
            <img  src="@/assets/img/section/benz.png" alt="" class="benz"/>
            <!-- <img id="r2" style="display:none;" src="@/assets/img/section/benz.png" alt="" class="benz"/>
            <img id="r3" style="display:none;" src="@/assets/img/section/benz.png" alt="" class="benz"/> -->
          </div>

          <div class="demo-text" id="r1">
            <div class="demo-text-title">Перевозки бензовозом</div>
            <div class="demo-main-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              necessitatibus ullam. Nam maxime, molestiae. Sit neque possimus
              mollitia soluta iure ratione, culpa aliquid dolorem amet laborum
              tempora et recusandae. Quasi magni quae soluta omnis eligendi
              incidunt, modi! Eum, sunt, neque! Perferendis exercitationem, eum
              nihil voluptatibus inventore suscipit, aliquid aut officiis.
            </div>
            <button class="serv-btn">Все наши услуги</button>
          </div>
           <div class="demo-text" id="r2" style="display:none;">
            <div class="demo-text-title">Перевозки каблучком</div>
            <div class="demo-main-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              necessitatibus ullam. Nam maxime, molestiae. Sit neque possimus
              mollitia soluta iure ratione, culpa aliquid dolorem amet laborum
              tempora et recusandae. Quasi magni quae soluta omnis eligendi
              incidunt, modi! Eum, sunt, neque! Perferendis exercitationem, eum
              nihil voluptatibus inventore suscipit, aliquid aut officiis.
            </div>
            <button class="serv-btn">Все наши услуги</button>
          </div>
           <div class="demo-text" id="r3" style="display:none;">
            <div class="demo-text-title">Перевозки тягачом</div>
            <div class="demo-main-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
              necessitatibus ullam. Nam maxime, molestiae. Sit neque possimus
              mollitia soluta iure ratione, culpa aliquid dolorem amet laborum
              tempora et recusandae. Quasi magni quae soluta omnis eligendi
              incidunt, modi! Eum, sunt, neque! Perferendis exercitationem, eum
              nihil voluptatibus inventore suscipit, aliquid aut officiis.
            </div>
            <button class="serv-btn">Все наши услуги</button>
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
              <div class="row">
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

  data() {
    return {
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
  methods: {
       disp(myid){
            document.getElementById('r1').style.display = "none";
            document.getElementById('r2').style.display = "none";
            document.getElementById('r3').style.display = "none";
            document.getElementById(myid).style.display = "block";
        }
  }
};
</script>

<style>
</style>