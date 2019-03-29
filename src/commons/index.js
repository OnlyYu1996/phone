/**
 * 注册全局组件
 */
import AppBar from "@/commons/AppBar.vue";
import TabBar from "@/commons/TabBar.vue";
import News from "@/commons/New.vue";
import BackButton from "@/commons/BackButton.vue";
import Messagelist from "@/commons/MessageList.vue";
import Friends from "@/commons/Friends.vue";
import DialogContent from "@/commons/DialogContent.vue";

//使用数组确保唯一性
const components = {
  News,
  AppBar,
  TabBar,
  BackButton,
  Messagelist,
  Friends,
  DialogContent
};

export default {
  install(Vue, options) {
    Object.keys(components).forEach(k => {
      Vue.component(k, components[k]);
    });
  }
};
