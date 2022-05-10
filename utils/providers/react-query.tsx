import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { QueryClientProviderProps } from 'react-query';

const generateQueryClient = () => new QueryClient();

const NewQueryClientProvider: FC<
  React.PropsWithChildren<QueryClientProviderProps>
> = QueryClientProvider;

const Provider: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const queryClient = generateQueryClient();
  return (
    <NewQueryClientProvider client={queryClient}>
      {children}
    </NewQueryClientProvider>
  );
};

export default Provider;
