import React from "react";
import { oneOfType, arrayOf, node } from "prop-types";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Decorator({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}

Decorator.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};
