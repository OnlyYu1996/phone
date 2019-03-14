<template>
  <div class="search">
    <!--搜索导航 start-->
    <mu-appbar>
      <mu-button icon @click="back" slot="left">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <mu-text-field
        class="appbar-search-field"
        slot="default"
        focus
        placeholder="请输入好友用户名/手机号"
        @input="input"
        v-model="value"
      />
      <mu-button icon slot="right" @click="showSearch">
        <mu-icon value="search"></mu-icon>
      </mu-button>
    </mu-appbar>
    <!--搜索导航 end-->
    <!--用户列表 start-->
    <mu-list>
      <mu-sub-header>搜索结果</mu-sub-header>
      <div v-for="(item,index) of friend" :key="index">
        <mu-list-item :title="item.name" @click="showPersonIndex_x(item.id)">
          <mu-avatar :src="item.avatar" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </div>
    </mu-list>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "search",
  data() {
    return {
      value: "",
      friend: []
    };
  },
  mounted () {
    // 搜索框自动获取焦点
    document.getElementsByTagName("input")[0].focus();
  },
  computed: {
    ...mapState({
      friends: state => state.data.friends
    })
  },
  methods: {
    ...mapMutations(["showSearch", "showPersonIndex", "getActiveId"]),
    back(){
      this.$router.push('/message')
    },
    // 点击打开个人主页
    showPersonIndex_x(id) {
      this.showSearch();
      this.getActiveId({ activeId: id });
      this.showPersonIndex_x();
    },
    // 输入搜索内容
    input(val) {
      if (val === "") {
        // 输入内容为空
        this.friend = [];
      } else if (isNaN(val)) {
        // 利用isNaN检测不能强制转换为数字的字符时返回来判断字符true的特点来判断输入的内容非数字，不用Object.is(NaN,val)的原因
        // 使用过滤器筛选数组
        this.friend = this.friends.filter(x => {
          if (x.name.indexof(val) !== -1) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        // 输入的内容为数字
        this.friend = this.friends.filter(x => {
          if (x.phone.indexof(val) !== -1) {
            return true;
          } else {
            return false;
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.search{
    position: absolute;
    .mu-appbar{
        background-color: #ccc;
        .mu-button{

        }
    }
}
</style>