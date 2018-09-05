<template>

  <div id="pre_order" class="pre_order-content">
      <HDEADERS v-bind:if_back="1" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
    <div class="pre_order">
      <div class="pre-ord-head">
         <p>已选菜品</p>
         <p class="pre-head-img"><img src="@assets/foodimg/ic-qingkong.png"/> <span>清空</span></p>
      </div>

      <!--菜品列表 start -->
      <div class="pre-ord-con">
         <div class="pre-ord-li">
            <div class="li-left-con">
                  <img src="@assets/foodimg/1@2x.png"/>
            </div>
            <div class="li-right-con">
                <p class="li-right-name">泡泡椒花甲泡椒花甲泡泡泡椒花甲泡椒花甲泡椒花甲泡椒花甲泡椒花甲泡椒花甲椒花甲椒花甲泡椒花甲泡椒花甲泡椒花甲椒花甲</p>
                <p class="dish-food-price li-right-price">
                  <span>￥</span>
                  <span>89.68</span>
                  <img src="@assets/foodimg/+.png"/>
                  <span>1</span>
                  <img src="@assets/foodimg/_.png"/>
                </p>
             </div>
         </div>

        <div class="pre-ord-li">
          <div class="li-left-con">
            <img src="@assets/foodimg/2@2x.png"/>
          </div>
          <div class="li-right-con">
            <p class="li-right-name">花甲泡椒花甲泡椒花甲泡椒花甲椒花甲</p>
            <p class="dish-food-price li-right-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/+.png"/>
              <span>1</span>
              <img src="@assets/foodimg/_.png"/>
            </p>
          </div>
        </div>

        <div class="pre-ord-li">
          <div class="li-left-con">
            <img src="@assets/foodimg/3@2x.png"/>
          </div>
          <div class="li-right-con">
            <p class="li-right-name">花甲泡椒花甲泡椒花甲泡椒花甲椒花甲</p>
            <p class="dish-food-price li-right-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/+.png"/>
              <span>1</span>
              <img src="@assets/foodimg/_.png"/>
            </p>
          </div>
        </div>

        <div class="pre-ord-li">
          <div class="li-left-con">
            <img src="@assets/foodimg/3@2x.png"/>
          </div>
          <div class="li-right-con">
            <p class="li-right-name">花甲泡椒花甲泡椒花甲泡椒花甲椒花甲</p>
            <p class="dish-food-price li-right-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/+.png"/>
              <span>1</span>
              <img src="@assets/foodimg/_.png"/>
            </p>
          </div>
        </div>

        <div class="pre-ord-li">
          <div class="li-left-con">
            <img src="@assets/foodimg/3@2x.png"/>
          </div>
          <div class="li-right-con">
            <p class="li-right-name">花甲泡椒花甲泡椒花甲泡椒花甲椒花甲</p>
            <p class="dish-food-price li-right-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/+.png"/>
              <span>1</span>
              <img src="@assets/foodimg/_.png"/>
            </p>
          </div>
        </div>

        <div class="pre-ord-li">
          <div class="li-left-con">
            <img src="@assets/foodimg/3@2x.png"/>
          </div>
          <div class="li-right-con">
            <p class="li-right-name">花甲泡椒花甲泡椒花甲泡椒花甲椒花甲</p>
            <p class="dish-food-price li-right-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/+.png"/>
              <span>1</span>
              <img src="@assets/foodimg/_.png"/>
            </p>
          </div>
        </div>

        <div class="pre-ord-li">
          <div class="li-left-con">
            <img src="@assets/foodimg/3@2x.png"/>
          </div>
          <div class="li-right-con">
            <p class="li-right-name">花甲泡椒花甲泡椒花甲泡椒花甲椒花甲</p>
            <p class="dish-food-price li-right-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/+.png"/>
              <span>1</span>
              <img src="@assets/foodimg/_.png"/>
            </p>
          </div>
        </div>


      </div>
      <!--菜品列表 end -->



    </div>

    <div class="pre-ord-foot">
      <div class="pre-ord-menu">
        <p class="pre-ord-chi" >
           <span>总计</span>
           <span>￥2466.88</span>
        </p>
        <div class="pre-ord-goOrd" >
           <p @click="goOrd('downOrd')">继续点餐</p>
           <p @click="goOrd('payOrder')">在线买单</p>
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
        my_title:'西西里餐厅'
      }
    },
    computed:{

    },
    created(){

    },
    methods:{
      goOrd:function (name) {
        this.$router.push({path:name});
      }
    }


  }
</script>

