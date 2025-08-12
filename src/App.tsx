
import { LoaderCircleIcon, SendHorizonalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react"
import type { responseModel } from "./models/response-model";
import { responseSchema } from "./schema/response-schema";
import z from "zod";


export const App = () => {
   
  const question = useRef<HTMLTextAreaElement>(null);
  const [response, setResponse] = useState<responseModel | null>();
  const [dataStream, setDataStream] = useState('');
  const [error, setError] = useState<string>();
  const prevQuestion = useRef('');
  const [readyAnimated , setReadAnimated] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const redimensionTextArea = () => {
    if (question.current) {
      question.current.style.height = "auto";
      question.current.style.height = `${question.current.scrollHeight}px`;
      console.log(question.current.style.height)
    }
  }

  async function resetStates() {
    setError(undefined);
    setResponse(null);
    setDataStream('');
    setReadAnimated(false);
  }

  async function handleFormSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    resetStates();
    //Zod Validation
    const validationResponse = responseSchema.safeParse({message : question.current?.value});
    if (!validationResponse.success){
      const error = z.flattenError(validationResponse.error);
      setError(error.fieldErrors.message?.toString());
    } else {

      try {
        setIsLoading(true);
        //WebStream
        const streamResponse = await fetch('http://localhost:3000/query', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({query: question.current?.value})
        })
        const reader = streamResponse.body?.getReader();
        const decoder = new TextDecoder();
        if (!reader){
          return
        }
        while (true) {
          const {done, value} = await reader.read();
          if(done){
            setReadAnimated(true)
            break;
          }
          const chunk = decoder.decode(value, {stream : true});
          const objChunk = JSON.parse(chunk)
          setDataStream(objChunk.message);
        }
      } catch (error) {
        console.log(error)
        setError('Erro durante o processamento da resposta :(')
      }finally {
        //Save question before reset textArea
        if (question.current) {
          prevQuestion.current = question.current.value;
          question.current.value = '';
        }
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    //Typing Animation
    let animatedMessage ='';
    let index = 0;
    if (readyAnimated && dataStream) {
      setResponse({ response: '', code: '', message : '' });

      const intervalId = setInterval(() => {
        animatedMessage += dataStream[index];
        setResponse(prevState => ({
          ...prevState,
          response: animatedMessage
        }));
        index++
        if (index === dataStream.length) {
          clearInterval(intervalId);
          return 
        }
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [readyAnimated]);


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
          {readyAnimated && dataStream ?
            <div className="flex justify-end w-full items-center">
              <p className=" max-w-[80%] font-onest flex text-justify flex-wrap bg-stone-700 rounded-xl p-2">{response.response}</p>  
            </div>
          :
            <div className="flex justify-end w-full items-center">
              <p className="bg-stone-700 text-red-500  font-onest rounded-2xl p-[0.7rem]">Não foi possível processar sua resposta :(</p> 
            </div> 
          }
        </div> 
        : 
        <div className="flex items-center flex-col justify-center gap-2 m-2">
          <h1 className="text-7xl text-stone-200 font-bold font-onest m-2">Seja bem <span className="text-blue-700 font-caprasimo">Vindo!</span></h1>
          <p className="text-xl text-gray-300 font-onest">Insira sua pergunta para começar</p> 
        </div>}
        <form action="submit" id="formMain" onSubmit={(e) => {handleFormSubmit(e)}} className="flex flex-col">
          <div className="max-h-60 overflow-y-auto">
            <label about="query" className="flex border-3 border-stone-400  bg-stone-600 rounded-3xl items-center max-h-60 min-h-6 overflow-y-auto  ">
              <textarea
                className="focus:outline-none focus:text-white transition-all focus:placeholder:text-stone-800 placeholder:text-stone-300 duration-100 ease-in bg-stone-600 text-center font-roboto w-[45rem] text-stone-300  overflow-hidden resize-none  leading-tight text-lg py-3"
                placeholder="Digite sua pergunta"
                ref={question}
                rows={1}
                id="query"
                onInput={redimensionTextArea}
              />
              <div className="flex h-full items-end p-1">
                {!!!isLoading ?
                  <button
                    className=" bg-stone-700 text-stone-300 p-[0.60rem] rounded-2xl ml-2 cursor-pointer shadow-stone-400"
                    type="submit"
                  >
                    <SendHorizonalIcon size={27}/>
                  </button>
                  :
                  <button
                    className=" bg-stone-700 text-stone-400 p-[0.60rem] rounded-2xl ml-2 cursor-pointer shadow-stone-600 "
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


