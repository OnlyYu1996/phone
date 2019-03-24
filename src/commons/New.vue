<template>
  <div class="app-news">
    <div @click="$emit('click',$event)" class="app-news-title">
      <header>
        <mu-avatar size="40" color="#ddd">
          <img :src="data.upic">
        </mu-avatar>
        <div class="title">
          <h4>{{data.user}}</h4>
          <div class="info">
            <span class="pubtime">{{data.pubtime}}</span>
            <span class="phone">
              来自&nbsp&nbsp
              <i>{{data.phone}}</i>&nbsp&nbsp
            </span>
          </div>
        </div>
      </header>
      <p>{{data.content}}</p>
      <div class="photos">
        <div class="photo" v-for="(item,index) in data.photos" :key="index">
          <img :src="item">
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="data">
        <i>{{data.like}}赞 &nbsp</i>
        <i>{{data.comment}}评论</i>
        <div class="icon">
          <!--赞按钮-->
          <mu-button icon small @click="lickClickToRed()" v-if="likeOnOff==false" class="clickGood">
            <mu-icon value="thumb_up"></mu-icon>
          </mu-button>
          <mu-button
            icon
            small
            color="red"
            @click="lickClickToWhite()"
            v-if="likeOnOff==true"
            class="clickGood"
          >
            <mu-icon value="thumb_up"></mu-icon>
          </mu-button>
          <!--评论按钮-->
          <mu-button
            icon
            small
            color="gray"
            class="message-buttom"
            @click="showCommentInfo=!showCommentInfo"
          >
            <mu-icon value="message"></mu-icon>
          </mu-button>
          <!--分享按钮-->
          <mu-container>
            <mu-flex justify-content="center">
              <mu-button icon small color="gray" @click="openBotttomSheet">
                <mu-icon value="share"></mu-icon>
              </mu-button>
            </mu-flex>
            <mu-bottom-sheet :open.sync="open">
              <mu-list @item-click="closeBottomSheet">
                <mu-sub-header>分享到</mu-sub-header>
                <mu-list-item button>
                  <mu-list-item-action>
                    <mu-icon value="grade" color="orange"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>微博</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <mu-icon value="inbox" color="blue"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>QQ</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <mu-icon value="chat" color="green"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>微信</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                  <mu-list-item-action>
                    <mu-icon value="email" color="cyan"></mu-icon>
                  </mu-list-item-action>
                  <mu-list-item-title>邮箱</mu-list-item-title>
                </mu-list-item>
              </mu-list>
            </mu-bottom-sheet>
          </mu-container>
        </div>
      </div>
    </div>
    <div class="vuexCommentInfo" v-show="this.vuexCommentInfo">
      <div v-for="(item) in this.vuexCommentInfo" :key="item.id">{{ item }}</div>
    </div>
    <div class="commentInfo" v-show="showCommentInfo">
      <mu-container>
        <mu-text-field
          solo
          autofocus="autofocus"
          ref="commentInfoText"
          v-model="commentInfo"
          placeholder="说点什么吧..."
          color="red"
          multi-line
          :rows="1"
          :rows-max="3"
          @keyup.enter="commentClick()"
        ></mu-text-field>
        <mu-button color="secondary" small @click="commentClick()">评论</mu-button>
      </mu-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "New",
  props: {
    data: Object
  },
  data() {
    return {
      likeOnOff: false, //控制点赞按钮颜色
      open: false, //控制分享窗口弹出
      showCommentInfo: false, //控制评论div弹出
      commentInfo: "", //存储评论内容
      vuexUser: this.$store.getters.user.name, //vuex中的评论人物
      vuexCommentInfo: this.$store.getters.vuexCommentInfo(this.data.user) //vuex中的评论内容
    };
  },
  methods: {
    //点赞
    lickClickToRed() {
      this.likeOnOff = !this.likeOnOff;
      this.data.like++;
    },
    //取消点赞
    lickClickToWhite() {
      this.likeOnOff = !this.likeOnOff;
      this.data.like--;
    },
    //分享弹窗
    closeBottomSheet() {
      this.open = false;
    },
    openBotttomSheet() {
      this.open = true;
    },
    //评论按钮
    commentClick() {
      this.$store.commit("vuexCommentInfo", {
        user: this.data.user,
        vuexCommentInfo: this.commentInfo
      });
      this.data.comment++;
      this.commentInfo = "";
    }
  }
};
</script>
<style scoped>
.app-news {
  background-color: #fff;
  padding: 5px 10px;
  margin-bottom: -2.69444vmin;
}
.app-news .app-news-title {
  margin-bottom: 1.41667vmin;
}
.app-news header {
  padding: 5px 0;
  display: flex;
  align-items: center;
}
.app-news header .mu-avatar {
  margin-right: 10px;
  width: 72px;
  height: 72px;
}
.app-news header .title {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60px;
  position: ;
}
.app-news header .title h4 {
  height: 30px;
  margin: -2.58333vmin 0;
}
.app-news header .title .info {
  min-height: 15px;
  display: flex;
  height: 0.16667vmin;
  justify-content: space-between;
}
.app-news header .title .info .phone i {
  color: darkgoldenrod;
}
.app-news p {
  min-height: 10px;
  padding: 0.69444vmin 0;
}
.app-news .photos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.app-news .photos .photo {
  display: flex;
  max-width: 31.36111vmin;
  width: 31.36111vmin;
  height: 32vmin;
  margin: 0 2px;
  margin: 3px;
  overflow: hidden;
}
.app-news .photos .photo img {
  display: block;
  max-width: 200%;
  max-height: 200%;
  width: 32vmin;
  height: 32vmin;
}
.app-news .footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -4.41667vmin;
}
.app-news .footer .data .mu-button {
  position: relative;
  top: 1.3vmin;
  left: -0.7vmin;
}
.app-news .footer .data {
  padding: 0 5px;
}
.app-news .footer .icon {
  width: 33.5vmin;
  position: relative;
  top: -2vmin;
  right: -60.38889vmin;
}
.app-news .footer .icon .container {
  width: 6.11111vmin;
  height: 11.11111vmin;
  margin-top: -7.38889vmin;
  margin-right: -5px;
  position: relative;
  top: -4.61111vmin;
  right: 1.38889vmin;
}
.app-news .footer .data .icon .mu-button.clickGood {
  position: relative;
  right: 10px;
  top: -2vmin;
}
.app-news .footer .data .icon .mu-button.message-buttom {
  position: relative;
  left: 2.38889vmin;
  top: -1.61111vmin;
}
.app-news .commentInfo {
  width: 100%;
  border-radius: 3.69444vmin;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.app-news .commentInfo .mu-input {
  width: 75.16667vmin;
}
.app-news .commentInfo .mu-input .mu-text-field {
  width: 100%;
}
.app-news .commentInfo .mu-button {
  min-width: 0;
  width: 13.38889vmin;
}
.app-news .vuexCommentInfo {
  padding: 0 20px 0 20px;
  color: rgb(26, 60, 170);
}
.app-news .vuexCommentInfo div {
  padding-bottom: 5px;
  word-break: break-all;
  word-wrap: break-word;
}
</style>