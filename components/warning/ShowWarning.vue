<template>
  <div class="show-warning">
    <p>Вы положили товар в корзину.Хотите оформить заказ,или продолжить покупки?</p>
    <button class="btn" v-on:click="goToBusket">Place an order</button>
    <button class="btn" v-on:click="returnDefault">Сontinue shopping</button>
  </div>
</template>

<script>
export default {
  name: "ShowWarning",
  methods: {
    returnDefault() {
      this.$router.push('/');
    },
    goToBusket() {
      this.$router.push('/cart');
    }
  }

}
</script>

<style scoped>
 .show-warning {
   width: 100%;
   display: flex;
   background-color: #000;
   justify-content: space-between;
   padding: 20px;
   border-radius: 10px;
 }

 p {
   color: white;
   font-weight: 500;
   margin-top: 5px;
 }

 .btn {
   font-weight: 700;
   background-color: white;
   border-radius: 15px;
 }
</style>