import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export const queryClient = new QueryClient();

const ReactQueryProvider: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools />}
    {children}
  </QueryClientProvider>
);

export default ReactQueryProvider;
