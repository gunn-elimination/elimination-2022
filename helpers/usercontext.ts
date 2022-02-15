import { createContext } from "react";
import { User } from "./types";
export const UserContext = createContext(null as null | User)
export const UserContextProvider = UserContext.Provider;