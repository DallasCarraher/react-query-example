import React from "react";
import { oneOfType, arrayOf, node } from "prop-types";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function Decorator({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

Decorator.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};
