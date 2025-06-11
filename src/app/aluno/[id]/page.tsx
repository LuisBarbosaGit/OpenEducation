import { ArrowUpLeft } from 'lucide-react';

type studentPageProps = {
    id : number
}

export default function studentpage({id} : studentPageProps){
    return(
        <div>
           <nav className="flex justify-between m-3  font-Roboto" >
            <div className="flex items-center gap-1">
                <img src="/logo.webp" alt="" className="w-15 h-15" />
                <h1 className="text-2xl font-medium">EduCHat</h1>
            </div>
            <div>
                <div className="flex items-center">
                    <h2>Menu</h2>
                    <img src="/user.webp" alt="logo" className="w-15 h-15"/>
                </div>
            </div>
           </nav>
           <main className="bg-gray-50 flexfont-Roboto ">
                <div className=" m-5 flex gap-1 w-2/3 flex-col flex-wrap">
                    <h1 className="font-semibold text-3xl text-gray-900 flex">Bem vindo de Volta! Luis</h1>
                    <h2 className="text-gray-600 flex">Oque vamos aprender hoje ?</h2>
                </div>
                {/* Separar em componente */}
                <div className="m-5 w-2/5 max-w-2/4 rounded-2xl h-60 bg-white border-2 border-gray-200">
                    <h2 className="bg-blue-200 text-blue-900 font-semibold m-5 w-2/5 rounded h-7 text-center float-right">Novo Conteudo</h2>
                    <img src="/matematica.webp" alt=""  className="w-20 h-20 m-2"/>
                    <div className="flex flex-col">
                        <h2 className="text-2xl ml-2">Matematica</h2>
                        <h3 className="ml-2">Algebra, calculo, geometria e mais</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="mt-5 font-semibold">Abrir Chat</h3>
                        <button className='mt-5'><ArrowUpLeft /></button>
                    </div>
                </div>
                {/* Separar em componente */}
                <div className="m-5 w-2/5 max-w-2/4 rounded-2xl h-60 bg-white border-2 border-gray-200">
                    <h2 className="bg-blue-200 text-blue-900 font-semibold m-5 w-2/5 rounded h-7 text-center float-right">Novo Conteudo</h2>
                    <img src="/matematica.webp" alt=""  className="w-20 h-20 m-2"/>
                    <div className="flex flex-col">
                        <h2 className="text-2xl ml-2">Português</h2>
                        <h3 className="ml-2">Literatura, gramática aprendizado de outras linguas</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <h3 className="mt-5 font-semibold">Abrir Chat</h3>
                        <button className='mt-5'><ArrowUpLeft /></button>
                    </div>
                </div>
           </main>
        </div>
    )
}