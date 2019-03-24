<template>
  <div class="app-bar">
    <div class="app-bar-left">
      <slot name="left"/>
    </div>
    <div class="app-bar-title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="app-bar-right">
      <slot name="right"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: ""
  }
};
</script>
<style>
.app-bar {
  height: 75px;
  background-color: #ff88bb;
  box-shadow: 0 0 1px 2px #ddd;
  display: flex;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
  font-weight: 500;
  font-size: 4.5vmin;
}
.app-bar .app-bar-title {
  flex: 1;
  text-align: center;
  color: #fff;
}
.app-bar .app-bar-left,
.app-bar .app-bar-right {
  width: 80px;
  padding: 0;
  overflow: hidden;
}
.app-bar .app-bar-left .mu-button.back {
  margin-left: -5.38889vmin;
}
</style>