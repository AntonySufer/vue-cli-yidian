<template>

  <div id="shop_detail" class="shop_detail-content">
      <HDEADERS v-bind:if_back="1" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
    <div class="shop-detail-con">
       <div class="detail-img">
         <img src="@assets/foodimg/shop-name.jpg"/>
       </div>

       <div class="addr-shop">
          <p><img src="@assets/foodimg/ic_dizhi.png"></p>
          <div >
            <p class="addr-shop-name">店铺地址</p>
            <p  class="addr-shop-det">深圳市福田区梅林路美视大厦首层二号商铺(梅林天虹东侧50米)</p>
          </div>
       </div>
      <div class="detail-tel">

        <div class="detail-tel-p">
          <p>
            <img src="@assets/foodimg/tel.png"/>
            <span>联系方式</span>
          </p>
          <p class="detail-tel-number">185 4784 5651</p>
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
        my_title :'店铺详情'
      }
    },
    computed:{

    },
    created(){

    },
    methods:{

    }


  }
</script>

