<template>
  <div>
    <div class="ms-doc app-container">
      <h3>README.md</h3>
      <article>
        <h1>异常检测工具自助化</h1>
        <p>基于 Nodejs Express + Vue.js 2.x + Webpack 3.x + Element UI 2.x</p>
        <h2>系统介绍</h2>
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item name="1">
            <template slot="title">
              平台定位 Positioning <i class="header-icon el-icon-info"></i>
            </template>
            <div>1.xxxxxxxxxxxxxxxxxxxx</div>
            <div>2.xxxxxxxxxxxxxxxxxxxx</div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              平台功能 Capacity <i class="header-icon el-icon-info"></i>
            </template>
            <el-checkbox disabled checked>1.xxxxxxxxxxxxxxxxxxxx</el-checkbox>
            <br>
            <el-checkbox disabled checked>2.xxxxxxxxxxxxxxxxxxxx</el-checkbox>
            <br>
            <el-checkbox disabled checked>3.xxxxxxxxxxxxxxxxxxxx</el-checkbox>
            <br>
            <el-checkbox disabled checked>4.xxxxxxxxxxxxxxxxxxxx</el-checkbox>
            <br>
            <el-checkbox disabled checked>5.xxxxxxxxxxxxxxxxxxxx</el-checkbox>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template slot="title">
              反馈意见 Feedback <i class="header-icon el-icon-info"></i>
            </template>
            <div>如果您有好的idea或者发现项目的bug，可以点击 <a target="_blank" style="color:blue;text-decoration: underline" href="http://gitlab.qiyi.domain/adfe/detection-self/issues">这里</a> 给我们提issue！</div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template slot="title">
              技术支持 PoweredBy <i class="header-icon el-icon-info"></i>
            </template>
            <div>Power by BI前端团队</div>
          </el-collapse-item>
        </el-collapse>
      </article>

    </div>

  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        activeNames: ['1']
      }
    },
    mounted () {},
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .ms-doc{
    width:100%;
    max-width: 1280px;
    margin-top:10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    overflow-y: scroll;
  }
  .ms-doc h3{
    padding: 9px 10px 10px;
    margin: 0;
    font-size: 14px;
    line-height: 17px;
    background-color: #f5f5f5;
    border: 1px solid #d8d8d8;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
  }
  .ms-doc article{
    padding: 45px;
    word-wrap: break-word;
    background-color: #fff;
    border: 1px solid #ddd;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  .ms-doc article h1{
    font-size:32px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #ddd;
  }
  .ms-doc article h2 {
    margin: 24px 0 0;
    font-weight: 600;
    line-height: 1.25;
    padding-bottom: 7px;
    font-size: 24px;
    border-bottom: 1px solid #eee;
  }
  .ms-doc article p{
    margin-bottom: 15px;
    line-height: 1.5;
  }
  .ms-doc article .el-checkbox{
    margin-bottom: 5px;
  }
  .ms-doc  p{
    margin-bottom: 15px;
    line-height: 1.5;
  }
  .hot {
    position: absolute;color:red;top:-3px;display:inline-block;vertical-align: top;transform: rotate(15deg);font-size:11px;
  }


</style>
