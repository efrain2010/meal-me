import { useLocation } from "react-router";

export const useIsCrudPath = () => {
  const { pathname } = useLocation();
  return pathname.includes("crud");
};
