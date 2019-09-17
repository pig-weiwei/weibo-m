import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';


import header from './header'
import mainbody from './mainbody'



Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules:{
        header,
        mainbody
    },
    plugins:[debug ? createLogger : '' ]
})