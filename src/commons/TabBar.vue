<template>
  <div class="tab-bar">
    <!-- <div
      class="tab-bar-item"
      v-for="item in data"
      :key="item.id"
      :class="{'active':selectIndex === item.id}"
      @click="click($event,item)"
    >
      <mu-icon :value="item.icon"></mu-icon>
      <span class="label">{{item.label}}</span>
    </div>-->
    <mu-bottom-nav class="tab-bar-item" color="rgba(255, 136, 187,.8)" :value.sync="shift" shift>
      <mu-bottom-nav-item value="home" title="主页" icon="home" to="/home"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="message" title="消息" icon="message" to="/message"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="mine" title="我的" icon="perm_identity" to="/mine"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  props: {
    data: Array
  },
  data() {
    return {
      selectIndex: 0,
      // 设置默认选中的图标（当与value值相同时为选中）
      shift: "home"
    };
  },
  methods: {
    // switchPage(item) {
    //   this.selectIndex = item.id;
    //   this.$router.push(item.path);
    // }
  }
};
</script>

<style>
.tab-bar {
  height: 100px;
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ddd;
  font-size: 23px;
}
.tab-bar .tab-bar-item {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.tab-bar-item.active {
  color: rgb(0, 110, 255);
}
</style>