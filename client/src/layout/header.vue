<template>
  <div class="">
    <el-menu class="navbar" mode="horizontal" :isActive="!sidebar.opened">
      <i class="fa fa-bars" @click="toggleSideBar" :isActive="sidebar.opened"></i>
    </el-menu>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        opened: false
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    methods: {
      toggleSideBar () {
        $(this).toggleClass('is-active')
        this.$store.dispatch('ToggleSideBar')
      }
    },
    components: {
    }
  }
</script>

<style lang="stylus"  scoped>
  .navbar {
    position:fixed;
    left:180px;
    right:0;
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    background-color: #eef1f6;
    z-index: 1000;
    .login {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 65px;
      li {
        display: inline-block;
      }
    }
    .fa-bars{
      cursor: pointer;
      line-height: 50px;
      height: 50px;
      float: left;
      padding: 0 15px;
      border:none;
    }
    .fa-bars[isactive] {
      transform: rotate(90deg);
      border:none;
    }
    .screenfull{
      position: absolute;
      right: 90px;
      top: 14px;
      color: red;
    }
  }
  .navbar[isactive] {
    left: 30px;
  }
</style>



