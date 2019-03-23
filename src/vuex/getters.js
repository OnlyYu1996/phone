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
  },
  // 添加正在对话的消息列表
  nowMessageList: state => {
    let list = state.messageList;
    if (!list.length == 0) {
      list.forEach(x => {
        // 根据数据库中的friend的id，把好友信息插入到messageList列表中
        let friend = state.data.friends.filter(index => index.id == x.id)[0];
        // 把state.data.friends中的数据添加朋友到当前列表x中
        x.friend = friend;
      });
    }
    return list;
  },
  // 根据当前选中的朋友的_id来筛选出当前的friend的具体数据
  friend: state => {
    return state.data.friends.filter(x => x.id === state.activeID)[0];
  }
};
export default getters;
