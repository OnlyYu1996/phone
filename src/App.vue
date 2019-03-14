<template>
  <div id="app">
    <transition :enter-active-class="enter" :leave-active-class="leave">
      <!--被缓存的路由通道-->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <!--不缓存的路由通道-->
    </transition>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import News from "@/components/New.vue";
export default {
  name: "App",
  components: {
    News
  },
  data() {
    return {
      enter: "animated fadeInRight",
      leave: "animated fadeOutLeft"
    };
  },
  watch: {
    //添加路由动画
    $route(to, from) {
      const toLength = to.fullPath.split("/");
      const fromLength = from.fullPath.split("/");
      if (toLength > fromLength) {
        this.enter = "animated fadeInLeft";
        this.leave = "animated fadeOutRight";
      } else if (toLength < fromLength) {
        this.enter = "animated fadeInRight";
        this.leave = "animated fadeOutLeft";
      }
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
}
</style>
