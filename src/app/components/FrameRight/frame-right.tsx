import { api } from "@/clients/axios";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { avatarOptions } from "./options";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Textarea } from "@/components/ui/textarea";

const inputSchema = z.object({
  message: z.string().min(1, "A mensagem não pode estar vazia"),
});

type InputSchema = z.infer<typeof inputSchema>;

export const FrameRight = ({}) => {
  const [anwser, setAnswer] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string | null>(null);
  const [animatedAnswer, setAnimatedAnswer] = useState<string>("");
  const [currentAvatar, setCurrentAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!anwser) return;

    let index = 0;
    const timer = setInterval(() => {
      setAnimatedAnswer(anwser.slice(0, index));
      index++;

      if (index > anwser.length) {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [anwser]);

  const { register, handleSubmit } = useForm<InputSchema>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      message: "",
    },
  });

  const getRandomAvatar = () => {
    return avatarOptions[Math.floor(Math.random() * avatarOptions.length)];
  };

  const onSubmit = async (data: InputSchema) => {
    setLoading(true);

    try {
      if (loading) return;

      api
        .post("message", {
          message: data.message,
        })
        .then((response) => {
          setAnswer(response.data.answer);
          setLoading(false);
        });

      setPrompt(data.message);
      setCurrentAvatar(getRandomAvatar());
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      setAnswer(
        "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
      );
      setLoading(false);
    }
  };

  return (
    <div className=" flex w-full overflow-hidden flex-col items-center justify-center pb-70 gap-10">
      <Dialog open={!!anwser} onOpenChange={() => setAnswer(null)}>
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input className="w-full h-20" type="text" {...register("message")} />
        </form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={currentAvatar ?? ""} />
                <AvatarFallback>OE</AvatarFallback>
              </Avatar>
              <span>{prompt}</span>
            </DialogTitle>
            <DialogDescription>
              <Textarea
                className="h-60 w-full resize-none text-black"
                value={animatedAnswer || ""}
                readOnly
                rows={5}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
