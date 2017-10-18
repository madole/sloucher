import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    countdownTime: 5,
    slouching: true,
};

const mutations = {
    setCountdownTime(state, time) {
        state.countdownTime = time;
    },
    toggleSlouch(state) {
        state.slouching = !state.slouching;
    },
};

const actions = {
    setCountdownTime: ({ commit }, time) => commit("setCountdownTime", time),
    toggleSlouch: ({ commit }) => commit("toggleSlouch"),
};

const getters = {
    getCountdownTime: state => state.countdownTime,
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
});
