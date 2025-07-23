import { useEffect, useState } from "react";
import { fetchUser } from "../helpers/helper";
import {
  setFavorites,
  setIsAuthenticated,
  setUser,
} from "../features/profile/profileSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function useAuth() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      async function authenticateUser() {
        try {
          const savedUser = JSON.parse(
            localStorage.getItem("sb-ywipdwyvwyrqejrfdahl-auth-token")
          );

          if (savedUser) {
            const userApi = await fetchUser(savedUser);
            dispatch(setUser(userApi));
            dispatch(setIsAuthenticated(true));

            const parsedFavorites =
              typeof userApi[0].favorites === "string"
                ? JSON.parse(userApi[0].favorites)
                : userApi[0].favorites || [];
            dispatch(setFavorites(parsedFavorites));
          }
        } catch (err) {
          toast.error("Authentication failed: " + err.message);
          dispatch(setIsAuthenticated(false));
        } finally {
          setIsLoading(false);
        }
      }
      authenticateUser();
    },
    [dispatch]
  );

  return { isLoading };
}

export default useAuth;
