
export class MainServices {
    async responseService(query : string): Promise<any> {
        //WebStream
        try {
            const streamResponse = await fetch('http://localhost:3000/query', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({query : query})
            })
            const reader = streamResponse.body?.getReader();
            const decoder = new TextDecoder();
            if (!reader){
                return
            }
            let response = '';
            while (true) {
                const {done, value} = await reader.read();
                if(done){
                    break;
                }
                const chunk = decoder.decode(value, {stream : true});
                const objChunk = JSON.parse(chunk)
                return objChunk.message
            }
        } catch (error) {
           throw new Error(error as string); 
        }
    }
}