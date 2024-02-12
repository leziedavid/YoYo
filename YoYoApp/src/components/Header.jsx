import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (

    <header id="page-topbar">

      <div className="topnav">
        
        <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                <div className="collapse navbar-collapse" id="topnav-menu-content">
                    <ul className="navbar-nav">

                    <li className="nav-item ">
                        <Link to='/' className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button">
                            <i className="bx bx-tone me-2"></i>
                            <span key="t-ui-elements"> YOYO</span>  
                        </Link>
                    </li>

                    <li className="nav-item ">
                            <a className="nav-link dropdown-toggle arrow-none"  id="topnav-dashboard" role="button" >
                            <form className='text-center'  onSubmit={handleSubmit} >
                                <input  placeholder='Search...' value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}   type='texte' className="form-control form-control-st"/>
                             </form>
                         </a>
                    </li>

                    <li className="nav-item ">
                        <Link to='/' className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button">
                            <i className="bx bx-tone me-2"></i>
                            <span key="t-ui-elements"> LOGIN</span>  
                        </Link>
                    </li>

                    <li className="nav-item ">
                        <Link to='/about' className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button">
                            <span key="t-ui-elements"> About</span>  
                        </Link>
                    </li>

                    <li className="nav-item ">
                    <Link to='/profile' className="nav-link dropdown-toggle arrow-none">
                          {currentUser ? (<img  className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' /> ) : (
                           <strong> Connexion</strong>
                        )}
                      </Link>
                    </li>

   
                    </ul>
                </div>
            </nav>
        </div>
      </div>

  </header>


  );
}
