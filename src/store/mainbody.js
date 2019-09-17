import axios from 'axios'

export default {
    state: {
        loading: true,
        mainData: []
    },
    getters: {
        loading: state => state.loading,
        mainData: state => state.mainData,
    },
    mutations: {
        SET_LOADING(state, v) {
            state.loading = v
        },
        SET_MAIN_DATA(state, v) {
            state.mainData = v
        }
    },
    actions: {
        async get_main_data({state, commit}, v1) {
            console.log(v1)
            let res = await axios.get('/weibo/container/getIndex', {
                params: {
                    containerid: v1.containerId,
                    since_id: v1.since_id,
                    openApp: 0
                }
            });
            if (res.status == 200) {
                commit('SET_MAIN_DATA', res.data);
                commit('SET_LOADING',false);
                console.log(res.data)
            }
        }
    }
}