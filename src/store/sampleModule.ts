export default {
  namespaced: true,
  state: { count: 1 },
  mutations: {
    increment(state: any) {
      // mutate state
      state.count++;
    },
  },
  actions: {},
  getters: {},
};
