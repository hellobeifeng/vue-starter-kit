<template>
  <div class="sidebar">
    <el-menu class="el-menu-vertical-demo" background-color="#324157" text-color="#bfcbd9" unique-opened router @open="handleOpen">
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.link" :key="item.link">
            <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
            <el-menu-item v-for="(subItem, i) in item.subs" :key="i" :index="subItem.link">
              <template slot="title" ><i :class="subItem.icon" style="padding-left:10px;"></i>{{ subItem.name }}</template>
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.link" :key="item.link">
            <template slot="title" ><i :class="item.icon"></i>{{ item.name }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [{
          index: '1',
          name: '首页',
          link: '/',
          icon: 'el-icon-menu'
        },
        {
          index: '2',
          name: 'todo',
          link: '/todo',
          icon: 'el-icon-edit-outline'
        }]
      }
    },
    mounted: function () {},
    methods: {
      handleOpen: function (index, indexPath) {
        this.$router.push(indexPath[0])
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 180px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
