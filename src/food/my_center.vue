<template>

  <div id="my" class="my-content">
      <HDEADERS v-bind:if_back="0"></HDEADERS>
      <!-- 主要内容 -->

    order
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

