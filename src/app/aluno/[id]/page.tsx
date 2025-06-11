import SubjectCard from '@/app/components/SubjectCard/SubjectCard';
import { ArrowUpLeft, HistoryIcon } from 'lucide-react';

type studentPageProps = {
    id : number
}

export default function studentpage({id} : studentPageProps){
    return(
        <div>
           <nav className="flex justify-between m-3  font-Roboto" >
            <div className="flex items-center gap-1">
                <img src="/logo.webp" alt="" className="w-15 h-15" />
                <h1 className="text-2xl font-medium">EduChat</h1>
            </div>
            <div>
                <div className="flex items-center">
                    <h2>Menu</h2>
                    <img src="/user.webp" alt="logo" className="w-15 h-15"/>
                </div>
            </div>
           </nav>
           <main className="bg-gray-50 flexfont-Roboto ">
                <div className=" ml-8 flex gap-1 w-2/3 flex-col flex-wrap">
                    <h1 className="font-semibold text-3xl text-gray-900 flex">Bem vindo de Volta! Luis</h1>
                    <h2 className="text-gray-600 flex">Oque vamos aprender hoje ?</h2>
                    
                </div>
                <div className='flex justify-between w-2/4 items-center'>
                    <h3 className="font-semibold text-lg text-gray-900 flex ml-8 mt-5 ">Minhas disciplinas</h3>
                    <button className='hover:scale-105 transition-transform duration-100 cursor-pointer w-15 h-7 mt-5 bg-white text-xs text-black border-2 border-gray-400 rounded-md'>Todos</button>
                </div>
                
                {/* Separar em componente */}
                <div className='flex w-2/3 flex-wrap '>
                    <SubjectCard tittle="Matematica" description="Algebra, calculo, geometria e mais">
                    <img src="/matematica.webp" alt=""  className="w-15 h-15 m-2 rounded-xs"/>
                    </SubjectCard>
                    {/* Separar em componente */}
                    <SubjectCard tittle="Português" description="Literatura e grámatica">
                        <img src="/matematica.webp" alt=""  className="w-15 h-15  m-2 rounded-xs"/>
                    </SubjectCard>
                    <SubjectCard tittle="Historia" description="Idade Media, primeira e segunda guerra e afins">
                        <img src="/matematica.webp" alt=""  className="w-15 h-15  m-2 rounded-xs"/>
                    </SubjectCard>
                    <SubjectCard tittle="Fisíca" description="Vetorial, massa e força">
                        <img src="/matematica.webp" alt=""  className="w-15 h-15  m-2 rounded-xs"/>
                    </SubjectCard>
                </div>

                <div>
                    <div className='flex justify-between w-2/3 items-center flex-wrap'>
                        <h1 className="font-semibold text-xl text-gray-900 flex ml-8 mt-5 ">Conversas Recentes</h1>
                        <button className='hover:scale-105 transition-transform duration-100 cursor-pointer w-15 h-7 mt-5 text-xs text-black  rounded-md flex items-center gap-0.5'> <HistoryIcon/>Historico </button>
                        <div className='w-full border-2 border-gray-300 h-30 rounded-xl ml-5 mt-2 p-2 bg-white flex justify-between'>
                            <div>
                                <h2 className='text-gray-800 font-Roboto font-semibold'>Equação de 2ºGrau</h2>
                                <h3 className='text-gray-700 text-xs'>2 horas atrás</h3>
                            </div>
                            <div className='h-full'>
                                <button className='w-15 h-8 mt-17 hover:scale-105 transition-transform duration-100 cursor-pointer rounded-xl border-2 border-gray-500 text-black text-xs'>Continuar</button>
                            </div>
                        </div>
                        <div className='w-full border-2 border-gray-300 h-30 rounded-xl ml-5 mt-2 p-2 bg-white flex justify-between'>
                            <div>
                                <h2 className='text-gray-800 font-Roboto font-semibold'>Segunda guerra mundial</h2>
                                <h3 className='text-gray-700 text-xs'>8 horas atrás</h3>
                            </div>
                            <div className='h-full'>
                                <button className='w-15 h-8 mt-17 hover:scale-105 transition-transform duration-100 cursor-pointer rounded-xl border-2 border-gray-500 text-black text-xs'>Continuar</button>
                            </div>
                        </div>
                        <div className='w-full border-2 border-gray-300 h-30 rounded-xl ml-5 mt-2 p-2 bg-white flex justify-between'>
                            <div>
                                <h2 className='text-gray-800 font-Roboto font-semibold'>Globalização</h2>
                                <h3 className='text-gray-700 text-xs'>A uma semana</h3>
                            </div>
                            <div className='h-full'>
                                <button className='w-15 h-8 mt-17 hover:scale-105 transition-transform duration-100 cursor-pointer rounded-xl border-2 border-gray-500 text-black text-xs'>Continuar</button>
                            </div>
                        </div>
                    </div>

                </div>
                
           </main>
        </div>
    )
}