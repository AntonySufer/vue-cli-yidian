<template>

  <div id="order" class="my-order-content">
      <HDEADERS v-bind:if_back="0" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
   <div class="my-ord-con">

     <div class="my-ord-menu-ul">
       <!--menu start-->
       <div class="my-ord-down-menu">
         <p class="my-ord-menu-li menu-active">全部</p>
         <p class="my-ord-menu-li">未付款</p>
         <p class="my-ord-menu-li">已付款</p>
       </div>
       <!--menu end-->
     </div>

     <div class="my-ord-mid">
       <div class="eat-leave"></div>
       <div class="my-ord-main my-ord-li">
           <div class="my-ord-shop">
              <p class="my-ord-shop-info">
                <img src="@assets/foodimg/shop-name.jpg" alt="">
                <span>西西里西西里餐厅餐厅</span>

              </p>

             <p class="my-ord-confim my-mar-right">已完成</p>
           </div>
       </div>
     </div>




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
        my_title:'订单'
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

