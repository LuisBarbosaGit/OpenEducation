import { useState } from "react"
import { FlagMenuContext, type DropdownMenuType } from "../DropDownHome/DropDownHomeContext"

export const FlagMenuProvider = ({children} : { children :React.ReactNode}) => {
    const [flagItem, setFlagItem] = useState<DropdownMenuType>({itemIndex: null})
    return(
       <FlagMenuContext.Provider value={{flagItem, setFlagItem}}>
        {children}
       </FlagMenuContext.Provider>
    )
}