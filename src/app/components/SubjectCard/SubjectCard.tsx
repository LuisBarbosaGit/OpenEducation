import { ArrowUpLeft } from "lucide-react";
import { Children } from "react";


type SubejectCardProps = {
    tittle : string,
    description : string,
    children : React.ReactNode;
}
export default function SubjectCard({tittle, description, children} : SubejectCardProps){
    return(
        <div className="hover:scale-105 hover:transition-all cursor-pointer duration-100">
            <div className="m-5 w-80 rounded-2xl h-60 bg-white border-2 border-gray-200">
                <h2 className="bg-blue-200 text-blue-900 font-semibold m-5 w-2/6 rounded h-5 text-center text-xs text-center float-right">Novo Conteúdo</h2>
            <div>
                {children}
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl ml-2">{tittle}</h2>
                <h3 className="ml-2 text-[16px] text-gray-600">{description}</h3>
            </div>
            <div className="flex justify-center mt-5">
                <h3 className="mt-5 font-semibold">Abrir Chat</h3>
                <button className='mt-5'><ArrowUpLeft /></button>
            </div>

        </div>
        
    </div>
    )
    
}