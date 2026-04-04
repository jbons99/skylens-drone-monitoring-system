import { useEffect, useState } from "react";
import { getCachedSession, getSession } from "../Services/authService.js";

function useAuth() {
  const [user, setUser] = useState(() => getCachedSession());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const syncAuth = () => {
      const sessionUser = getSession();
      setUser(sessionUser);
    };

    window.addEventListener("storage", syncAuth);
    window.addEventListener("focus", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("focus", syncAuth);
    };
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: Boolean(user),
    refreshAuth: async () => {
      const sessionUser = getSession();
      setUser(sessionUser);
      return sessionUser;
    },
  };
}

export default useAuth;
