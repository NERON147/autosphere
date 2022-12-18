<template>
  <section>
    <div class="more-wrapper">
      <div class="container">
        <div class="more-title">
          Дополнительные услуги
          <div class="more-under-titile">
            К каждому клиенту индивидуальный подход
          </div>
        </div>
        <div class="row card-center">
          <div class="col-md-6 col-lg-3" v-for="card in cards" :key="card.id">
            <div class="card-wrapper card-more">
              <div class="card-main">
                <div class="card-title">
                  {{ card.title }}
                </div>
                <div class="card-img">
                  <img :src="card.img" alt="" />
                </div>
                <div class="card-footer-wrap">
                  <div class="card-text">
                    {{ card.footer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Фуры",
          img: require("@/assets/img/section/card1.png"),
          footer:
            "Перевезем ваш груз в короткие сроки и с наименьшими затратами",
        },
        {
          id: 2,
          title: "Малогабаритные перевозки",
          img: require("@/assets/img/section/card2.png"),
          footer:
            "Перевезем ваш груз в короткие сроки и с наименьшими затратами",
        },
        {
          id: 3,
          title: "Домашние переезды",
          img: require("@/assets/img/section/card3.png"),
          footer:
            "Перевезем ваш груз в короткие сроки и с наименьшими затратами",
        },
        {
          id: 4,
          title: "Отраслевые решения",
          img: require("@/assets/img/section/card4.png"),
          footer:
            "Перевезем ваш груз в короткие сроки и с наименьшими затратами",
        },
      ],
    };
  },
};
</script>

<style>
</style>