export default function FormLogin(){
    return(
        <div className=" w-96 flex-col h-75 gap-1 bg-gray-300 border-2 border-gray-700 rounded-2xl flex justify-center items-center ">
            
            <form action="" className="text-center flex flex-col gap-2 items-center">
                <label htmlFor="email" className="font-Roboto">E-mail</label>
                <input type="email" name="email" id="email" className="w-65 h-10 rounded-lg bg-white border-b-2  border-gray-800" />
                <label htmlFor="password" className="font-Roboto">Senha</label>
                <input type="password" name="password" id="password" className="w-65 h-10 rounded-lg bg-white border-b-2 border-gray-800" />
                <div className="flex items-center gap-2.5 m-5 justify-between">
                    <button type="submit" className=" font-Roboto w-25 h-10 rounded-lg bg-gray-900 text-amber-50 hover:scale-105 cursor-pointer">Login</button>
                    
                </div>
            </form>
        </div>
    )
}