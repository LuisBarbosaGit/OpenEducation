import axios from "axios";
import { LoaderCircleIcon, SendHorizonalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react"
import type { responseModel } from "./models/response-model";
import { responseSchema } from "./schema/response-schema";
import z from "zod";


export const App = () => {
   
  const question = useRef<HTMLTextAreaElement>(null);
  const [response, setResponse] = useState<responseModel | null>();
  const [error, setError] = useState<string[]>();
  const prevQuestion = useRef('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const redimensionTextArea = () => {
    if (question.current) {
      question.current.style.height = "auto";
      question.current.style.height = `${question.current.scrollHeight}px`;
    }
  }

  async function handleStopClick() {
    
  }

  async function handleFormSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setError(undefined);
    setResponse(null);
    const validationResponse = responseSchema.safeParse({message : question.current?.value});
    if (!validationResponse.success){
      const error = z.flattenError(validationResponse.error);
      setError(error.fieldErrors.message);
    } else {
      try {
        setIsLoading(true);

        const data = await axios.post('http://localhost:3000/query',{
          query : question.current?.value
        }
        );
        console.log(data.data)
        const messageData = data.data;
        setResponse(messageData.response);
        console.log(response);
        setIsLoading(false);

        //Save question before reset textArea
        if (question.current) {
          prevQuestion.current = question.current.value;
          question.current.value = '';
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    redimensionTextArea();
  }, [question.current])

  return (
    <>
    <div className="absolute top-5 right-10">
      <a href="" className="text-stone-100 font-onest font-bold">H<span className="text-blue-400">PRO</span></a>
    </div>
      <div className="flex h-screen items-center flex-col justify-center bg-stone-800 gap-4">
        {response ? 
        <div className="flex items-center justify-center transition-all duration-100 ease-in gap-5 text-stone-100 flex-col font-roboto max-h-full w-[50%] p-2">
          <div className="flex justify-baseline w-full items-center">
            <p className="bg-stone-600 text-stone-200 rounded-2xl p-[0.7rem]">{prevQuestion.current}</p> 
          </div>
          {response.message ?
            <div className="flex justify-end w-full items-center">
              <p className="bg-stone-700 text-red-500  font-onest rounded-2xl p-[0.7rem]">Não foi possível processar sua resposta :(</p> 
            </div>  
          :
            <p>{response.response}</p>
          }
        </div> 
        : 
        <div className="flex items-center flex-col justify-center gap-2 m-2">
          <h1 className="text-7xl text-stone-200 font-bold font-onest m-2">Seja bem vindo!</h1>
          <p className="text-xl text-gray-300 font-onest">Insira sua pergunta para começar</p> 
        </div>}
        <form action="submit" id="formMain" onSubmit={(e) => {handleFormSubmit(e)}} className="flex flex-col">
          <div>
            <label about="query" className="flex border-2 border-stone-500  bg-stone-600 rounded-3xl items-center max-h-60 min-h-6 overflow-y-auto shadow-md shadow-stone-600  ">
              <textarea
                className="focus:outline-none focus:text-white transition-all focus:placeholder:text-stone-800 placeholder:text-stone-300 duration-100 ease-in bg-stone-600 text-center font-roboto w-[45rem] text-stone-300  overflow-hidden resize-none  leading-tight text-lg py-3"
                placeholder="Digite sua pergunta"
                ref={question}
                rows={1}
                id="query"
              />
              <div className="flex h-full items-end p-1">
                {!!!isLoading ?
                  <button
                    className=" bg-stone-700 text-stone-400 p-[0.60rem] rounded-2xl ml-2 cursor-pointer shadow-stone-600"
                    type="submit"
                  >
                    <SendHorizonalIcon size={27}/>
                  </button>
                  :
                  <button
                    className=" bg-stone-700 text-stone-400 p-[0.60rem] rounded-2xl ml-2 cursor-pointer shadow-stone-600 "
                    onClick={handleStopClick}
                  >
                    <LoaderCircleIcon className="animate-spin text-white" size={28}></LoaderCircleIcon>
                  </button>
                }
              </div>
            </label>
          </div>
            {error && <p className="text-red-600 font-onest text-sm m-2 text-center">{error}</p>}
        </form>
      </div>
    </>
  )
}


