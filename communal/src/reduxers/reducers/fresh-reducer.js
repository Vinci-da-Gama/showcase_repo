import { FETCH_FRESH } from '../../types';

const INIT_FRESH = {
	fresh: []
};

export default (state=INIT_FRESH, action) => {
	switch(action.type) {
		case FETCH_FRESH:
			return {...state, fresh: action.fresh};
        default:
            return state;
	}
}
