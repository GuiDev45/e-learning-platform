import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const queryOptions = {
  staleTime: 1000 * 60 * 60 * 24, // 1 dia,
  cacheTime: 1000 * 60 * 60 * 24, // 1 dia,
  refetchOnWindowFocus: false,
};
