<template>
  <div class="index">
    <!--导航部分-->
    <mu-appbar style="width: 100%;" color="#ff88bb" :zDepth="0">
      <mu-button icon @click="backMessage">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <span>{{userData.name}}</span>
      <mu-button icon slot="right">
        <mu-icon value="more_vert"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="top">
      <div class="bg">
        <img :src="userData.avatar">
      </div>
    </div>
    <div class="content">
      <mu-list>
        <!--用户名-->
        <mu-list-item button avatar class="userInfo">
          <mu-list-item-action>
            <mu-icon value="person_pin"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{userData.name}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <!--电话号码-->
        <mu-list-item button avatar class="userInfo">
          <mu-list-item-action>
            <mu-icon value="phone"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{userData.phone}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <!--地址-->
        <mu-list-item button avatar class="userInfo">
          <mu-list-item-action>
            <mu-icon value="home"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{userData.address}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <!--邮箱-->
        <mu-list-item button avatar class="userInfo">
          <mu-list-item-action>
            <mu-icon value="email"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{userData.email}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <!--生日-->
        <mu-list-item button avatar class="userInfo">
          <mu-list-item-action>
            <mu-icon value="cake"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{userData.birthday}}</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="footer">
      <mu-tabs full-width color='#ff88bb' indicator-color="#ff88bb">
        <mu-tab>
          <mu-icon value='phone'></mu-icon>
        </mu-tab>
        <mu-tab>
          <mu-icon value='videocam'></mu-icon>
        </mu-tab>
        <mu-tab @click="toDialog">
          <mu-icon value='chat_bubble'></mu-icon>
        </mu-tab>
      </mu-tabs>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "personIndex",
  computed: {
    ...mapState(["activeID", "data"]),
    ...mapGetters(["friend"]),
    userData() {
      if (this.activeID === 0) {
        return this.data.self;
      } else {
        return this.friend;
      }
    }
  },
  methods:{
    toDialog(){
      this.$store.commit('addMessage')
      this.$router.push('./dialog')
    },
    backMessage() {
      this.$router.push("./message");
    }
  }
};
</script>

<style scoped>
.index{
  background-color: rgb(218, 227, 230);
}
.index .top .bg {
  height: 96vw;
  width: 100%;
}
.index .top .bg img {
  width: 100%;
  height: 100%;
}
.index .content .userInfo{
  background-color: rgb(248, 229, 248);
  margin-bottom: 1vw;  
}
</style>