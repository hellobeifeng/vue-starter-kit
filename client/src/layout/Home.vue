<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <div class="sidebar-wrapper">
      <v-sidebar class="sidebar-container"></v-sidebar>
    </div>
    <div class="main-container">
      <v-head></v-head>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import vHead from './Header.vue'
  import vSidebar from './Sidebar.vue'
  import appMain from './AppMain.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      vHead, vSidebar, appMain
    },
    computed: {
      sidebar () {
        return this.$store.state.sidebar
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../assets/styles/mixin.styl";
  .app-wrapper {
    clearfix();
    position: relative;
    height: 100%;
    width: 100%;
    &.hideSidebar {
      .sidebar-wrapper {
        transform: translate(-150px, 0);
        .sidebar-container {
          transform: translate(132px, 0);
        }
      }
      .main-container{
        margin-left: 30px;
      }
    }
    .sidebar-wrapper {
      width: 180px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
      transition: all .28s ease-out;
    }
    .sidebar-container {
      transition: all .28s ease-out;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -17px;
      overflow-y: scroll;
    }
    .main-container {
      min-height: 100%;
      transition: all .28s ease-out;
      margin-left: 180px;
    }
  }
</style>
