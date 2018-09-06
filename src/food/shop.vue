<template>

  <div id="shop" class="shop-content">
      <HDEADERS v-bind:if_back="0" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
    <div class="shop-con">

      <div class="shop-head">
        <div class="name-con">
          <div class="name-con-div" >
            <img src="@assets/foodimg/shop-name.jpg"/>
          </div>
          <div class="name-con-div" >
            <p class="shop-name-d">西西里餐厅</p>
            <p class="shop-start">★★★☆☆</p>
          </div>

        </div>
        <div class="collect-con">
          <p> <img src="@assets/foodimg/shoucying.png"/> 收藏</p>
        </div>
      </div>

      <div class="shop-head shop-addr-con">
        <p><img src="@assets/foodimg/ic_dizhi.png"> 南山区深南大道150号东门DDM208</p>
        <p><img class="tel-img" src="@assets/foodimg/tel.png"></p>
      </div>

    </div>

    <!--本店热销 start-->
    <div class="shop-hot">
      <p class="hot-tit">本店热销</p>
      <div class="hot-img-con">
        <div class="hot-img-chi">
          <img src="@assets/foodimg/1@2x.png"/>
          <p>泡椒花甲</p>
        </div>
        <div class="hot-img-chi">
          <img src="@assets/foodimg/1@2x.png"/>
          <p>泡椒花甲</p>
        </div>
        <div class="hot-img-chi">
          <img src="@assets/foodimg/1@2x.png"/>
          <p>泡椒花甲</p>
        </div>
      </div>

      <p class="hot-btn" @click="menuBind('downOrd')">
         开始点餐
      </p>
    </div>

    <!--本店热销 end-->

    <!--本店详情 start-->
    <div class="shop-detail" @click="menuBind('shopDetail')">
      <p class="detail-tit">店铺详情<span class="go-detail"> > </span></p>
      <div class="">
        <img src='@assets/foodimg/shop-name.jpg'/>
      </div>
    </div>

    <!--本店详情 end-->

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
        my_title :'西西里餐厅'
      }
    },
    computed:{

    },
    created(){

    },
    methods:{
      //menu
      menuBind(name) {
        this.$router.push('/'+name);
      }
    }


  }
</script>

