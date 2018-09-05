<template>
  <div>
    <p class="err-head">信息</p>

    <div class="err-btn">
      <img src="@assets/foodimg/suc.png"/>
      <p class="pay-success">付款成功</p>
      <p class="err-back" @click="goDea">查看订单</p>
    </div>
  </div>
</template>
<style type="text/css">
  .err-head{
    height:80px;
    line-height: 80px;
    text-align: center;
    font-size:36px;
    width: 100%;
    z-index: 999;
    background:#24292C ;
    color: #fff;
  }
  img{
    height: 128px;
    width: 128px;
  }
  .err-btn{
    padding: 0px 30px;
    text-align: center;
    margin-top: 30px;
  }
  .pay-success{
    font-size:30px;
    color: #333;
  }
  .err-back{
    margin-top: 100px;
    background: #FF5655;
    height: 80px;
    line-height: 80px;
    font-size:36px;
    color: #FFFFFF;
    opacity:.8;
    border-radius: 10px;
  }

</style>

<script type="text/javascript">

 export default {
    components: {

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
      goDea:function () {
        this.$router.push('/order');
      }
    }


  }
</script>

