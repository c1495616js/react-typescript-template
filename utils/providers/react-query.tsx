import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const generateQueryClient = () => new QueryClient();

const Provider: FC = ({ children }) => {
  const queryClient = generateQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
