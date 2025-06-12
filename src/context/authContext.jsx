import React, {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useMemo,
} from "react";
import { toast } from "react-toastify";

const initialState = {
  loading: true,
  token: null,
  user: null,
  userType: null,
};

const AuthContext = createContext(initialState);

const reducer = (state, action) => {
  if (typeof window === "undefined") {
    return state;
  }

  switch (action.type) {
    case "GET-CREDENTIALS":
      const user = localStorage.getItem("USER") || "";
      return {
        ...state,
        token: localStorage.getItem("TOKEN"),
        userType: localStorage.getItem("USERTYPE"),
        user: user ? JSON.parse(user) : user,
        loading: false,
      };

    case "SET-USERTYPE":
      localStorage.setItem("USERTYPE", action.payload);
      return {
        ...state,
        userType: action.payload,
      };

    case "SET-TOKEN":
      localStorage.setItem("TOKEN", action.payload);
      return {
        ...state,
        token: action.payload,
      };

    case "SET-USER":
      localStorage.setItem("USER", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        token: null,
        userType: null,
        user: null,
        loading: false,
      };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET-CREDENTIALS" });
  }, []); // only run once on mount

  const contextValues = useMemo(() => {
    return {
      loading: state.loading,
      token: state.token,
      userType: state.userType,
      user: state.user,
      setUserType: (payload) => dispatch({ type: "SET-USERTYPE", payload }),
      getCredentials: () => dispatch({ type: "GET-CREDENTIALS" }),
      setToken: (payload) => dispatch({ type: "SET-TOKEN", payload }),
      setAuthUser: (payload) => dispatch({ type: "SET-USER", payload }),
      logout: () =>{ dispatch({ type: "LOGOUT" })
        toast.success("Logged out successfully!", {
              style: {
                backgroundColor: "#0C2D5B",
                color: "#fff",
                fontSize: "0.8rem",
                padding: "8px 12px",
              },
            });
    },
    };
  }, [state]);

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
