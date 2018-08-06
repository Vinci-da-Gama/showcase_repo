import axios from 'axios';

import { FETCH_INEBRIANT, FETCH_HEALTH, FETCH_PASTRY, FETCH_DAIRY, FETCH_FRESH, FETCH_COSMETIC, FETCH_CRAFTS } from '../types';
import { handleError, handleNoData } from '../helpers/error-handler';
const rootUrl = 'http://localhost:3004';

const loadInebriants = (inebriants) => {
	return  {
		type: FETCH_INEBRIANT,
		inebriants
	};
};

export const grabInebriants = () => {
	return (dispatch) => {
		// return axios.get(`${rootUrl}/inebriants`)
		return axios.get('https://api.myjson.com/bins/svo9k')
			.then((resp) => {
				if (resp) {
					dispatch(loadInebriants(resp.data.inebriants));
				} else {
					dispatch(handleNoData(dispatch, catchError));
				}
			})
			.catch((err) => {
				handleError(err);
			});
	};
};

const loadHealth = (health) => {
	return  {
		type: FETCH_HEALTH,
		health
	};
};

export const grabHealth = () => {
	return (dispatch) => {
		// return axios.get(`${rootUrl}/health`)
		return axios.get('https://api.myjson.com/bins/1hag2g')
			.then((resp) => {
				if (resp) {
					dispatch(loadHealth(resp.data.health));
				} else {
					dispatch(handleNoData(dispatch, catchError));
				}
			})
			.catch((err) => {
				handleError(err);
			});
	};
};

const loadPastry = (pastry) => {
	return {
		type: FETCH_PASTRY,
		pastry
	};
};

export const grabPastry = () =>  {
	return (dispatch) => {
		// return axios.get(`${rootUrl}/pastry`)
		return axios.get('https://api.myjson.com/bins/u4omw')
			.then((resp) => {
				if (resp) {
					dispatch(loadPastry(resp.data.pastry));
				} else {
					dispatch(handleNoData(dispatch, catchError));
				}
			})
			.catch((err) => {
				handleError(err);
			});
	};
};

const loadDairy = (dairy) => {
	return {
		type: FETCH_DAIRY,
		dairy
	};
};

export const grabDairy = () => {
	return (dispatch) => {
		// return axios.get(`${rootUrl}/dairy`)
		return axios.get('https://api.myjson.com/bins/16msc8')
		.then((resp) => {
			if (resp) {
				dispatch(loadDairy(resp.data.dairy));
			} else {
				dispatch(handleNoData(dispatch, catchError));
			}
		})
		.catch((err) => {
			handleError(err);
		});
	};
};

const loadFresh = (fresh) => {
	return {
		type: FETCH_FRESH,
		fresh
	};
};

export const grabFresh = () => {
	return (dispatch) => {
		// return axios.get(`${rootUrl}/fresh`)
		return axios.get('https://api.myjson.com/bins/dgjp4')
		.then((resp) => {
			if (resp) {
				dispatch(loadFresh(resp.data.fresh));
			} else {
				dispatch(handleNoData(dispatch, catchError));
			}
		})
		.catch((err) => {
			handleError(err);
		});
	};
};

const loadCosmetic = (cosmetic) => {
	return {
		type: FETCH_COSMETIC,
		cosmetic
	};
};

export const grabCosmetic = () =>  {
	return (dispatch) => {
		// return axios.get(`${rootUrl}/cosmetic`)
		return axios.get('https://api.myjson.com/bins/11vbi0')
		.then((resp) => {
			if (resp) {
				dispatch(loadCosmetic(resp.data.cosmetic));
			} else {
				dispatch(handleNoData(dispatch, catchError));
			}
		})
		.catch((err) => {
			handleError(err);
		});
	};
};

const loadCrafts = (crafts) => {
	return {
		type: FETCH_CRAFTS,
		crafts
	};
};

export const grabCrafts = () =>  {
	return (dispatch) => {
		// return axios.get(`${rootUrl}/crafts`)
		return axios.get('https://api.myjson.com/bins/qk308')
		.then((resp) => {
			if (resp) {
				dispatch(loadCrafts(resp.data.crafts));
			} else {
				dispatch(handleNoData(dispatch, catchError));
			}
		})
		.catch((err) => {
			handleError(err);
		});
	};
};
