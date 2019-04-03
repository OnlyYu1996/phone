<template>
  <div class="page screen">
    <AppBar title="动态详情">
      <BackButton slot="left"/>
      <mu-button icon color="white" slot="right">
        <mu-icon value="reorder"></mu-icon>
      </mu-button>
    </AppBar>
    <div class="content">
      <News :data="detailData"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      detailData: {}
    };
  },
  created() {
    this.detailData = this.$route.query;
  }
};
</script>

<style>
</style>