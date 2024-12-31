//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <nav class="navbar">
                        <div class="navbar_content">
                        <Link to={`/`} class="navbar_logo"><FontAwesomeIcon icon={faMap} title="Ticket"/>&nbsp;&nbsp;SOC Level 1 Tickets</Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;