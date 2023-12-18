import React from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const Context = React.createContext();

export function AuthContext({ children }) {
  const auth = getAuth();
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)
      if (currentUser) setUser(currentUser)
      else { setUser(null) }
    });
    return () => {
      if (unsubscribe) unsubscribe();
    }
  }, [])

  const values = {
    user: user,
    setUser: setUser
  }

  return <Context.Provider value={values}>
    {!loading &&
      children
    }
  </Context.Provider>
}