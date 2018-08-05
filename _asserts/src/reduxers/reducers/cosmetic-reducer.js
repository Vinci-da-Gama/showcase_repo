import { FETCH_COSMETIC } from '../../types';

const INIT_COSMETIC = {
	cosmetic: []
};

export default (state=INIT_COSMETIC, action) => {
	switch(action.type) {
		case FETCH_COSMETIC:
			console.log('10 -- Cosmetic Reducer: ', action.cosmetic);
			return {...state, cosmetic: action.cosmetic};
        default:
            return state;
	}
}
