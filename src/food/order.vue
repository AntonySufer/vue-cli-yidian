<template>

  <div id="order" class="my-order-content">
      <HDEADERS v-bind:if_back="0" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
   <div class="my-ord-con ">

     <div class="my-ord-menu-ul">
       <!--menu start-->
       <div class="my-ord-down-menu">
         <p class="my-ord-menu-li menu-active">全部</p>
         <p class="my-ord-menu-li">未付款</p>
         <p class="my-ord-menu-li">已付款</p>
       </div>
       <!--menu end-->
     </div>

     <div class="eat-leave"></div>

     <div class="my-ord-mid">

       <div class="my-ord-ul" @click="menuBind('myOrdDet')">
         <!--循环li start-->

         <div class="my-ord-main my-ord-li">
           <div class="my-ord-shop">
             <p class="my-ord-shop-info">
               <img src="@assets/foodimg/shop-name.jpg" alt="">
               <span>西西厅餐厅</span>

             </p>

             <p class="my-ord-confim my-mar-right">已完成</p>
           </div>

           <div class="my-ord-reader ">

             <div class="my-ord-read-con flex-row-nowrap">
               <p class="my-ord-eat-name">干锅猪脚</p>
               <div class="my-reader-li flex-row-nowrap">
                 <p>*1</p>
                 <p class="my-mar-right">￥82.00</p>
               </div>
             </div>

             <div class="my-ord-read-con flex-row-nowrap">

               <p class="my-ord-eat-name">脚猪脚干脚猪脚干锅猪脚猪脚脚干锅猪脚猪脚</p>
               <div class="my-reader-li flex-row-nowrap">
                 <p>*1000</p>
                 <p class="my-mar-right">￥4444482.00</p>
               </div>
             </div>

             <p>... ...</p>

           </div>

           <div class="my-ord-num flex-row-nowrap">
             <p>4件商品</p>
             <p class="my-mar-right">总计:￥246.68</p>
           </div>

         </div>
         <!--循环li end -->

         <!--循环li start-->
         <div class="eat-leave"></div>
         <div class="my-ord-main my-ord-li">
           <div class="my-ord-shop">
             <p class="my-ord-shop-info">
               <img src="@assets/foodimg/shop-name.jpg" alt="">
               <span>西西里西西里餐厅餐厅</span>

             </p>

             <p class="my-ord-confim my-mar-right">已完成</p>
           </div>

           <div class="my-ord-reader ">

             <div class="my-ord-read-con flex-row-nowrap">
               <p class="my-ord-eat-name">干锅猪脚</p>
               <div class="my-reader-li flex-row-nowrap">
                 <p>*1</p>
                 <p class="my-mar-right">￥82.00</p>
               </div>
             </div>

             <div class="my-ord-read-con flex-row-nowrap">

               <p class="my-ord-eat-name">脚猪脚干脚猪脚干锅猪脚猪脚脚干锅猪脚猪脚</p>
               <div class="my-reader-li flex-row-nowrap">
                 <p>*1000</p>
                 <p class="my-mar-right">￥4444482.00</p>
               </div>
             </div>

           <!--  <p>... ...</p>-->

           </div>

           <div class="my-ord-num flex-row-nowrap">
             <p>2件商品</p>
             <p class="my-mar-right">总计:￥246.68</p>
           </div>

         </div>
         <!--循环li end -->

         <!--循环li start-->
         <div class="eat-leave"></div>
         <div class="my-ord-main my-ord-li">
           <div class="my-ord-shop">
             <p class="my-ord-shop-info">
               <img src="@assets/foodimg/shop-name.jpg" alt="">
               <span>西西里西西里餐厅餐厅</span>

             </p>

             <p class="my-ord-confim my-mar-right">已完成</p>
           </div>

           <div class="my-ord-reader ">

             <div class="my-ord-read-con flex-row-nowrap">
               <p class="my-ord-eat-name">干锅猪脚</p>
               <div class="my-reader-li flex-row-nowrap">
                 <p>*1</p>
                 <p class="my-mar-right">￥82.00</p>
               </div>
             </div>

             <div class="my-ord-read-con flex-row-nowrap">

               <p class="my-ord-eat-name">脚猪脚干脚猪脚干锅猪脚猪脚脚干锅猪脚猪脚</p>
               <div class="my-reader-li flex-row-nowrap">
                 <p>*1000</p>
                 <p class="my-mar-right">￥4444482.00</p>
               </div>
             </div>

             <!--<p>... ...</p>-->

           </div>

           <div class="my-ord-num flex-row-nowrap">
             <p>2件商品</p>
             <p class="my-mar-right">总计:￥246.68</p>
           </div>

         </div>
         <!--循环li end -->

         <!--循环li start-->
         <div class="eat-leave"></div>
         <div class="my-ord-main my-ord-li">
           <div class="my-ord-shop">
             <p class="my-ord-shop-info">
               <img src="@assets/foodimg/shop-name.jpg" alt="">
               <span>西西里西西里餐厅餐厅</span>

             </p>

             <p class="my-ord-confim my-mar-right">已完成</p>
           </div>

           <div class="my-ord-reader ">

             <div class="my-ord-read-con flex-row-nowrap">
               <p class="my-ord-eat-name">干锅猪脚</p>
               <div class="my-reader-li flex-row-nowrap">
                 <p>*1</p>
                 <p class="my-mar-right">￥82.00</p>
               </div>
             </div>

             <div class="my-ord-read-con flex-row-nowrap">

               <p class="my-ord-eat-name">脚猪脚干脚猪脚干锅猪脚猪脚脚干锅猪脚猪脚</p>
               <div class="my-reader-li flex-row-nowrap">
                 <p>*1000</p>
                 <p class="my-mar-right">￥4444482.00</p>
               </div>
             </div>

             <p>... ...</p>

           </div>

           <div class="my-ord-num flex-row-nowrap">
             <p>4件商品</p>
             <p class="my-mar-right">总计:￥246.68</p>
           </div>

         </div>
         <div class="eat-leave"></div>
         <!--循环li end -->




       </div>

     </div>


   </div>

    <div class="shop-menu">
      <div class="hot-img-chi" @click="menuBind('shop')">
        <img src="@assets/foodimg/shop.png"/>
        <p>店铺</p>
      </div>
      <div class="hot-img-chi" @click="menuBind('order')">
        <img src="@assets/foodimg/order.png"/>
        <p>订单</p>
      </div>
      <div class="hot-img-chi" @click="menuBind('myCenter')">
        <img src="@assets/foodimg/my.png"/>
        <p>我的</p>
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
      menuBind:function (path) {
        this.$router.push('/'+path);
      }
    }


  }
</script>

