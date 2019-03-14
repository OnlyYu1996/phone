const state = {
  // 当前app用户的信息
  user: {
    userName: "OnlyYu",
    upic:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549994943954&di=19cf826277de5e60452e41584ca37cd6&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0103b259772b9ba8012193a3805824.jpg",
    age: "22",
    sex: "男",
    phone: "17768110130",
    email: "1158673577@qq.com",
    birthday: "1996-01-25"
  },
  // 获取当前动态的信息
  contentData: [
    {
      id: 0,
      user: "香蕉有籽",
      upic:
        "http://img3.imgtn.bdimg.com/it/u=663586512,2476638111&fm=26&gp=0.jpg",
      pubtime: "2019-1-3 20:11:19",
      phone: "至尊诺基亚",
      content:
        "你所浪费的今天，是昨天死去的人奢望的明天；你所厌恶的现在，是未来的你回不去的曾经",
      photos: [
        "http://img4.imgtn.bdimg.com/it/u=1092471999,2314884673&fm=11&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=567300397,2420452001&fm=11&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=1518658835,2305511672&fm=26&gp=0.jpg"
      ],
      like: 637,
      comment: "122",
      vuexCommentInfo: []
    },
    {
      id: 1,
      user: "马叉虫",
      upic:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2912492641,3281101827&fm=26&gp=0.jpg",
      pubtime: "2019-1-3 20:11:19",
      phone: "Android",
      content: "我不会帮你，想要什么样的未来……自己去追寻吧！",
      photos: [
        "http://img5.imgtn.bdimg.com/it/u=1660787257,3879458168&fm=200&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2193513751,1625826462&fm=26&gp=0.jpg",
        "http://img5.imgtn.bdimg.com/it/u=1660787257,3879458168&fm=200&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2193513751,1625826462&fm=26&gp=0.jpg"
      ],
      like: 83,
      comment: "64",
      vuexCommentInfo: []
    },
    {
      id: 2,
      user: "青青草原村霸",
      upic:
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2796026073,257149680&fm=26&gp=0.jpg",
      pubtime: "2019-1-3 20:11:19",
      phone: "iPhone",
      content:
        "我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……",
      photos: [
        "http://img5.imgtn.bdimg.com/it/u=2840274407,2113439854&fm=11&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2193513751,1625826462&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2156417650,855603087&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2193513751,1625826462&fm=26&gp=0.jpg",
        "http://img0.imgtn.bdimg.com/it/u=567300397,2420452001&fm=11&gp=0.jpg"
      ],
      like: 460,
      comment: "81",
      vuexCommentInfo: []
    }
  ]
};
export default state;
