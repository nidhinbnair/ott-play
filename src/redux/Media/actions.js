import { LOAD_DATA, LOAD_MORE_DATA, SEARCH_IN_DATA, SET_DATA } from './types';

const actions = {
    loadData: (page) => ({
        type: LOAD_DATA,
        payload: { page },
    }),
    updateState: (data) => ({
        type: SET_DATA,
        payload: { data },
    }),
    loadMore: (data) => ({
        type: LOAD_MORE_DATA,
        payload: { data },
    }),
    searchInData: (search) => ({
        type: SEARCH_IN_DATA,
        payload: { search },
    }),
};
export default actions;