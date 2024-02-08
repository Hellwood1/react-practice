import logo from '/vite.svg'
import css from "./Header.module.css";

export default function Header() {
    const now = new Date()
    return (
        <header><div className="header">
            <img src={logo} alt="Vite logotype" />
            <span>Поточний час: {now.toLocaleTimeString()}</span>
            </div>
         </header>
       
    )
}