import { ChevronRightIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); 
  const title = searchParams.get("title"); 
  const description = searchParams.get("description"); 

  return (
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4"> 
        <div className="flex justify-center relative md-6 text-slate-100"> 
            <button onClick={()=> navigate(-1)} className="absolute left-0 top-0 bottom-0">
            <ChevronRightIcon />
            </button>
        </div>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes da tarefa
        </h1>
        <div className=" bg-slate-200 p-4 rounded-md">
            <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
            <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
    
  );
}

export default TaskPage;
