<template>
  <div class="subTest">
    this is subTest
  </div>
</template>

<script>
export default {
  props: ['id'],
  mounted () {
    console.log('##subTest id', this.id)
  }
}
</script>

<style>
  .subTest {
    font-size: 20px;
    text-align: center;
    font-weight: 100px;
  }
</style>
