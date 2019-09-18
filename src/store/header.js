import axios from 'axios'

export default{
    state:{
        active: '',
        listData: [
            {title: '热门', containerId: '102803', since_id: 0},
            {title: '新鲜事', containerId: '102803_ctg1_7978_-_ctg1_7978', since_id: 0},
            {title: '同城', containerId: '102803', since_id: 0},
            {title: '搞笑', containerId: '102803_ctg1_4388_-_ctg1_4388', since_id: 0},
            {title: '情感', containerId: '102803_ctg1_1988_-_ctg1_1988', since_id: 0},
            {title: '明星', containerId: '102803_ctg1_4288_-_ctg1_4288', since_id: 0},
            {title: '动漫', containerId: '102803_ctg1_4188_-_ctg1_4188', since_id: 0},
            {title: '数码', containerId: '102803_ctg1_5088_-_ctg1_5088', since_id: 0},
            {title: '体育', containerId: '102803_ctg1_1388_-_ctg1_1388', since_id: 0},
            {title: '汽车', containerId: '102803_ctg1_5188_-_ctg1_5188', since_id: 0},
            {title: '电影', containerId: '102803_ctg1_3288_-_ctg1_3288', since_id: 0},
            {title: '游戏', containerId: '102803_ctg1_4888_-_ctg1_4888', since_id: 0},
        ]
    },
    getters:{
        active:state=>state.active,
        listData:state=>state.listData
    },
    mutations:{
        SET_ACTIVE(state,v){
            state.active = v
        }
    },
    actions:{

    }
}