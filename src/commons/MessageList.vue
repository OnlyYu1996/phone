<template>
  <!--ajax结束之后，有消息才渲染组件-->
  <mu-list v-if="isAjax && nowMessageList" >
    <div
      v-for="(item , index) of nowMessageList"
      :key="index"
      ref="child"
      @click="getActiveID_x(item.id)"
      :class="[{swipeLeft:isSwipe[index]},'warp']">
      <mu-list-item avatar button class="list-item">
        <!--头像-->
        <mu-list-item-action>
          <mu-avatar>
            <img :src="item.friend.avatar">
          </mu-avatar>
        </mu-list-item-action>
        <!--最后一次对话的信息-->
        <mu-list-item-content>
          <mu-list-item-title>{{item.friend.name}}</mu-list-item-title>
          <mu-list-item-sub-title>{{item.list[item.list.length-1].message}}</mu-list-item-sub-title>
        </mu-list-item-content>
        <!--时间与信息条数-->
        <mu-list-item-action>
          <div class="item-right">
            <!--最后一次聊天的时间-->
            <span class="time">{{item.list[item.list.length-1].time}}</span>
            <!--信息数量-->
            <mu-badge class="number" :content="`${item.list.length-1}`"></mu-badge>
          </div>
        </mu-list-item-action>
      </mu-list-item>
      <!--删除按钮，需要阻止事件冒泡-->
      <div class="delete" @click.stop="removeM(item.id)">删除</div>
      <!--此div修复按钮部分不起作用-->
      <div class="overDelete" @click.stop='removeM(item.id)'></div>
    </div>
  </mu-list>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "messageList",
  data() {
    return {
      isSwipe: [false, false, false], // 消息列表的初始状态
    };
  },
  computed: {
    // 判断ajax是否结束
    ...mapState(["isAjax"]),
    ...mapGetters(["nowMessageList"])
  },
  methods: {
    ...mapMutations([
       "getActiveID", "zeroRemove", "removeMessage"
    ]),
    // 获取点击选中的friends的ID
    getActiveID_x(id) {
      this.getActiveID({ activeID:id });
      this.$router.push('./dialog')
    },
    // 删除消息
    removeM(id) {
      this.removeMessage({ id });
    },
  },
  created() {
    setTimeout(() => {
      // 判断是否存在消息列表
      if (this.$refs.child) {
        this.$refs.child.forEach((item, index) => {
          let x, y, X, Y, swipX, swipY; // x,y为起点坐标，X,Y为中点坐标，swipX,swipY为触摸开关
          // 监听touchstart（开始触摸）
          item.addEventListener("touchstart", e => {
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
            swipX = swipY = true;
            this.isSwipe = [false, false, false];
          });
          // 监听触摸动作（正在触摸）
          item.addEventListener("touchmove", e => {
            X = e.changedTouches[0].pageX;
            Y = e.changedTouches[0].pageY;
            // 如果相对为水平滑动
            if (swipX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
              //阻止默认事件
              e.stopPropagation();
              // 右滑事件
              if (X - x > 10) {
                e.preventDefault();
                this.isSwipe.splice(index, 1, false);
              }
              // 左滑事件
              if (X - x < 10) {
                e.preventDefault();
                this.isSwipe.splice(index, 1, true);
              }
              swipY = false;
            }
            if (swipY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
              swipX = false;
            }
          });
          // 点击窗口取消隐藏删除按钮
          window.addEventListener('click',e=>{
            if(item.className.indexOf('swipeLeft') !== -1){
              item.classList.remove('swipeLeft')
            }
          })
        });
      }
    }, 1000);
  }
};
</script>

<style scoped>
.mu-list{
  overflow: hidden;
  background-color: azure;
  padding: 0;
}
.item-right {
  position: relative;
}
.item-right .time {
  display: inline-block;
  position: absolute;
  top: 4vmin;
  left: -10px;
}
.item-right .mu-badge-container {
  display: inline-block;
  position: relative;
  left: 3px;
  top: -5px;
}
.mu-list .warp{
  border-bottom: 1px solid rgb(233, 182, 212);
  height: 8vh;
  transition: all .3s linear;
}
.delete,.overDelete{
  display: block;
  height: 8vh;
  line-height: 8vh;
  width: 20%;
  text-align: center;
  font-size: 1.2em;
  font-weight: 500;
  background-color: #b82651;
}
.mu-list .warp .delete{
  position: relative;
  top: -96%;
  left: 100%;
}
.mu-list .warp .overDelete{
  background-color: transparent;
  position: fixed;
  top: 2%;
  left:85%;
  z-index: 0;
}
.swipeLeft {
  transform: translateX(-20%);
}
</style>