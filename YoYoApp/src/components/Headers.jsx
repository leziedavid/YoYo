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

    <nav className="flexBetween max-container padding-container relative z-30 py-5">
    <Link href="/">
      <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
    </Link>

    <ul className="hidden h-full gap-12 lg:flex">
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          {link.label}
        </Link>
      ))}
    </ul>

    <div className="lg:flexCenter hidden">
      <Button 
        type="button"
        title="Login"
        icon="/user.svg"
        variant="btn_dark_green"
      />
    </div>

    <Image 
      src="menu.svg"
      alt="menu"
      width={32}
      height={32}
      className="inline-block cursor-pointer lg:hidden"
    />
  </nav>

    // <header className="header-absolute sticky-header">
    //     <div className="container container-custom-one">
    //       <div className="nav-container d-flex align-items-center justify-content-between">
        
    //         <div className="nav-menu d-lg-flex align-items-center">

        
    //           <div className="navbar-close">
    //             <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
    //           </div>

              
    //           <div className="toggle">
    //             <a href="#" id="offCanvasBtn"><i className="fal fa-bars"></i></a>
    //           </div>
          
    //           <div className="menu-items">
    //             <ul>
    //               <li>
    //                 <a href="index.html">Home</a>
    //                 <ul className="submenu">
    //                   <li><a href="index.html" className="active">Home One</a></li>
    //                   <li><a href="index-2.html">Home Two</a></li>
    //                   <li><a href="index-3.html">Home Three</a></li>
    //                 </ul>
    //               </li>
    //               <li>
    //                 <a href="apartment-grid.html">Apartments</a>
    //                 <ul className="submenu">
    //                   <li><a href="apartment-details.html">Apartments Details</a></li>
    //                   <li><a href="trending.html">Apartments List 2</a></li>
    //                   <li><a href="apartment-grid.html">Apartments Grid</a></li>
    //                   <li><a href="apartment-list.html">Apartments List</a></li>
    //                 </ul>
    //               </li>
    //               <li>
    //                 <a href="news.html">News</a>
    //                 <ul className="submenu">
    //                   <li><a href="news-details.html">News Details</a></li>
    //                 </ul>
    //               </li>
    //               <li><a href="#">Pages</a>
    //                               <ul className="submenu">
    //                                         <li>
    //                                             <a href="places.html">Places Near By</a>
    //                                             <ul className="submenu">
    //                                                 <li><a href="places-details.html">Places Details</a></li>
    //                                             </ul>
    //                                         </li>
    //                                         <li><a href="classNameification.html">classNameification</a></li>
    //                                         <li><a href="gallery.html">Our Gallery</a></li>
    //                                         <li><a href="contact.html">Contact Us</a></li>
    //                                         <li><a href="about.html">About Us</a></li>
    //                                         <li><a href="broker.html">Brokers</a></li>                                        
                                            
    //                                     </ul>
    //               </li>
    //             </ul>
    //           </div>

      
    //           <div className="nav-pushed-item"></div>
    //         </div>
            
    //         <div className="site-logo">

    //           <a href="index.html">

    //             <img src="./Public/assets/img/logo.png" alt="Logo" />
                  
    //             </a>

    //         </div>

    //         <div className="nav-push-item">
              
    //           <div className="header-info d-lg-flex align-items-center">
    //             <div className="item">
    //               <i className="fal fa-phone"></i>
    //               <span>Phone Number</span>
    //               <a href="tel:+90898787709">
    //                 <h5 className="title">+908 987 877 09</h5>
    //               </a>
    //             </div>
    //             <div className="item">
    //               <i className="fal fa-envelope"></i>
    //               <span>Email Address</span>
    //               <a href="mailto:info@webmail.com">
    //                 <h5 className="title">info@webmail.com</h5>
    //               </a>
    //             </div>
    //           </div>
    //         </div>

            
    //         <div className="navbar-toggler">
    //           <span></span><span></span><span></span>
    //         </div>
    //       </div>
    //     </div>
    // </header>

    
//     <header id="page-topbar">
//     <div className="navbar-header">
//         <div className="d-flex">
          
//             <div className="navbar-brand-box">
//               <ul>
//                 <li>Login</li>
//               </ul>
//             </div>

//         </div>

//     </div>
// </header>

    );
}
