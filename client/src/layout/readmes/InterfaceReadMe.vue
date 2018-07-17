<template>
  <div>
    <div class="ms-doc app-container">
      <h3>README.md</h3>
      <article>
        <h1>异常检测功能介绍</h1>
        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <p>使用指南</p>
        <el-collapse accordion>
          <el-collapse-item name="1">
            <template slot="title">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <i class="header-icon el-icon-info"></i>
            </template>
            <div>1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>2.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>3.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>4.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>5.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <i class="header-icon el-icon-info"></i>
            </template>
            <div>1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>2.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
            <div>3.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template slot="title">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <i class="header-icon el-icon-info"></i>
            </template>
            <div>1.【xxx】    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
          </el-collapse-item>
        </el-collapse>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    }
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


</style>
