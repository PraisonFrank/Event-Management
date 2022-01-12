import React from 'react'

const Modal = ({open, setOpen}) => {
    return (
        <div className={open? "modal open" :"modal"}>
        <h3 className="heading">
            Lorem, ipsum dolor.
        </h3>
        <div className="container">
            <input type="text" placeholder="John Scott " />
            <input type="text" placeholder="+919999999999" />
            <div className="btn btnPrimary submit"
            onClick={e=>setOpen(false)}>
                Submit
            </div>
        </div>
    </div> 
    )
}

export default Modal
