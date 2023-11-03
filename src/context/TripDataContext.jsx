
import React, { createContext, useContext, useState } from "react";


export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = (props) => {
    const [appState, setAppState] = useState({
        destination: '',
        start_date: '',
        end_date: '',
        trip_status_type: '',
        activities: [],
        transportation_mode: ''

    });



    return (
        <AppContext.Provider value={{
            appState, setAppState,
        }} >
            {props.children}
        </AppContext.Provider>
    );

}
