import { FETCH_FRESH } from '../../types';

const INIT_FRESH = {
	fresh: []
};

export default (state=INIT_FRESH, action) => {
	switch(action.type) {
		case FETCH_FRESH:
			console.log('10 -- Fresh Reducer: ', action.fresh);
			return {...state, fresh: action.fresh};
        default:
            return state;
	}
}
