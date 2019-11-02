<template>
  <div id="localShops">
    <mt-header fixed title="同城店铺"></mt-header>
    <div class="container">
      <img src="../../assets/img/同城.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "localShops",
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less">
#localShops {
  position: relative;
  width: 100%;
  height: 100%;
  .container {
    position: absolute;
    top: 33px;
    width: 100%;
    height: calc(100% - 23px);
    overflow-y: auto;
    > img {
      width: 100%;
    }
  }
}
</style>
