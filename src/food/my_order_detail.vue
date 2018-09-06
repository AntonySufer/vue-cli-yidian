<template>

  <div id="my_detail" class="my-detail-content">
      <HDEADERS v-bind:if_back="1" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
   <div class="my_detail">

      <div class="my-tail-head flex-row-nowrap">
         <div class="my-tail-tit-left">
           <img src="@assets/foodimg/ic-canpan.png" alt="">
         </div>
         <div class="my-tail-tit-right">
            <p>订单已完成</p>
           <p>商家已收到订单，请等待服务员上菜。</p>
         </div>
      </div>

      <div class="det-leave"></div>

      <div class="my-detail-main my-tail-con">
         <p class="my-tail-shop">西西里餐厅</p>


        <div class="my-tail-ul">
          <div class="tail-list flex-row-nowrap">
            <div class="list-name">
              <p>干锅猪脚</p>
            </div>
            <div class="list-price flex-row-nowrap">
              <p>×1</p>
              <p>￥82.00</p>
            </div>

          </div>

          <div class="tail-list flex-row-nowrap">
            <div class="list-name">
              <p>干锅干锅猪脚干锅猪脚干锅猪脚干锅猪脚干锅猪脚猪脚</p>
            </div>
            <div class="list-price flex-row-nowrap">
              <p>×10000</p>
              <p>￥222222.00</p>
            </div>

          </div>

          <div class="tail-list flex-row-nowrap">
            <div class="list-name">
              <p>脚干锅干锅猪脚猪脚</p>
            </div>
            <div class="list-price flex-row-nowrap">
              <p>×10</p>
              <p>￥222.00</p>
            </div>

          </div>

        </div>

        <div class="my-tail-type">
           <p class="tail-type">
             <span>就餐方式:</span>
             <span>餐厅</span>
           </p>

          <p class="tail-type">
            <span>联系方式:</span>
            <span>178 4578 4578</span>
          </p>

        </div>

        <div class="my-tail-readme">
           <p>
             <span>备注：</span>
             <span>加辣加麻，不要姜不要香菜。炖汤要少盐少油清淡的，谢谢！</span>
           </p>
        </div>

        <div class="my-tail-totail flex-row-nowrap">
          <p>总计</p>
          <p>￥246.68</p>
        </div>

        <div class="my-tail-date">
          <p class="tail-time">
            <span>订单时间:</span>
            <span>2018-07-01 10:12:56</span>
          </p>

          <p class="tail-number">
            <span>订单编号:</span>
            <span>2018070126589</span>
          </p>

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
        my_title:'订单详情'
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

