<template>
  <div class="tab screen">
    <div class="tabs" >
      <div class="scrollToHeight" 
      v-if="onOff && this.$route.meta.savedPosition"
      @click.stop="scrollHeight">
        返回上次浏览的位置
      </div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <!-- <TabBar :data="data"/> -->
    <TabBar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // data: [
      //   {
      //     id: 0,
      //     icon: "home",
      //     label: "首页",
      //     path: "/home"
      //   },
      //   {
      //     id: 1,
      //     icon: "message",
      //     label: "消息",
      //     path: "/message"
      //   },
      //   {
      //     id: 2,
      //     icon: "perm_identity",
      //     label: "我的",
      //     path: "/mine"
      //   }
      // ],
      onOff:true
    };
  },
  methods: {
    //返回之前的滚动高度
    scrollHeight(){
      this.onOff=false
      // document.getElementsByClassName("content")[0].scrollTo(0,this.$route.meta.savedPosition)
      this.$nextTick(function (){
        document.getElementsByClassName("content")[0].scrollTop=this.$route.meta.savedPosition
        // console.log('scrollHeight')
        // console.log(this.$refs.div1)
      })
    }
  },
  watch: {
    $route (to, from) {
      // 控制是否显示回到原来浏览位置
          if(from.name === 'detail'||from.name === 'message'||from.name === 'mine') {
              this.onOff=true
              // setTimeout(()=>{
              //   this.scrollHeight();
              // },0)
          // console.log(from)
              // this.scrollHeight()
          }else{
              this.onOff=false
          }
    }
  },
  activated:function (){
  //   document.getElementsByClassName("content")[0].scrollTo(0,this.$route.meta.savedPosition)
    // console.log(this.$refs.div1)
  // this.scrollHeight();
    // this.$nextTick(()=>{
    //   setTimeout(()=>{
    //   this.scrollHeight();
    // },1000)
    // })
  },
};
</script>

<style>
.tab {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.tab .tabs {
  flex: 1;
  overflow: hidden; /*给tab-bar留出位置*/
}
.tab .tabs .scrollToHeight{
  position: absolute;
  top: 10.38889vmin;
  background: -webkit-linear-gradient(#ff88bb, white); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#ff88bb, white); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#ff88bb, white); /* Firefox 3.6 - 15 */
  background: linear-gradient(#ff88bb, white); /* 标准的语法 */
  width: 100%;
  color: white;
  z-index: 1000;
  height: 7.38889vmin;
  text-align: center;
  cursor: pointer;
}
</style>