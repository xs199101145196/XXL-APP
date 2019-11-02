<template>
  <div id="cityBBS">
    <div class="container">
      <img src="../../assets/img/论坛.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "cityBBS",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
#cityBBS {
  position: relative;
  width: 100%;
  height: 100%;
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    > img {
      width: 100%;
    }
  }
}
</style>