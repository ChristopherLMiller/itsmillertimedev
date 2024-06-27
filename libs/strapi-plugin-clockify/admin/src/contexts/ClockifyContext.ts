import { createContext } from "react";

const initialValue = {
  workspaces: [],
  isLoading: true,
};

const ClockifyContext = createContext(initialValue);
export default ClockifyContext;
