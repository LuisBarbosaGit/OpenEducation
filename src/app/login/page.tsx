import FormLogin from "../components/FormLogin/FormLogin";


export default function Login(){
    return (
      <>
        <div className="h-[10vh] flex items-center">
          <img src="/logo.webp" alt="Logo" className="w-20 h-20" />
        </div>
        <div className="flex items-center justify-center h-[90vh] ">
          <FormLogin/>
        </div>
      </>
        
    )
}