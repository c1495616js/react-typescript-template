/* eslint-disable import/prefer-default-export */
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { User } from '@/types';

const BASE_URL = '';

interface jwtHeader extends AxiosRequestHeaders {
  Authorization: string;
}

export function getJWTHeader(user: User): jwtHeader {
  return { Authorization: `Bearer ${user.token}` };
}

const config: AxiosRequestConfig = { baseURL: BASE_URL };
const axiosInstance = axios.create(config);

export default axiosInstance;
