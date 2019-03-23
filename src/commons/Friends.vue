<template>
  <div class="friends">
    <div class="tab">
      <mu-bottom-nav color="#888">
        <mu-bottom-nav-item title="添加" icon="person_add"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="群聊" icon="people"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="附近" icon="person"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
    <div class="myFriendsSpan">
      <span>我的好友</span>
    </div>
    <div class="myFriends">
      <mu-list>
        <div v-for="item of friends" class="item" :key="item.id">
          <mu-list-item avatar button @click="showPersonIndex_x(item.id)">
            <mu-list-item-action>
              <mu-avatar>
                <img :src="item.avatar">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-content>
              <mu-list-item-title>{{item.name}}</mu-list-item-title>
              <mu-list-item-sub-title>{{item.about}}</mu-list-item-sub-title>
            </mu-list-item-content>
            <mu-list-item-action>
              <mu-button icon @click.stop="toDialog(item.id)">
                <mu-icon value="chat_bubble"/>
              </mu-button>
            </mu-list-item-action>
          </mu-list-item>
        </div>
      </mu-list>
    </div>
    <mu-list>
      <div></div>
    </mu-list>
  </div>
</template>

<script>
export default {
  name: "friendsList",
  computed: {
    friends() {
      return this.$store.state.data.friends;
    }
  },
  methods: {
    showPersonIndex_x(id) {
      this.$store.commit("getActiveID", { activeID: id });
      this.$router.push("./person");
    },
    toDialog(id) {
      this.$store.commit("getActiveID", { activeID: id });
      this.$router.push("./dialog");
    }
  }
};
</script>

<style scoped>
.friends .tab {
  width: 100%;
  height: 13.33333vmin;
}
.friends .tab .mu-tab {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.friends .myFriendsSpan {
  height: 6vh;
  padding: 2vw 0vw 0vw 4vw;
  font-size: 3.5vmin;
  color: rgba(0, 0, 0, 0.8);
}
.friends .myFriends {
  margin-top: -3vw;
}
.friends .myFriends .item {
  background-color: rgb(248, 231, 231);
  margin-bottom: 1vw;
}
</style>