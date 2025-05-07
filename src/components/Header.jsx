import '../App.css'
import { menuItems } from '../data/landing'
const Header = () => {
    return (
        <header>
            <div className='prueba'>
                <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1613495438818-408JDVSTB7NWSHVC20M7/logo.png?format=1500w" alt="logopixar" className="logoPixar" />
            </div>
            <nav className='header-nav'>
                <ul className='header-nav-ul'>
                    {menuItems.map((items, idx) => (
                        <li key={idx}>{items}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
export default Header