import React from "react";
import style from "./Modal.module.css"

const Modal = ({children, openModal,cambiarEstado,titulo})=> {
      return (
        <>
      {openModal &&
          <div className={style.Overlay}>
                <div className={style.ContenedorModal}>
                    <div className={style.EncabezadoModal}>
                          <h3>{titulo}</h3>
                    </div>
                    <div className={style.BotonCerrar} onClick={()=> cambiarEstado(false)}>
                         X
                    </div> 

                    {children} 

                </div>
                  
          </div>  
}
        </>
      )
   
}


export default Modal;

