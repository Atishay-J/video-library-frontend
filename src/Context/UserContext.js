import { Switch } from "@material-ui/core";
import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useVideo } from "./VideoContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initState = {
    isUserLoggedIn: false,
    subscribedChannels: [],
    showLoginModal: false,
  };

  const userReducer = (state, action) => {
    console.log("Reducer askeeeeeeeddd");

    console.log("Action", action);

    switch (action.type) {
      case "SUBSCRIBE_TOGGLE": {
        if (state.isUserLoggedIn) {
          return {
            ...state,
            subscribedChannels: [
              ...state.subscribedChannels,
              action.payload.channelId,
            ],
          };
        }
        return { ...state, showLoginModal: true };
      }

      case "HIDE_LOGIN_MODAL":
        return { ...state, showLoginModal: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(userReducer, initState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};