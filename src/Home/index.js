import './styles.css';
import LogoDrive from './../images/logo.png';
import { FaSearch } from 'react-icons/fa';
import { FaSlidersH } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { FiHelpCircle } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';

function Home({ userLogin }) {
  return (
    <div className="main">
      <div className="header">
        <div className="header-logo">
          <img src={LogoDrive} alt="logoDrive" />
          <h3>Drive</h3>
        </div>
        <div className="header-pesquisa">
          <FaSearch className="FaSearch" />
          <input type="text" placeholder="Pesquisar no Drive" />
          <FaSlidersH className="FaSlidersH" />
        </div>
        <div className="header-user">
          <div className="header-option">
            <FiCheckCircle className="FiCheckCircle" />
            <FiHelpCircle className="FiHelpCircle" />
            <FiSettings className="FiSettings" />
          </div>
          <BsGrid3X3Gap className="BsGrid3X3Gap" />
          <img src={userLogin.profileImage} alt="profileImage" />
        </div>
      </div>

    </div>
  );
}

export default Home;
