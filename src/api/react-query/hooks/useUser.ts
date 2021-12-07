/* eslint-disable import/prefer-default-export */
import { useQuery, useQueryClient } from 'react-query';

import type { User } from '@/types';
import queryKeys from '@/api/react-query/query-key';
import {
  clearStoredUser,
  getStoredUser,
  setStoredUser,
} from '@/api/react-query/user-storage';
import { UserService } from '@/api/services/user';

interface UseUser {
  user: User | null | undefined;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

export function useUser(): UseUser {
  const queryClient = useQueryClient();
  const { data: user } = useQuery<User>(
    queryKeys.user,
    (): any => UserService.getUser(user),
    {
      initialData: getStoredUser,
      onSuccess: (received: User | undefined) => {
        if (!received) {
          clearStoredUser();
        } else {
          setStoredUser(received);
        }
      },
    }
  );

  function updateUser(newUser: User): void {
    queryClient.setQueryData(queryKeys.user, newUser);
  }

  function clearUser() {
    queryClient.setQueryData(queryKeys.user, null);
  }

  return { user, updateUser, clearUser };
}
