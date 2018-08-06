import { FETCH_COSMETIC } from '../../types';

const INIT_COSMETIC = {
	cosmetic: []
};

export default (state=INIT_COSMETIC, action) => {
	switch(action.type) {
		case FETCH_COSMETIC:
			return {...state, cosmetic: action.cosmetic};
        default:
            return state;
	}
}
