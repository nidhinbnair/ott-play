import { SET_DATA, LOAD_MORE_DATA, SEARCH_IN_DATA } from './types';

const INITIAL_STATE = {
    medias: [],
    filtered_medias: [],
    filter_active: false,
    page: 1,
    count: 0,
    search: ""
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_DATA:
            let data = payload.data;
            return { ...state, ...data, };
        case LOAD_MORE_DATA:
            return { ...state, medias: [...state.medias, ...payload.data], };
        case SEARCH_IN_DATA:
            let filDat = { filtered_medias: [], filter_active: false }
            if (state.search) {
                filDat.filtered_medias = state.medias.filter(it => (it?.name || "").toLowerCase().includes(state.search.toLowerCase()))
                filDat.filter_active = true
            }
            console.log(filDat)
            return { ...state, ...filDat };
        default:
            return state;
    }
};

export default reducer;