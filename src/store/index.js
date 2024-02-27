import { createStore } from 'vuex'

const store = createStore({
    state: {
        taskManager: [],
    },
    mutations: {
        setTaskManager(state, data){
            return state.taskManager = data;
        }
    },
    getters: {
        getTaskManager(state){
            return state.taskManager;
        }
    }
});

export default store;