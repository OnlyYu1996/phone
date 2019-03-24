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
  },
  // 获取朋友的id
  getActiveID: (state, { activeID }) => {
    state.activeID = activeID;
  },
  //消息列表，聊天列表处理
  changeList: (state, obj) => {
    let now = new Date();
    let time = `${now.getHours()}:${now.getMinutes()}`;
    // 判断信息是自己的还是机器人的，然后插入队列中
    if (obj.self) {
      // 信息是自己发出的
      state.messageList.forEach((item) => {
        if (item.id === obj.id) {
          obj.id = 0;
          item.list.push({ ...obj, time });
        }
      });
    } else {
      // 信息是机器人发出的
      state.messageList.forEach((item) => {
        if (item.id === obj.id) {
          item.list.push({ ...obj, time });
        }
      });
    }
  },
  // ajax获取到的数据
  getData: (state, data) => {
    state.data = data;
    // 表示ajax已经完成
    state.isAjax = true;
  },
  // 删除消息
  removeMessage: (state, { id }) => {
    state.messageList.forEach((item, index, arr) => {
      // 在消息列表中找到该消息
      if (item.id === id) {
        arr.splice(index, 1);
      }
    });
  },
  // 添加消息列表
  addMessage: state => {
    // console.log("addMessage");
    let message = state.messageList.filter(x => x.id === state.activeID)[0];
    if (!message) {
      // console.log(state.messageListCopy)
      let oldMessage = state.messageListCopy.filter(
        x => x.id === state.activeID
      )[0];
      // console.log(oldMessage)
      state.messageList.splice(oldMessage.id - 1, 0, oldMessage);
    }
    // console.log('end')
  }
};
export default mutations;
