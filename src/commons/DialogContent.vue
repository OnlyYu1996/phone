<template>
  <div>
    <div
      class="dialogContent"
      v-for="(item,index) of messageList_x"
      :key="index"
      :class="[item.id === 0?'selfDialog':'',]"
    >
      <!--朋友的对话列表-->
      <mu-list class="friendList" v-if="item.id!==0">
        <mu-list-item>
          <mu-list-item-action class="avtar">
            <mu-avatar class="avatar" @click="showPersonindex_y">
              <img :src="userData.friend.avatar">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-action class="message">
            <span>
              <span class="content" style="color:rgba(0,0,0,.9)">{{item.message}}</span>
            </span>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
      <!--我的对话列表-->
      <mu-list class="selfList" v-if="item.id===0">
        <mu-list-item>
          <!--该组件为了撑起左边-->
          <mu-list-item-title class="selfLeft"></mu-list-item-title>
          <mu-list-item-action class="message">
            <span>
              <span class="content" style="color:rgba(0,0,0,.9)">{{item.message}}</span>
            </span>
          </mu-list-item-action>
          <mu-list-item-action class="avtar">
            <mu-avatar class="avatar">
              <img :src="userData.self.avatar">
            </mu-avatar>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "dialogContent",
  props: ["userData"],
  computed: {
    ...mapGetters(["nowMessageList"]),
    // 获取当前的聊天信息
    messageList_x() {
      // 根据userData的信息筛选信息
      let message = this.nowMessageList.filter(
        x => x.id === this.userData.friend.id
      )[0];
      return message.list;
    }
  },
  methods: {
    showPersonindex_y() {
      this.$router.push("./person");
    }
  },
  updated() {
    this.$emit("scrollC");
  }
};
</script>

<style scoped>
.dialogContent {
  margin-top: 10px;
  font-size: 16px;
}
.selfDialog {
  position: relative;
}
.selfDialog .avatar {
  left: 20%;
}
.selfDialog .content {
  background-color: rgb(241, 184, 227);
}
.content {
  display: inline-block;
  padding: 1.5vh;
  background-color: rgb(228, 194, 132);
  font-size: 4vmin;
  border-radius: 5px;
}
.dialogContent .selfList .mu-item .mu-item-title.selfLeft {
  width: auto;
}
</style>