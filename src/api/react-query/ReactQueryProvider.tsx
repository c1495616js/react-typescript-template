import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { QueryClientProviderProps } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export const queryClient = new QueryClient();

const NewQueryClientProvider: FC<
  React.PropsWithChildren<QueryClientProviderProps>
> = QueryClientProvider;

const ReactQueryProvider: FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => (
  <NewQueryClientProvider client={queryClient}>
    {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
    {children}
  </NewQueryClientProvider>
);

export default ReactQueryProvider;
