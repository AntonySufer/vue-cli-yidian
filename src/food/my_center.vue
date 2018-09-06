<template>

  <div id="my-center" class="my-center-content">
      <HDEADERS v-bind:if_back="1" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->
   <div class="my-center-con">

     <div class="center-li flex-row-nowrap">
       <p class="setting">通用</p>
       <p class="setting mr-right"> > </p>
     </div>
     <div class="center-li flex-row-nowrap">
       <p class="setting">设置</p>
       <p class="setting mr-right"> > </p>
     </div>
     <div class="center-li flex-row-nowrap">
       <p class="setting">关于</p>
       <p class="setting mr-right"> > </p>
     </div>


   </div>


  </div>





</template>

<style type="text/css" >
  .my-center-con{
    padding-top: 80px;
    padding: 80px 0px 0px 30px;
  }
   .mr-right{
     margin-right: 30px;
   }

  .center-li{

    justify-content: space-between !important;
    border-bottom: 1px solid #e5e5e5;
  }
  .setting{
    font-size:36px;
    height: 80px;
    line-height: 80px;
  }


</style>

<script type="text/javascript">
 import HDEADERS from '../components/food_header.vue';

 export default {
    components: {
      HDEADERS
    },
    data () {
      return {
        my_title:'个人中心'
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

