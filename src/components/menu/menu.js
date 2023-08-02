import { useState } from 'react';
import './menu.scss';

function Menu(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button onClick={toggleMenu}>Menu</button>
            <aside>
                <nav className={isOpen ? 'open' : ''}>
                    <ul>
                        <li>
                            <a href="javacript:void(0)">Menu item 1</a>
                        </li>
                        <li>
                            <a href="javacript:void(0)">Menu item 2</a>
                        </li>
                        <li>
                            <a href="javacript:void(0)">Menu item 3</a>
                        </li>
                        <li>
                            <a href="javacript:void(0)">Menu item 4</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Menu;