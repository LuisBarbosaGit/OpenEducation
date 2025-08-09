import {z} from 'zod'
export const responseSchema = z.object({
    message : z.string().min(2, "Insira uma mensagem valida")
})