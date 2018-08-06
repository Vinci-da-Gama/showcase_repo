import { FETCH_DAIRY } from '../../types';

const INIT_DAIRY = {
	dairy: []
};

export default (state=INIT_DAIRY, action) => {
	switch(action.type) {
		case FETCH_DAIRY:
			return {...state, dairy: action.dairy};
        default:
            return state;
	}
}
