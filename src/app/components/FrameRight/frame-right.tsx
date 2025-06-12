import { Input } from "@/components/ui/input";

export const FrameRight = ({}) => {
  return (
    <div className=" flex w-full overflow-hidden flex-col items-center justify-center pb-70 gap-10">
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl font-bold mb-4">
          Bem-vindo ao OpenEducational
        </h1>
        <p className="text-gray-600 w-2xl text-center">
          faça perguntas sobre qualquer matéria e receba respostas precisas
          baseadas nos materiais da sua escola.
        </p>
      </div>
      <form
        className="flex items-center justify-center w-3/5"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("teste");
        }}
      >
        <Input className="w-full h-20" type="text" />
      </form>
    </div>
  );
};
