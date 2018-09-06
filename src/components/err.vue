<template>
  <div class="app-err">
    <p class="err-head">错 误</p>
   <img src="@assets/foodimg/404.jpg"/>
   <div class="err-btn">
     <p class="err-back" @click="$router.goBack()">返  回</p>
   </div>
  </div>
</template>
<style type="text/css">
  .app-err{
    height: 100%;
    width: 100%;
  }
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
    height: 400px;
    width: 100%;
  }
  .err-btn{
    padding: 0px 30px;
    text-align: center;
    margin-top: 30px;
  }
  .err-back{
    background: #FF5655;
    height: 80px;
    line-height: 80px;
    font-size:36px;
    color: #FFFFFF;
    opacity:.8;
    border-radius: 10px;
  }

</style>
<script>
  export default {
    data () {
      return {
        msg: 'Error:404'
      }
    }
  }
</script>
