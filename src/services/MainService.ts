
export class MainServices {
    async responseService(query : string): Promise<ReadableStream<Uint8Array<ArrayBufferLike>> | null> {
        //WebStream
        try {
            const streamResponse = await fetch('http://localhost:3000/query', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({query : query})
            })
            return streamResponse.body;
        } catch (error) {
           throw new Error(error as string); 
        }
    }
}