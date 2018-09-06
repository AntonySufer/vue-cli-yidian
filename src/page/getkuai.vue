<template>

  <div id="kuai" class="my-content">
      <HDEADERS v-bind:if_back="1"></HDEADERS>
    <div class="video-container">
      <vue-video v-show="isShow" ref="video1" :options="videoOptions" @init="initHandler"></vue-video>
    </div>

    <input type="button" value="下载" @click="download"/>
    <!--<a href="/static/video/33.mp4" download="33.mp4" >下现在在</a>-->
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
      this.videoOptions.src='/static/video/33.mp4'; //模拟数据
      this.video1 = this.$refs.video1;
      setTimeout(()=>{
        this.video1.change(this.videoOptions);
        this.isShow=true;
      },1000)

    },
    methods: {
      initHandler(){

      },
      download () {
//        let url = '/static/video/33.mp4';
//        let link = document.createElement('a')
//        link.style.display = 'none'
//        link.href = url
//        link.setAttribute('download', '33.mp4')
//        document.body.appendChild(link);
//        setTimeout(()=>{  link.click()},1000);
        let link = document.createElement('form');
        link.method='get';
        link.setAttribute('action', '/static/video/33.mp4')
       // var $eleForm = $("<form method='get'></form>");

       // $eleForm.attr("action","/static/video/33.mp4");

        document.body.appendChild(link);

        setTimeout(()=>{    link.submit();},1000);
        //提交表单，实现下载



      }
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

