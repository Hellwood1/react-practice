import logo from '/vite.svg'

export  function Header() {
    const now = new Date()
    return (
        <header>
            <img src={logo} alt="Vite logotype" />
             {/* <a href="">Test logo</a> */}
            <span>Поточний час: { now.toLocaleTimeString() }</span>
         </header>
       
    )
}