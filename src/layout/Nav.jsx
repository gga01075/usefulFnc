import classes from "../styles/layout/Nav.module.css"
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><Link to='/components'>Components</Link></li>
                <li><Link to='/functions'>Functions</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;