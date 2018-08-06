import { FETCH_CRAFTS } from '../../types';

const INIT_CRAFTS = {
	crafts: []
};

export default (state=INIT_CRAFTS, action) => {
	switch(action.type) {
		case FETCH_CRAFTS:
			return {...state, crafts: action.crafts};
        default:
            return state;
	}
}
