import { FETCH_PASTRY } from '../../types';

const INIT_PASTRY = {
	pastry: []
};

export default (state=INIT_PASTRY, action) => {
	switch(action.type) {
		case FETCH_PASTRY:
			return {...state, pastry: action.pastry};
        default:
            return state;
	}
}
