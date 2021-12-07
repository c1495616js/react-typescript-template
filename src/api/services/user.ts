import { AxiosResponse } from 'axios';

import { User } from '@/types';
import axiosInstance, { getJWTHeader } from '../http-common';

/* eslint-disable import/prefer-default-export */
export class UserService {
  static async getUser(user: User | undefined): Promise<User | undefined> {
    if (!user) return undefined;
    const { data }: AxiosResponse<{ user: User }> = await axiosInstance.get(
      `/user/${user.id}`,
      {
        headers: getJWTHeader(user),
      }
    );
    return data.user;
  }
}
