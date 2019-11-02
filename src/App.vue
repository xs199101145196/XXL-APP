<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="./assets/icon/首页.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="同城店铺">
        <img slot="icon" src="./assets/icon/城市.png" />
        同城店铺
      </mt-tab-item>
      <mt-tab-item id="消息">
        <img slot="icon" src="./assets/icon/消息.png" />
        消息
      </mt-tab-item>
      <mt-tab-item id="同城论坛">
        <img slot="icon" src="./assets/icon/论坛.png" />
        同城论坛
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/icon/我的.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selected: "首页"
    }
  },
  watch: {
    selected: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      console.log(val)
      console.log(oldVal)
      if(val == "首页"){
        this.$router.push("/home");
      } else if (val == "同城店铺") {
        this.$router.push("/localShops");
      } else if (val == "消息") {
        this.$router.push("/message")
      } else if (val == "同城论坛") {
        this.$router.push("/cityBBS")
      } else if (val == "我的") {
        this.$router.push("/mine")
      }
    }
  }
}
</script>

<style lang="less">
@import './assets/css/reset.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .container {
    position: absolute;
    top: 0px;
    bottom: 45px;
    left: 0;
    right: 0;
  }
}
</style>
