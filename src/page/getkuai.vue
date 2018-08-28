<template>

  <div id="kuai" class="my-content">
      <HDEADERS v-bind:if_back="1"></HDEADERS>
    <div class="video-container">
      <vue-video v-show="isShow" ref="video1" :options="videoOptions" @init="initHandler"></vue-video>
    </div>

  </div>
</template>



<script type="text/javascript">
  //https://github.com/iapYang/vue-video-module
 import HDEADERS from '../components/header.vue';
 import VueVideo from 'vue-video-module';
 export default {
    components: {
      HDEADERS,
      VueVideo
    },
    data () {
      return {
        isShow:false,
        videoOptions: {
          src: '/static/assets/11.jpg', //视频地址
          poster:false, //海报地址
          controlBar: false,
          spinner: 'circles',
          timeProgress:true,
          shrinkscreenSub:true,
          fullscreen: false,
          aspect: {
            width: 500,
            heigth: 400
          },
        },
      }
    },
    computed:{

    },
    created(){

    },
    mounted() {
      this.videoOptions.src='/static/video/33.mp4';
     this.video1 = this.$refs.video1;
      setTimeout(()=>{
        this.video1.change(this.videoOptions);
        this.isShow=true;
      },1000)

    },
    methods: {
      initHandler(){

      },
    },
   beforeDestroy: function () {
     this.video1.pause();
   },
   destroyed: function () {
     this.video1.pause();
   },
   beforeRouteLeave (to, from, next) {
     console.group('to ',to);
     this.video1.pause();
     next();

   }

  }
</script>

