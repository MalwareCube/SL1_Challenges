//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <>
            <header>
                <nav class="navbar">
                        <div class="navbar_content">
                        <div class="navbar_logo"><FontAwesomeIcon icon={faMap} title="Ticket"/> TCM Security Ticket Portal</div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;