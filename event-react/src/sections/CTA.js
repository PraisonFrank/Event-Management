import React, {useState} from 'react'
import Modal from '../components/Modal'

const CTA = () => {
    const [open, setOpen] = useState(false)
    return (
        <section className="cta section">
        <h3>Lorem ipsum dolor sit.</h3>
        <div className="btn btnPrimary" 
        onClick={e=>setOpen(!open)}>
            Schedule A Call
        </div>
        <Modal open={open} setOpen={setOpen}/>
    </section>
    )
}

export default CTA
