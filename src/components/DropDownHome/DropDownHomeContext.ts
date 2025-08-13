import { createContext, type Dispatch, type SetStateAction } from "react"

 
export type DropdownMenuType = {
    itemIndex : number | null,
    tag? : string | null
}

const initialFlag : DropdownMenuType = {
    itemIndex: null,
    tag: ''
}

export interface DropDownMenuContext {
    flagItem : DropdownMenuType,
    setFlagItem : Dispatch<SetStateAction<DropdownMenuType>>
}

export const initialFlagContext: DropDownMenuContext = {
    flagItem: initialFlag,
    setFlagItem: () => {}
}


export const FlagMenuContext = createContext<DropDownMenuContext>(initialFlagContext)

