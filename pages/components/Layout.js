import styles from './layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <nav className="navbar">
                <ul className="navbarItems">
                    <li className='navitem'>Home</li>
                    <li className='navitem'>Projects</li>
                    <li className='navitem'>Contact</li>
                </ul>
            </nav>
            <div className="burger">
                <div id='allBurger'>
                    <div className='burgerLine'></div>
                    <div className='burgerLine'></div>
                    <div className='burgerLine'></div>
                </div>
                <div className='burgerMenu'>
                    <div className='menu'>
                        
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Layout;
