const mutations = {
    // 获取当前用户信息
  user(state, user) {
    state.user = user;
  },
  // 添加好友动态
  contentData(state, contentData) {
    state.contentData.push(contentData);
  },
  // 添加单个好友动态的评论信息
  vuexCommentInfo(state, info) {
    for (var i = 0; i < state.contentData.length; i++) {
      if (info.user == state.contentData[i].user) {
        state.contentData[i].vuexCommentInfo.push(
          `${state.user.userName}：${info.vuexCommentInfo}`
        );
      }
    }
  }
};
export default mutations;
