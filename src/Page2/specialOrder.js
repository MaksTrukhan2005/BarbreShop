import React ,{useState, useEffect} from 'react'
import './specialOrder.css'

function SpecialOrder() {
    const [showCopyBook, setShowCopyBook] = useState(false);
   
    useEffect(() => {
        const order = document.getElementById('order')
        const toggleBook = () => {
            setShowCopyBook(!showCopyBook)
        }
        return() => {
            order.addEventListener('click', toggleBook)
        }
        
    }, [])
  return (
    <div className='main_border'>
        {<div className='border'>
            <h3>Wright down your special order</h3>
            <hr className='top_line' />
            <input />
            <hr className='button_line'/>
            <div className='botton_button'>
                <button >Send</button>
            </div>
        </div>}
    </div>
  )
}

export default SpecialOrder
