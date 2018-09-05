<template>

  <div id="down_order" class="down_order-content">
      <HDEADERS v-bind:if_back="1" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
    <div class="down-ord">
      <!--menu start-->
      <div class="down-menu">
        <p class="menu-li">菜单</p>
        <p class="menu-li">吃过</p>
        <p class="menu-li">热销</p>
      </div>
      <!--menu end-->
    </div>


    <div class="menu-content">




    <div class="menu-con">
      <p class="menu-type-name">主菜</p>
      <div class="menu-ul">
           <div class="menu-con-li" @click="goDetail('1@3x.png')">
             <div class="menu-li-detail">
                <p >
                  <img src="@assets/foodimg/1@2x.png"/>
                </p>
                <p class="menu-food-name">泡椒花甲</p>
                <p class="menu-food-price">
                  <span>￥</span>
                  <span>89.68</span>
                  <img src="@assets/foodimg/anniu.png"/>
                </p>
             </div>
           </div>

          <div class="menu-con-li" @click="goDetail('2@3x.png')">
            <div class="menu-li-detail">
              <p >
                <img src="@assets/foodimg/2@2x.png"/>
              </p>
              <p class="menu-food-name">泡椒花甲</p>
              <p class="menu-food-price">
                <span>￥</span>
                <span>89.68</span>
                <img src="@assets/foodimg/anniu.png"/>
              </p>
            </div>
          </div>
        <div class="menu-con-li" @click="goDetail('4@3x.png')">
          <div class="menu-li-detail">
            <p >
              <img src="@assets/foodimg/3@2x.png"/>
            </p>
            <p class="menu-food-name">泡椒花甲</p>
            <p class="menu-food-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/anniu.png"/>
            </p>
          </div>
        </div>
        <div class="menu-con-li" @click="goDetail('4@3x.png')">
          <div class="menu-li-detail">
            <p >
              <img src="@assets/foodimg/4@2x.png"/>
            </p>
            <p class="menu-food-name">泡椒花甲</p>
            <p class="menu-food-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/anniu.png"/>
            </p>
          </div>
        </div>


     </div>

    </div>


    <!--靓汤-->
    <div class="menu-con">
      <p class="menu-type-name">靓汤</p>
      <div class="menu-ul">
        <div class="menu-con-li" @click="goDetail('4@3x.png')">
          <div class="menu-li-detail">
            <p >
              <img src="@assets/foodimg/4@2x.png"/>
            </p>
            <p class="menu-food-name">泡椒花甲</p>
            <p class="menu-food-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/anniu.png"/>
            </p>
          </div>
        </div>

        <div class="menu-con-li">
          <div class="menu-li-detail" @click="goDetail('4@3x.png')">
            <p >
              <img src="@assets/foodimg/4@2x.png"/>
            </p>
            <p class="menu-food-name">泡椒花甲</p>
            <p class="menu-food-price">
              <span>￥</span>
              <span>89.68</span>
              <img src="@assets/foodimg/anniu.png"/>
            </p>
          </div>
        </div>


      </div>

    </div>
      <!--靓汤 end  -->

      <!--酒水饮料-->
      <div class="menu-con">
        <p class="menu-type-name">酒水饮料</p>
        <div class="menu-ul">
          <div class="menu-con-li" @click="goDetail('7@3x.png')">
            <div class="menu-li-detail">
              <p >
                <img src="@assets/foodimg/7@2x.png"/>
              </p>
              <p class="menu-food-name">泡椒花甲</p>
              <p class="menu-food-price">
                <span>￥</span>
                <span>89.68</span>
                <img src="@assets/foodimg/anniu.png"/>
              </p>
            </div>
          </div>

          <div class="menu-con-li" @click="goDetail('6@3x.png')">
            <div class="menu-li-detail">
              <p >
                <img src="@assets/foodimg/6@2x.png"/>
              </p>
              <p class="menu-food-name">泡椒花甲</p>
              <p class="menu-food-price">
                <span>￥</span>
                <span>89.68</span>
                <img src="@assets/foodimg/anniu.png"/>
              </p>
            </div>
          </div>


        </div>

      </div>
      <!--酒水饮料 end  -->


    </div>

    <div class="down-footer">
      <div class="down-food-menu">
        <p class="down-img-chi" >
          <img src="@assets/foodimg/ic-canpan01.png"/>
          <span class="down-ord-num">0</span>
        </p>
        <p class="down-footer-ord"  @click="goPreOrd('preOrder')">点好了</p>
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
      goDetail:function (imgName) {
        this.$router.push({name:'dishDetail',params:{'imgName':imgName}});
      },
      goPreOrd:function (path) {
        this.$router.push({path:path});
      }
    }


  }
</script>

