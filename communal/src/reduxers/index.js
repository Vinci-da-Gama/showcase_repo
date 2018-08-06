import { combineReducers } from 'redux';
import InebriantReducer from './reducers/inebriant-reducer';
import HealthReducer from './reducers/health-reducer';
import PastryReducer from './reducers/pastry-reducer';
import DairyReducer from './reducers/dairy-reducer';
import FreshReducer from './reducers/fresh-reducer';
import CosmeticReducer from './reducers/cosmetic-reducer';
import CraftsReducer from './reducers/crafts-reducer';

const RootReducer = combineReducers({
	inebriants: InebriantReducer,
	health: HealthReducer,
	pastry: PastryReducer,
	dairy: DairyReducer,
	fresh: FreshReducer,
	cosmetic: CosmeticReducer,
	crafts: CraftsReducer
});

export default RootReducer;