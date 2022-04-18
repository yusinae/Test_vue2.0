import Vue from "vue";
import Vuex from "vuex";

import sampleModule from "./sampleModule";
import createPersistedState from "vuex-persistedstate";

const samplePersistState = createPersistedState({
  paths: ["count"],
});

Vue.use(Vuex);

export default new Vuex.Store({
  //state: {},
  //getters: {},
  //mutations: {},
  //actions: {},

  /** createPersistedState:{ store(전역으로 사용되는 공통 바구니) 데이터를 영구적으로 보존하는 코드 샘플.
   * 주의사항은 localstorage 하는 기능은 4mb이 한계이기 때문에 createPersistedState 남용하거나 너무 큰 데이터를 저장하면 웹페이지 작동 안할수 있음
   * }
   */
  modules: { sampleModule: sampleModule },
  plugins: [
    createPersistedState({
      //주목! : 여기에 쓴 모듈만 저장됩니다.
      paths: ["sampleModule"],
    }),
  ],
});
