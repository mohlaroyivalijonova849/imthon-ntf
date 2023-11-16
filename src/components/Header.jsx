import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../helpers/db";

function Header() {
  const [user, setUser] = useState(null);
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="bg-[#021431] py-2 text-neutral-content">
      <div className="container justify-center flex sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          {user ? (
            // If user is logged in, display a greeting with their name
            <>
              <span className="text-xs text-white capitalize sm:text-sm">
                Hello, {user.displayName || "User"}
              </span>
              <Button
                className="text-xs sm:text-sm"
                onClick={handleLogout}
                variant="outlined"
              >
                Log Out
              </Button>
            </>
          ) : (
            // If user is not logged in, display the sign-in and create account buttons
            <>
              <Button
                component={Link}
                to="/login"
                variant="text"
                className="text-xs sm:text-sm"
              >
                Sign in / Guest
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant="text"
                className="text-xs sm:text-sm"
              >
                Create Account
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
