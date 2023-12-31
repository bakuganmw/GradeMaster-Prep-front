import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        email,
        username,
        password,
      });

      // If the request was successful
      localStorage.setItem("user", JSON.stringify(response.data));

      // Update the auth context
      dispatch({ type: "LOGIN", payload: response.data });
      navigate(`/`, { replace: true })
    } catch (error) {
      // If there was an error with the request
      setIsLoading(false);
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};