<template>
  <div class="dialog">
    <!--头部导航-->
    <mu-appbar color="#ff88bb" :zDepth="0">
      <!--返回箭头按钮-->
      <mu-button icon slot="left" @click="backMessage">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <div slot="default" class="title">
        <div class="title-item">{{userData.friend.name}}</div>
      </div>
      <div class="right-top" slot="right">
        <!--视频图标-->
        <mu-button icon>
          <mu-icon value="videocam"></mu-icon>
        </mu-button>
        <!--电话图标-->
        <mu-button icon>
          <mu-icon value="call"></mu-icon>
        </mu-button>
        <!--人物详情-->
        <mu-button icon @click="showPersonindex_x">
          <mu-icon value="person"></mu-icon>
        </mu-button>
      </div>
    </mu-appbar>
    <!--对话内容-->
    <div>
      <!--此div（类名为patch）用来撑起高度-->
      <div class="patch-1"></div>
      <DialogContent :userData="userData" class="DialogContent" @scrollC="scrollC"/>
      <div class="patch-2"></div>
      <!--锚点，自动滚动到新消息-->
      <a href="#message" name="message" ref="end" style="height:0;"></a>
    </div>
    <!--footer-->
    <div class="footer" ref="footer">
      <div class="top">
        <mu-text-field
          v-model="value"
          @focus="focus"
          @input="input"
          @blur="blur"
          @keyup.enter.native="sendValue"
          placeholder="输入文字"
        />
        <mu-button icon @click="sendValue">
          <mu-icon value="send" :color="sendInputColor"/>
        </mu-button>
      </div>
      <!--最底层按钮-->
      <div class="bottom">
        <mu-button icon>
          <mu-icon value="mic_none"/>
        </mu-button>
        <mu-button icon>
          <mu-icon value="photo_size_select_actual"/>
        </mu-button>
        <mu-button icon>
          <mu-icon value="tag_faces"/>
        </mu-button>
        <mu-button icon>
          <mu-icon value="switch_video"/>
        </mu-button>
        <mu-button icon>
          <mu-icon value="cloud_queue"/>
        </mu-button>
        <mu-button icon>
          <mu-icon value="photo_camera"/>
        </mu-button>
        <mu-button icon>
          <mu-icon value="folder_open"/>
        </mu-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "dialogTemp",
  data() {
    return {
      value: "",
      timer: {},
      sendInputColor: "#aaa"
    };
  },
  computed: {
    ...mapState({
      self: state => state.data.self
    }),
    userData() {
      return {
        self: this.self,
        friend: this.$store.getters.friend
      };
    }
  },
  methods: {
    ...mapMutations(["getActiveID", "addMessage"]),
    showPersonindex_x() {
      this.$router.push("./person");
    },
    // 输入框获得焦点时触发
    focus() {
      this.timer.T = setInterval(() => {
        //scrollIntoView属性让当前的元素滚动到浏览器窗口的可视区域内(解决输入法框挡住组件)
        if (this.$refs.footer.scrollIntoView) {
          this.$refs.footer.scrollIntoView(false);
        }
      }, 200);
    },
    input() {
      if (!this.value.length) {
        this.sendInputColor = "#ccc";
      } else {
        this.sendInputColor = "#2196f3";
      }
    },
    // 失去焦点时清除定时器
    blur() {
      clearInterval(this.timer.T);
      this.sendInputColor = "#ccc";
    },
    // 每次组件更新后模拟点击锚点
    scrollC() {
      this.$refs.end.click();
    },
    sendValue() {
      if (this.value.length) {
        this.$store.dispatch("sendValue", {
          id: this.userData.friend.id,
          message: this.value,
          that: this
        });
      } else {
        console.log("输入的内容不能为空");
      }
      this.value = "";
      setTimeout(() => {
        document.getElementsByTagName("input")[0].focus();
      }, 1000);
    },
    backMessage() {
      this.$router.push("./message");
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollC();
      document.getElementsByTagName("input")[0].focus();
    });
  },
  watch: {
    value(val) {
      this.value = val;
    }
  }
};
</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.dialog .patch-1 {
  height: 70px;
}
.dialog .patch-2 {
  height: 20.5vmin;
}
.dialog .mu-appbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.dialog .footer {
  z-index: 500000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20.5vmin;
  text-align: center;
  background-color: rgb(241, 213, 230);
}
.dialog .footer .top {
  display: flex;
  justify-content: center;
  margin-bottom: -5.38889vmin;
}
.footer .top .mu-input {
  width: 80vmin;
}
</style>