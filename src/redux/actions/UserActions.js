import * as types from '../constants/UserConstants';
import axios from '../../core/utils/Axios';

//= ====================================
//  GIFTCARDS ACTIONS
//--------------------------------------
export function login(username, password) {
  return axios.post(`/login`, { username, password });
};

export function logout() {
  return dispatch => {
    dispatch({
      type: types.LOGOUT_REQUEST
    });
  }
};

export const fetchCustomers = (id) => {
  return axios.get(`/customers`);
};

export const verifyCustomer = (id) => {
  return axios.get(`/verify/customer/`+id);
};

export const processPayment = (payload) => {
  return axios.post(`/process/payment/`, payload);
};

export const fetchTransactions = () => {
  return axios.get(`/transactions`);
};

export const fulfillToken = (token) => dispatch => {
  dispatch({
    type: types.AUTH_TOKEN,
    data: token
  });
};

export function fetchUserByToken() {
  return axios.get(`/user`)
};

export const fulfillUser = (user) => dispatch => {
  dispatch({
    type: types.FETCH_USER_DATA,
    data: user
  });
};
