<template>

  <div id="pay_order" class="pay_orders-content">
      <HDEADERS v-bind:if_back="1" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
    <div class="pay_orders">
      <div class="pay-main">
        <div class="eat-type">
          <p class="eat-type-disc">选择就餐方式</p>
          <div class="eat-type-btn eat-mar-right">
            <p>打包</p>
            <p>餐厅</p>
          </div>
        </div>

      </div>

      <div class="pay-main">
        <div class="eat-type ">
          <p class="eat-type-disc">联系方式</p>
          <p class="eat-tel eat-mar-right">182 2532 2651</p>
        </div>
      </div>

      <div class="pay-main">
        <div class="eat-type no-border">
        <p class="eat-tel">备注:加辣加麻，不要姜不要香菜。少盐和少油...</p>
        <p class="eat-tel eat-mar-right"> > </p>
        </div>
      </div>
      <div class="eat-leave">

      </div>

      <div class="pay-main eat-choose">
        <div class="eat-type">
          <p class="eat-type-disc eat-mar-right">已选4份菜品</p>
        </div>
      </div>

      <div class="pay-main relative-pos">
        <div class="pay-ul clearfix">
          <div class="eat-type eat-con-li">
            <p><img src="@assets/foodimg/1@2x.png"/></p>
            <div class="eat-con-left-li eat-type ">
              <p class="eat-name-tit">干锅猪脚干锅...</p>
              <p >×10</p>
            </div>

            <div class="eat-mar-right eat-mar-price">
              <p>￥</p>
              <p>822020.00</p>
            </div>
          </div>

          <div class="eat-type eat-con-li">
            <p><img src="@assets/foodimg/3@2x.png"/></p>
            <div class="eat-con-left-li eat-type ">
              <p class="eat-name-tit">猪脚干锅...</p>
              <p >×1000</p>
            </div>

            <div class="eat-mar-right eat-mar-price">
              <p>￥</p>
              <p>8280.00</p>
            </div>
          </div>

          <div class="eat-type eat-con-li ">
            <p><img src="@assets/foodimg/2@2x.png"/></p>
            <div class="eat-con-left-li eat-type ">
              <p class="eat-name-tit">猪脚猪脚干锅猪脚干锅猪脚干锅干锅...</p>
              <p >×1</p>
            </div>

            <div class="eat-mar-right eat-mar-price">
              <p>￥</p>
              <p>80.00</p>
            </div>
          </div>


        </div>


      </div>

    </div>

    <div class="pre-ord-foot">
      <div class="pre-ord-menu">
        <p class="pre-ord-chi" >
          <span>总计</span>
          <span>￥248888866.88</span>
        </p>
        <div class="pre-ord-goOrd" >
          <p @click="payOrd('downOrd')">继续点餐</p>
          <p @click="payOrd('paySuc')">在线买单</p>
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
      payOrd:function (name) {
        this.$router.push({path:name});
      }
    }


  }
</script>

