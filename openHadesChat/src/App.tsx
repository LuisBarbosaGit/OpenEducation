import { SendHorizonalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react"

export const App = () => {
  const question = useRef<HTMLTextAreaElement>(null);
  const [ textValue, setTextValue ] = useState("");

  const redimensionTextArea = () => {
    if (question.current) {
      question.current.style.height = "auto";
      question.current.style.height = `${question.current.scrollHeight}px`;
    }
  }


  useEffect(() => {
    redimensionTextArea();
  }, [textValue])

  return (
    <>
    <div className="absolute top-5 right-10">
      <a href="" className="text-stone-100 font-onest font-bold">H<span className="text-blue-400">PRO</span></a>
    </div>
      <div className="flex h-screen items-center flex-col justify-center bg-stone-800 gap-4">
        <h1 className="text-7xl text-stone-200 font-bold font-onest m-2">Seja bem vindo!</h1>
        <p className="text-xl text-gray-300 font-onest">Insira sua pergunta para começar</p>
        <div className="flex items-center max-h-60 min-h-15 p-2 overflow-y-auto focus:ring-2 focus:outline-none  ">
          <textarea
            onChange={() => setTextValue(question.current?.value || "")}
            className="focus:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:text-white transition-all focus:placeholder:text-stone-600 placeholder:text-stone-700 duration-100 ease-in bg-stone-300 border-gay-900 text-center rounded-2xl px-20 shadow-md shadow-stone-600 overflow-hidden resize-none  leading-tight text-lg py-3"
            placeholder="Digite sua pergunta"
            ref={question}
            rows={1}
          />
          <button
            className="bg-stone-200 text-stone-800 p-[0.26rem] rounded-md ml-2 cursor-pointer shadow-stone-600"
            onClick={() => {
              console.log(question.current);
            }}
          >
            <SendHorizonalIcon size={27}/>
          </button>
        </div>
      </div>
    </>
  )
}


