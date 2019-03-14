<template>
  <div class="page screen">
    <AppBar title="动态详情">
      <BackButton slot="left"/>
      <mu-button icon color="white" slot="right">
        <mu-icon value="reorder"></mu-icon>
      </mu-button>
    </AppBar>
    <div class="content">
      <New :data="detailData"/>
    </div>
  </div>
</template>

<script>
import New from "@/components/New";
export default {
  name:'Detail',
  data() {
    return {
      detailData: {}
    };
  },
  components: {
    New
  },
  created() {
    this.detailData = this.$route.query;
  },
  //设置路由使用 keep-alive 缓存
  beforeRouteLeave (to, from, next) {
    to.meta.keepAlive=true
    from.meta.keepAlive=true
    next()
  },
};
</script>

<style>
</style>