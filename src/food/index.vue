<template>

  <div id="main" class="index-content">
      <HDEADERS v-bind:if_back="0"></HDEADERS>
      <!-- 主要内容 -->

     <div class="index-head ">
         <p>方便快捷 拒绝等待</p>

     </div>

     <div class="index-mid">
       <p class="mid-p">扫描店铺桌面食尚客二维码自助点餐</p>

       <p class="mid-btn" @click="goShop">
          <img src="@assets/foodimg/qcode.png"/>
          <span>扫码点餐</span>
       </p>

     </div>
  </div>



</template>

<script type="text/javascript">
 import HDEADERS from '../components/food_header.vue';

 export default {
    components: {
      HDEADERS
    },
    data () {
      return {

      }
    },
    computed:{

    },
    created(){

    },
    methods:{
      goShop:function () {
        this.$router.push('/shop');
      }
    }


  }
</script>

