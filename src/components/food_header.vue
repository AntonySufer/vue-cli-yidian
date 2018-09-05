<template>
   <div class="headerCon">
       <p> <span @click="$router.goBack()" class="header-back" v-if="if_back=='1'" > < </span> {{title}} </p>
   </div>

</template>
<script type="text/javascript">
  export default {
    props:["if_back","my_title"],
    data () {
        return {
          title:'食尚客'
        }
    },
    created(){
      this.title = this.my_title ? this.my_title : this.title;
    }


  }
</script>




