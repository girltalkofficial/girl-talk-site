import React, { ReactNode } from "react";

type modaltypes={
    isvisible:boolean;
    onClose:any;
    children?:React.ReactNode;
}

const Modal: React.FC<modaltypes> = ({isvisible, onClose, children}) =>{
    if(!isvisible) return null;

    React.useEffect(() => {
        const closeOnEscapePressed = (e: KeyboardEvent) => {
          if (e.key === "Escape") {
            onClose();
          }
        };
        window.addEventListener("keydown", closeOnEscapePressed);
        return () =>
          window.removeEventListener("keydown", closeOnEscapePressed);
      }, []);

    return(
        <div className="fixed inset-0 bg-pink-400 bg-opacity-25 backdrop-blur-sm flex justify-center items-center" >
            <div className ="w-[500px] flex flex-col">
                <button className = "text-white text-xl place-self-end" onClick={()=> onClose()}>X</button>
                <div className="bg-white p-2">
                    {children}
                </div>
            </div>
            

        </div>
    )
}

export default Modal;
