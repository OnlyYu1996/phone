/**
 * 注册全局组件
 */

import AppBar from '@/commons/AppBar.vue'
import TabBar from '@/commons/TabBar.vue'
import BackButton from '@/commons/BackButton.vue'

//使用数组确保唯一性
const components = {
    AppBar,
    TabBar,
    BackButton,
}

export default{
    install(Vue,options){
        Object.keys(components).forEach(k=>{
            Vue.component(k,components[k])
        })
    }
}