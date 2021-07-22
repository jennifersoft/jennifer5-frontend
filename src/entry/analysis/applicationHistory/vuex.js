import store from '@vuejs/vuex/store';
import state from './store/state';
import mutations from './store/mutations';
import actions from './store/actions';
import { createNamespacedHelpers } from 'vuex';

const NAMESPACE = 'applicationHistory';

store.registerModule(NAMESPACE, {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
});

export const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
    NAMESPACE
);

export default store;
