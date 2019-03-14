<template>
  <div class="page">
    <AppBar title=个人资料 class='personalBar'>
      <!-- <mu-button icon color="white" slot="right">
        <mu-icon value="reorder"></mu-icon>
      </mu-button> -->
    </AppBar>
    <div class="personalInfo">
      <div class='upic'>
        <div>头像</div>
        <img :src=upic alt='我的头像'>
      </div>
      <div class="userName">
        <div>用户名</div>
        <div>{{userName}}</div>
      </div>
      <div class="age">
        <div>年龄</div>
        <div>{{age}}</div>
      </div>
      <div class="sex">
        <div>性别</div>
        <div>{{sex}}</div>
      </div>
      <div class="phone">
        <div>手机号码</div>
        <div>{{phone}}</div>
      </div>
      <div class="email">
        <div>邮箱</div>
        <div>{{email}}</div>
      </div>
      <div class="birthday">
        <div>生日</div>
        <div>{{birthday}}</div>
      </div>
      <div class="QQ">
        <div>QQ认证</div>
        <a href="#">去认证 ></a>
      </div>
      <div class="exit">
        <div>退出登陆</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    userName:this.$store.getters.user.userName,
    upic:this.$store.getters.user.upic,
    age:this.$store.getters.user.age,
    sex:this.$store.getters.user.sex,
    phone:this.$store.getters.user.phone,
    email:this.$store.getters.user.email,
    birthday:this.$store.getters.user.birthday,
  }
}
};
</script>

<style>
.page .personalBar{
  display: flex;
  overflow: auto;
}
.personalInfo{
  overflow: auto;
}
.personalInfo .userName,.personalInfo .age,.personalInfo .sex,.personalInfo .phone,.personalInfo .email,.personalInfo .birthday,.personalInfo .upic,.personalInfo .QQ,.personalInfo .exit{
  padding: 6.77778vmin 1.38889vmin;
  flex: 1;
  margin: 0 0.69444vmin;
  width: 96%;
  height: 18.33333vmin;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.personalInfo .exit{
  background-color: rgb(153, 2, 2);
  color: white;
  height: 15.33333vmin;
  font-size: 35px;
  justify-content:center;
}
.personalInfo .upic img{
  width: 15%;
}
</style>