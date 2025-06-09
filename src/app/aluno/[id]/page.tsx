type studentPageProps = {
    id : number
}

export default function studentpage({id} : studentPageProps){
    return(
        <div>
            Esse é a pagina do aluno {id}
        </div>
    )
}