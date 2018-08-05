import { FETCH_HEALTH } from '../../types';

const INIT_HEALTH = {
	health: []
};

export default (state=INIT_HEALTH, action) => {
	switch(action.type) {
		case FETCH_HEALTH:
			return {...state, health: action.health};
        default:
            return state;
	}
}
