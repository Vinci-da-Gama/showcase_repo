import { FETCH_CRAFTS } from '../../types';

const INIT_CRAFTS = {
	crafts: []
};

export default (state=INIT_CRAFTS, action) => {
	switch(action.type) {
		case FETCH_CRAFTS:
			console.log('10 -- Crafts Reducer: ', action.crafts);
			return {...state, crafts: action.crafts};
        default:
            return state;
	}
}
