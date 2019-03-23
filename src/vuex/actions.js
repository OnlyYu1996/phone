const actions ={
    getAllData: async ({commit},that)=>{
        let self ={}
        let friends ={}
        await that.$axios.get('/api/self')
            .then(({data}) => {
                self=data.data
            })
        await that.$axios.get('/api/friends')
            .then(({data})=>{
                friends=data.data
            })
        commit('getData',{
            self,friends
        })
    },
    // 聊天机器人
    sendValue:async ({commit},{id,message,that})=>{
        //用于存储ajax获取的数据
        let robotData={}
        // 处理输入内容
        commit('changeList',{self:true,id,message})
        // 进行ajax请求
        await that.$axios.get('/api/robotapi',{
            params:{
                message,
                id:id
            }
        }).then(res=>{
            // console.log(res)
            robotData=JSON.parse(res.data.data)
        })
        // 返回的内容为文本类
        if(robotData.code === 100000){
            commit('changeList',{id,message:robotData.text})
        }else if(robotData.code === 200000){ // 返回的内容为链接类
            let data=robotData.text + robotData.url
            commit('changeList',{id,message:data})
        }else if(robotData.code === 40004){
            commit('changeList',{id,message:'亲爱的，机器人该休息了。'})
            console.log('当天请求次数已用完')
        }
        else{
            commit('changeList',{id,message:'暂不支持此类型对话'})
        }
        
    }
}
export default actions