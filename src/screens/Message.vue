<template>
  <div class="page">
    <!--顶端bar start-->
    <AppBar title="消息">
      <mu-button icon color="white" slot="right" @click="searchFriend">
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </AppBar>
    <!--顶端 end-->
    <div class="content">
    <!--message内容 start-->
      <mu-container>
        <mu-tabs :value.sync='active' inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  full-width>
          <mu-tab>聊天</mu-tab>
          <mu-tab>朋友</mu-tab>
        </mu-tabs>
        <!--聊天窗口 start--> 
        <div class="dialogue" v-if="active === 0">
          <p>liaotian</p>
        </div>
        <!--聊天窗口 end--> 
        <!--好友窗口 start--> 
        <div class="friends" v-if="active === 1">
          <p>friends</p>
        </div>
        <!--好友窗口 start--> 

      </mu-container>
    <!--message内容 end-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认显示friends窗口
      active:0
    }
  },
  methods: {
    // 设置搜索按钮路由
    searchFriend:function (){
      this.$router.push('/search')
    }
  }
};
</script>

<style scope>
.page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>