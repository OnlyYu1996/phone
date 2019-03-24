/**
 * 注册全局组件
 */
import News from "@/commons/New.vue";
import AppBar from "@/commons/AppBar.vue";
import TabBar from "@/commons/TabBar.vue";
import BackButton from "@/commons/BackButton.vue";
import Messagelist from "@/commons/MessageList";
import Friends from "@/commons/Friends.vue";
import DialogContent from "@/commons/DialogContent";

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
