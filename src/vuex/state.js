const state = {
  // 当前app用户的信息
  user: {
    userName: "OnlyYu",
    upic:
      "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2841648446,236398816&fm=26&gp=0.jpg",
    age: "22",
    sex: "男",
    phone: "17768110130",
    email: "1158673577@qq.com",
    birthday: "1996-01-25"
  },
  // 获取当前动态的信息
  contentData: [
    {
      id: 1,
      user: "香蕉有籽",
      upic:
        "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2841648446,236398816&fm=26&gp=0.jpg",
      pubtime: "2019-1-3 20:11:19",
      phone: "至尊诺基亚",
      content:
        "你所浪费的今天，是昨天死去的人奢望的明天；你所厌恶的现在，是未来的你回不去的曾经",
      photos: [
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1963304009,2816364381&fm=26&gp=0.jpg",
        "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208538952,1443328523&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=1518658835,2305511672&fm=26&gp=0.jpg"
      ],
      like: 637,
      comment: "122",
      vuexCommentInfo: []
    },
    {
      id: 2,
      user: "马叉虫",
      upic:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3788618920,3070644572&fm=26&gp=0.jpg",
      pubtime: "2019-1-3 20:11:19",
      phone: "Android",
      content: "我不会帮你，想要什么样的未来……自己去追寻吧！",
      photos: [
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1091579268,2185400060&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2193513751,1625826462&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1091579268,2185400060&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2193513751,1625826462&fm=26&gp=0.jpg"
      ],
      like: 83,
      comment: "64",
      vuexCommentInfo: []
    },
    {
      id: 3,
      user: "青青草原村霸",
      upic:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553265745690&di=bd9df2e13fd243368f261e829d346e0c&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F622762d0f703918f06438ac3573d269759eec42d.jpg",
      pubtime: "2019-1-3 20:11:19",
      phone: "iPhone",
      content:
        "我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……",
      photos: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2193513751,1625826462&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2156417650,855603087&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2193513751,1625826462&fm=26&gp=0.jpg",
        "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208538952,1443328523&fm=26&gp=0.jpg"
      ],
      like: 460,
      comment: "81",
      vuexCommentInfo: []
    }
  ],
  // 初始化用户数据,friends为当前对话选中是朋友
  data: { self: {}, friends: [] },
  // 被选中或者在聊天中的朋友ID
  activeID: 0,
  // 添加虚拟数据，id是作为聊天队列的标记，list是聊天内容
  messageList: [
    {
      id: 1,
      list: [{ id: 1, message: "今天天气挺好啊", time: "14:36" }]
    },
    {
      id: 2,
      list: [{ id: 2, message: "周末出去玩吗？", time: "06:05" }]
    },
    {
      id: 3,
      list: [{ id: 3, message: "请问你吃饭了吗", time: "12:10" }]
    }
  ],
  // 模拟数据库中正在对话的消息列表
  messageListCopy: [
    {
      id: 1,
      list: [{ id: 1, message: "你可以和我聊天", time: "14:36" }]
    },
    {
      id: 2,
      list: [{ id: 2, message: "我会讲笑话哦", time: "06:05" }]
    },
    {
      id: 3,
      list: [{ id: 3, message: "请问你吃饭了吗", time: "12:10" }]
    }
  ],
  // ajax是否结束
  isAjax: false,
  // 对话框组件是否渲染
  dialog: false
};
export default state;
