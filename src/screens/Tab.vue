<template>
  <div class="tab screen">
    <div class="tabs">
      <router-view></router-view>
    </div>
    <TabBar/>
  </div>
</template>

<script>
export default {
  name:"Tab",
  data() {
    return {
      onOff: true
    };
  },
  methods: {
    //返回之前的滚动高度
    scrollHeight() {
      this.onOff = false;
      this.$nextTick(function() {
        if (document.getElementsByClassName("content")[0]) {
          document.getElementsByClassName(
            "content"
          )[0].scrollTop = this.$route.meta.savedPosition;
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      // 控制是否显示回到原来浏览位置
      if (
        from.name === "detail" ||
        from.name === "message" ||
        from.name === "mine"
      ) {
        this.onOff = true;
        this.scrollHeight();
      } else {
        this.onOff = false;
      }
    }
  }
};
</script>

<style>
.tab {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.tab .tabs {
  flex: 1;
  overflow: hidden;
}
</style>