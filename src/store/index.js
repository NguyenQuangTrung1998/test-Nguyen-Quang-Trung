import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        listBlog:[
            { title:'travel',description:'abc'}
        ]
    },
    mutations:{
        addItem(state,item){
            let listBlog = state.listBlog;
            listBlog.push(item);
            Vue.set(state,'listBlog',listBlog);
        }
    }
})