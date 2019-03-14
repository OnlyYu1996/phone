const getters = {
    // 获取当前app的用户信息
  user(state) {
    return state.user;
  },
  // 好友的全部动态消息
  contentData(state) {
    return state.contentData;
  },
  // 获取单个动态中的评论消息
  vuexCommentInfo: state => userName => {
    return state.contentData.find(value => value.user === userName)
      .vuexCommentInfo;
  }
};
export default getters;
