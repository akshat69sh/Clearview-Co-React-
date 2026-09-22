import { MoveRight } from "lucide-react"

function Explorebutton() {
    return (
         <button className="flex w-fit items-center text-xl font-sans gap-8 border-b hover:cursor-pointer hover:bg-accent-orange hover:border  p-2 ">
            Explore New Collection <MoveRight/> 
         </button>           
    )
}

export default Explorebutton
