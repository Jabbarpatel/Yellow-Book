import { useQuery } from "react-query";
import api from "./api";

export const useGetAppVersions = () => {
  return useQuery({
    queryKey: "versions",
    queryFn: () => api.get("settings/versions").then((res) => res.data),
    refetchOnWindowFocus: false,
  });
};
