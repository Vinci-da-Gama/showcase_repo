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
		return axios.get(`${rootUrl}/inebriants`)
			.then((resp) => {
				if (resp) {
					dispatch(loadInebriants(resp.data));
				} else {
					dispatch(handleNoData(dispatch, catchError));
				}
			})
			.catch((err) => {
				handleError(err);
			});
	};
};




/* const returnEmployees = (emps) => {
	return {
		type: GET_EMPLOYEES,
		emps
	};
};

const catchError = (err) => {
	return {
		type: CATCH_ERROR,
		err
	};
};

export const getDataByFeature = (condition='Companies') => {
	return (dispatch) => {
		switch (condition) {
			case 'Companies':
				return axios.get(`${rootUrl}/companyInfo`)
				.then((resp) => {
					if (resp) {
						dispatch(returnCompanies(resp.data));
					} else {
						dispatch(handleNoData(dispatch, catchError));
					}
				})
				.catch((err) => {
					handleError(err);
				});
				break;
			case 'Employees':
				return axios.get(`${rootUrl}/employees`)
				.then((resp) => {
					if (resp) {
						dispatch(returnEmployees(resp.data));
					} else {
						dispatch(handleNoData(dispatch, catchError));
					}
				})
				.catch((err) => {
					handleError(err);
				});
				break;
			default:
				break;
		}
	};
};
 */