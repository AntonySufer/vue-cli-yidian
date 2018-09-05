<template>

  <div id="dish_detail" class="dish_detail-content">
      <HDEADERS v-bind:if_back="1" v-bind:my_title="my_title"></HDEADERS>
      <!-- 主要内容 -->

    <div class="dish_detail-banner">
      <img :src="bigImg" alt=""/>
    </div>
    <div class="dish_detail-con">
      <div class="dish-li-detail">
        <p class="dish-food-name">泡椒花甲</p>
        <p class="dish-food-price">
          <span>￥</span>
          <span>89.68</span>
          <img src="@assets/foodimg/+.png"/>
          <span>1</span>
          <img src="@assets/foodimg/_.png"/>
        </p>
      </div>



    </div>

    <div class="dish_readme">
      <p>菜品详情</p>
      <p>材料：猪蹄、生姜、大葱、干辣椒、花椒、桂皮、八角</p>
      <p>猪蹄中的胶原蛋白质在烹调过程中可转化成明胶、它能结合
        许多水，从而有效改善机体生理功能和皮肤组织细胞的储水
        功能，防止皮肤过早褶皱，延缓皮肤衰老; 猪蹄对于经常四肢
        疲乏，腿部抽筋、猪蹄中的胶原蛋白质在烹调过程中可转化成明胶、它能结合
        许多水，从而有效改善机体生理功能和皮肤组织细胞的储水
        功能，防止皮肤过早褶皱，延缓皮肤衰老; 猪蹄对于经常四肢
        疲乏，腿部抽筋、麻木，消化道出血，失血性休克及缺血性
        脑病患者一定辅助疗效，它还有助于青少年生长发育和减缓
        中老年妇女骨质疏松的速度麻木，消化道出血，失血性休克及缺血性
        脑病患者一定辅助疗效，，从而有效改善机体生理功能和皮肤组织细胞的储水
        功能，防止皮肤过早褶皱，延缓皮肤衰老; 猪蹄对于经常四肢
        疲乏，腿部抽筋、猪蹄中的胶原蛋白质在烹调过程中可转化成明胶、它能结合
        许多水，从而有效改善机体生理功能和皮肤组织细胞的储水
        功能，防止皮肤过早褶皱，延缓皮肤衰老; 猪蹄对于经常四肢
        疲乏，腿部抽筋、麻木，消化道出血，失血性休克及缺血性
        脑病患者一定辅助疗效，它还有助于青少年生长发育和减缓
        中老年妇女骨质疏松的速度麻木，消化道出血，它还有助于青少年生长发育和减缓
        中老年妇女骨质疏松的速度;</p>
    </div>

    <div class="down-footer">
      <div class="down-food-menu">
        <p class="down-img-chi" >
          <img src="@assets/foodimg/ic-canpan01.png"/>
          <span class="down-ord-num">0</span>
        </p>
        <p class="down-footer-ord" @click="goPreOrd">点好了</p>
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
        my_title :'西西里餐厅',
        imgName :this.$route.params.imgName
      }
    },
    computed:{
      bigImg(){
         if (this.imgName) return './static/foodimg/'+this.imgName;
         return './static/foodimg/404.jpg';
      }

    },
    created(){

    },
    methods:{
      goPreOrd(){
        this.$router.push({name:'preOrder'});
      }
    }


  }
</script>

