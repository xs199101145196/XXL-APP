<template>
  <div id="home">
    <mt-header fixed title="信鑫莱"></mt-header>
    <div class="center">
      <div class="swipeBox">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img class="swipeImg" src="../../assets/img/car.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img class="swipeImg" src="../../assets/img/xianyu.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img class="swipeImg" src="../../assets/img/跳蚤.jpg" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="branner">
      <ul class="bannerListOne">
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_1.png" alt />
          <div>疯狂抢购</div>
        </li>
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_2.png" alt />
          <div>超市量贩</div>
        </li>
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_3.png" alt />
          <div>魅力优惠</div>
        </li>
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_4.png" alt />
          <div>经典收藏</div>
        </li>
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_5.png" alt />
          <div>农副产品</div>
        </li>
      </ul>
      <ul class="bannerListTwo">
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_6.png" alt />
          <div>二手拍拍</div>
        </li>
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_7.png" alt />
          <div>天天特价</div>
        </li>
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_8.png" alt />
          <div>求职应聘</div>
        </li>
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_9.png" alt />
          <div>全球购物</div>
        </li>
        <li class="bannerInfo">
          <img src="../../assets/icon/icon_10.png" alt />
          <div>海量生鲜</div>
        </li>
      </ul>
    </div>
    <div class="product">
      <img src="../../assets/img/car.jpg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      selected: "消息"
    };
  },
  methods: {
    // selected(id) {
    //   console.log(id);
    // }
  }
};
</script>

<style lang="less">
#home {
  .center {
    position: relative;
    margin-top: 40px;
    .swipeBox {
      width: 100%;
      height: 200px;
      background-color: #ccc;
      .swipeImg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .branner {
    position: relative;
    width: 100%;
    .bannerListOne,
    .bannerListTwo {
      width: 100%;
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      .bannerInfo {
        width: 50px;
        // height: 50px;
        > img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  .product {
    position: relative;
    width: 100%;
    height: 200px;
    margin-top: 10px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
