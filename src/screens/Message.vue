<template>
  <div class="page">
    <div class="message_base">
      <!--顶端bar start-->
      <!-- <AppBar title="消息">
        
      </AppBar>-->
      <mu-appbar :zDepth="0" class="messageBar">
        <!--左边头像按钮-->
        <mu-avatar slot="left" :size="35">
          <img :src="avatar">
        </mu-avatar>
        <!-- 中间title -->
        <div slot="default" class="title">
          <div class="title-item">消息</div>
        </div>
        <!--右边搜索按钮-->
        <mu-button icon color="white" slot="right" @click="search">
          <mu-icon/>
          <mu-icon value="search"></mu-icon>
        </mu-button>
      </mu-appbar>
      <!--顶端 end-->
      <div class="content">
        <!--message内容 start-->
        <mu-container>
          <mu-tabs
            :value.sync="active"
            inverse
            color="secondary"
            text-color="rgba(0, 0, 0, .54)"
            full-width
          >
            <mu-tab>聊天</mu-tab>
            <mu-tab>朋友</mu-tab>
          </mu-tabs>
          <!--聊天窗口 start-->
          <div class="dialogue" v-if="active === 0">
            <Messagelist/>
          </div>
          <!--聊天窗口 end-->
          <!--好友窗口 start-->
          <div class="friends" v-if="active === 1">
            <Friends/>
          </div>
          <!--好友窗口 start-->
        </mu-container>
        <!--message内容 end-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Message",
  data() {
    return {
      // 默认显示friends窗口
      active: 0
    };
  },
  // 获取头像
  computed: {
    ...mapState({
      avatar: state => state.data.self.avatar
    })
  },
  methods: {
    // 路由跳转到搜索页面
    search() {
      this.$router.push("/search");
    }
  }
};
</script>

<style scope>
.mu-appbar {
  height: 11.41667vmin;
  background-color: #ff88bb;
  box-shadow: 0 0 1px 2px #ddd;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
  z-index: 10000;
}
.mu-appbar .mu-appbar-right {
  z-index: 100001;
}
.title {
  padding-right: 12px;
}
.title .title-item {
  margin: 0 auto;
  width: 48%;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border-radius: 4px;
  font-weight: 300;
  color: white;
}
.content {
  border-color: #ddd;
}
</style>