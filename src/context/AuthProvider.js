import { createContext } from "react";
import useCart from "../hooks/useCart.js";
import useFirebase from "../hooks/useFirebase.js";
import useTours from "./../hooks/useTours";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
  const AllContexts = useFirebase();
  const { tours } = useTours();
  const { addToCart, bookedTours, remove, setBookedTours } = useCart();

  const data = {
    AllContexts,
    tours,
    addToCart,
    bookedTours,
    remove,
    setBookedTours
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

