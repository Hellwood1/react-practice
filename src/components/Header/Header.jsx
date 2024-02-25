import logo from '/vite.svg'
import {useState} from 'react'

export default function Header() {

    const [now, setNow] = useState(new Date())
    
    setInterval(() => setNow(new Date()), 1000)
    return (
        <header><div className="header">
            <img src={logo} alt="Vite logotype" />
            <span>Поточний час: {now.toLocaleTimeString()}</span>
            </div>
         </header>
       
    )
}