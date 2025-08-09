import { createContext, useState } from "react"

export interface SideBar{
    sideIsOpen : boolean,
    setSideIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBarContext = createContext<SideBar>({
    sideIsOpen : false,
    setSideIsOpen: () => {},
});

export const SideBarProvider = ({children}: {children : React.ReactNode}) => {
    const [sideIsOpen, setSideIsOpen] = useState(false);
    return(
        <SideBarContext.Provider value={{sideIsOpen, setSideIsOpen}}>
            {children}
        </SideBarContext.Provider>
    )
}