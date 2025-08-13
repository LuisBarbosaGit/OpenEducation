import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { useContext, useState } from "react";
import { FlagMenuContext } from "./DropDownHomeContext";

export type DropDownHomeProps = {
    options : string[],
    icon: React.ReactNode[];
}

export const DropDownHome = ({options, icon} : DropDownHomeProps) =>{
    const [itemChecked, setItemChecked] =  useState<number | null>(null);
    const [itemIndex, setItemIndex] = useState<number>(0);
    const {setFlagItem} = useContext(FlagMenuContext)

    async function handleItemState(index : number) {
        setItemChecked((prevState) => {
            console.log(index)
            console.log(itemIndex)
            if(prevState == index){
                return null
            }else{
              return index;  
            }
        })
        setFlagItem({itemIndex: itemChecked, tag : itemChecked ? options[itemIndex] : null});
    }

    return(
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {itemChecked !== null ? 
                    <Button variant={'ghost'} className="bg-stone-700 shadow-md shadow-stone-500 border-2 border-stone-600 border-none text-stone-200 font-onest">{icon[itemChecked]}{options[itemChecked]}</Button>
                    :
                    <Button variant={'default'} className="bg-stone-700 border-2 border-stone-600 font-onest shadow-none"><PlusIcon /></Button>
                }
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-stone-800 shadow-md shadow-stone-600 border-none p-2 text-stone-100">
                    <DropdownMenuLabel className="text-center">Opções</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-stone-500"/>
                    {options.map((option, index) => (
                        <div>
                            <DropdownMenuItem onClick={() => {handleItemState(itemIndex); setItemIndex(index)}} key={index} className="flex items-center gap-2 py-3 font-onest cursor-pointer group focus:bg-stone-600 focus:text-stone-300">{icon[index]}{option}</DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-stone-500"/>
                        </div>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}