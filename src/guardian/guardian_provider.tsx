import React, { createContext } from "react";


export const GuardianContext = createContext({
    account: null, 
    setAccount: null
  });

export function useGuardianProvider() {
    return React.useContext(GuardianContext);
}
  
export function GuardianProvider({children}) {
    const [account, setAccount] = React.useState(null);

    return (
    <GuardianContext.Provider value={{ account, setAccount}}>
        {children}
    </GuardianContext.Provider>
    );
}
