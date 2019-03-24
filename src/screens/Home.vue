<template>
  <div class="page">
    <!-- header strat -->
    <AppBar title="我的主页">
      <mu-button icon color="white" @click="goHome()" slot="left">
        <mu-icon value="refresh"></mu-icon>
      </mu-button>
      <mu-button icon color="white" slot="right">
        <mu-icon value="add"></mu-icon>
      </mu-button>
    </AppBar>
    <!-- header end -->
    <div class="content" @scroll="scroll" ref="div1">
      <!-- 轮播 strat -->
      <mu-carousel hide-controls transition="fade">
        <mu-carousel-item>
          <img
            src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4115337452,3157853354&fm=26&gp=0.jpg"
          >
        </mu-carousel-item>
        <mu-carousel-item>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2940606656,3811047262&fm=26&gp=0.jpg"
          >
        </mu-carousel-item>
        <mu-carousel-item>
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3152231671,3544933530&fm=26&gp=0.jpg"
          >
        </mu-carousel-item>
      </mu-carousel>
      <!-- 轮播 end -->
      <!-- 说说内容 strat -->
      <News v-for="(item) in datas" :key="item.id" :data="item" @click="newSelect($event,item)"/>
      <!-- 说说内容 end -->
      <!-- 上滑加载内容 strat -->
      <div class="loading-view" v-if="showLoading">
        正在加载
        <mu-circular-progress class="demo-circular-progress" :size="16"></mu-circular-progress>
      </div>
      <!-- 上滑加载内容 end -->
    </div>
  </div>
</template>

<script>
import News from "@/commons/New.vue";
//模拟数据
function axios() {
  return new Promise((resolve, rejest) => {
    setTimeout(() => {
      let id = this.datas.length;
      let datas = [];
      //  添加假数据
      for (let i = 0; i < 5; i++) {
        datas.push({
          id: ++id,
          username: "香蕉有籽" + id,
          upic:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553265610537&di=ed2ceeffdbcf5027c7ee0a45e2f2f4ce&imgtype=0&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201903%2F02%2F134831mn2vvo2zhokykxro.jpg",
          pubtime: "2019-1-3 20:11:19",
          phone: "至尊诺基亚",
          content:
            "你所浪费的今天，是昨天死去的人奢望的明天；你所厌恶的现在，是未来的你回不去的曾经",
          photos: [
            "http://img4.imgtn.bdimg.com/it/u=1092471999,2314884673&fm=11&gp=0.jpg",
            "http://img0.imgtn.bdimg.com/it/u=567300397,2420452001&fm=11&gp=0.jpg",
            "http://img1.imgtn.bdimg.com/it/u=1518658835,2305511672&fm=26&gp=0.jpg"
          ],
          like: 637,
          comment: "122"
        });
      }
      resolve(datas);
    }, 2000);
  });
}
export default {
  name: "home",
  data() {
    return {
      datas: this.$store.getters.contentData,
      showLoading: false, //加载更多开关
      onOff: true, //消除数据重复加载
      scrollTop: ""
    };
  },
  components: {
    News
  },
  //侦听是否滑动到最后
  watch: {
    showLoading(val) {
      if (this.onOff) {
        axios.call(this).then(res => {
          this.datas.push(...res);
        });
        this.onOff = false;
      }
    },
    onOff(val) {
      setTimeout(() => {
        this.onOff = true;
      }, 100);
    }
  },
  //路由离开之前缓存滚动高度
  beforeRouteLeave(to, from, next) {
    from.meta.savedPosition = this.scrollTop;
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.meta.savePosition);
    // this.$refs.div1.scrollTop=to.meta.savePosition
    next();
  },
  methods: {
    scroll(e) {
      //内容总高度-垂直滚动条位置-视口大小
      // const height = e.target.scrollHeight;
      this.scrollTop = e.target.scrollTop;
      // const top = e.target.scrollTop + e.target.clientHeight;
      this.showLoading =
        e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 3;
      this.$route.meta.savedPosition = top;
    },
    goHome() {
      this.$router.go(0); //路由后退0步，相当于刷新当前页面
    },
    //跳转详情页面
    newSelect(e, item) {
      this.$router.push({
        path: "/detail",
        query: item
      });
    }
  }
};
</script>

<style>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.page .content {
  flex: 1;
  overflow: auto;
}
.page .content .mu-carousel {
  height: 58.77778vmin;
  width: 34vmin;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}
.page .content .loading-view {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 3.5vmin;
}
</style>