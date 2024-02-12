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

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button" >
                                <i className="bx bx-home-circle me-2"></i><span key="t-dashboards">YOYO</span> <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-dashboard">

                                <a href="index.html" className="dropdown-item" key="t-default">Default</a>
                                <a href="dashboard-saas.html" className="dropdown-item" key="t-saas">Saas</a>
                                <a href="dashboard-crypto.html" className="dropdown-item" key="t-crypto">Crypto</a>
                                <a href="dashboard-blog.html" className="dropdown-item" key="t-blog">Blog</a>
                                <a href="dashboard-job.html" className="dropdown-item" key="t-Jobs">Jobs</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button"
                            >
                                <i className="bx bx-tone me-2"></i>
                                <span key="t-ui-elements"> UI Elements</span> 
                                <div className="arrow-down"></div>
                            </a>

                            <div className="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                                aria-labelledby="topnav-uielement">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div>
                                            <a href="ui-alerts.html" className="dropdown-item" key="t-alerts">Alerts</a>
                                            <a href="ui-buttons.html" className="dropdown-item" key="t-buttons">Buttons</a>
                                            <a href="ui-cards.html" className="dropdown-item" key="t-cards">Cards</a>
                                            <a href="ui-carousel.html" className="dropdown-item" key="t-carousel">Carousel</a>
                                            <a href="ui-dropdowns.html" className="dropdown-item" key="t-dropdowns">Dropdowns</a>
                                            <a href="ui-grid.html" className="dropdown-item" key="t-grid">Grid</a>
                                            <a href="ui-images.html" className="dropdown-item" key="t-images">Images</a>
                                            <a href="ui-lightbox.html" className="dropdown-item" key="t-lightbox">Lightbox</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <a href="ui-modals.html" className="dropdown-item" key="t-modals">Modals</a>
                                            <a href="ui-offcanvas.html" className="dropdown-item" key="t-offcanvas">Offcanvas</a>
                                            <a href="ui-rangeslider.html" className="dropdown-item" key="t-range-slider">Range Slider</a>
                                            <a href="ui-session-timeout.html" className="dropdown-item" key="t-session-timeout">Session Timeout</a>
                                            <a href="ui-progressbars.html" className="dropdown-item" key="t-progress-bars">Progress Bars</a>
                                            <a href="ui-placeholders.html" className="dropdown-item" key="t-placeholders">Placeholders</a>
                                            <a href="ui-sweet-alert.html" className="dropdown-item" key="t-sweet-alert">Sweet-Alert</a>
                                            <a href="ui-tabs-accordions.html" className="dropdown-item" key="t-tabs-accordions">Tabs & Accordions</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div>
                                            <a href="ui-typography.html" className="dropdown-item" key="t-typography">Typography</a>
                                            <a href="ui-toasts.html" className="dropdown-item" key="t-toasts">Toasts</a>
                                            <a href="ui-video.html" className="dropdown-item" key="t-video">Video</a>
                                            <a href="ui-general.html" className="dropdown-item" key="t-general">General</a>
                                            <a href="ui-colors.html" className="dropdown-item" key="t-colors">Colors</a>
                                            <a href="ui-rating.html" className="dropdown-item" key="t-rating">Rating</a>
                                            <a href="ui-notifications.html" className="dropdown-item" key="t-notifications">Notifications</a>
                                            <a href="ui-utilities.html" className="dropdown-item" key="t-utilities">Utilities</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components" role="button"
                            >
                                <i className="bx bx-collection me-2"></i><span key="t-components">Components</span> <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-components">
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-form"
                                        role="button">
                                        <span key="t-forms">Forms</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-form">
                                        <a href="form-elements.html" className="dropdown-item" key="t-form-elements">Form Elements</a>
                                        <a href="form-layouts.html" className="dropdown-item" key="t-form-layouts">Form Layouts</a>
                                        <a href="form-validation.html" className="dropdown-item" key="t-form-validation">Form Validation</a>
                                        <a href="form-advanced.html" className="dropdown-item" key="t-form-advanced">Form Advanced</a>
                                        <a href="form-editors.html" className="dropdown-item" key="t-form-editors">Form Editors</a>
                                        <a href="form-uploads.html" className="dropdown-item" key="t-form-upload">Form File Upload</a>
                                        <a href="form-xeditable.html" className="dropdown-item" key="t-form-xeditable">Form Xeditable</a>
                                        <a href="form-repeater.html" className="dropdown-item" key="t-form-repeater">Form Repeater</a>
                                        <a href="form-wizard.html" className="dropdown-item" key="t-form-wizard">Form Wizard</a>
                                        <a href="form-mask.html" className="dropdown-item" key="t-form-mask">Form Mask</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-table"
                                        role="button">
                                        <span key="t-tables">Tables</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-table">
                                        <a href="tables-basic.html" className="dropdown-item" key="t-basic-tables">Basic Tables</a>
                                        <a href="tables-datatable.html" className="dropdown-item" key="t-data-tables">Data Tables</a>
                                        <a href="tables-responsive.html" className="dropdown-item" key="t-responsive-table">Responsive Table</a>
                                        <a href="tables-editable.html" className="dropdown-item" key="t-editable-table">Editable Table</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-charts"
                                        role="button">
                                        <span key="t-charts">Charts</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-charts">
                                        <a href="charts-apex.html" className="dropdown-item" key="t-apex-charts">Apex charts</a>
                                        <a href="charts-echart.html" className="dropdown-item" key="t-e-charts">E charts</a>
                                        <a href="charts-chartjs.html" className="dropdown-item" key="t-chartjs-charts">Chartjs Charts</a>
                                        <a href="charts-flot.html" className="dropdown-item" key="t-flot-charts">Flot Charts</a>
                                        <a href="charts-tui.html" className="dropdown-item" key="t-ui-charts">Toast UI Charts</a>
                                        <a href="charts-knob.html" className="dropdown-item" key="t-knob-charts">Jquery Knob Charts</a>
                                        <a href="charts-sparkline.html" className="dropdown-item" key="t-sparkline-charts">Sparkline Charts</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-icons"
                                        role="button">
                                        <span key="t-icons">Icons</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-icons">
                                        <a href="icons-boxicons.html" className="dropdown-item" key="t-boxicons">Boxicons</a>
                                        <a href="icons-materialdesign.html" className="dropdown-item" key="t-material-design">Material Design</a>
                                        <a href="icons-dripicons.html" className="dropdown-item" key="t-dripicons">Dripicons</a>
                                        <a href="icons-fontawesome.html" className="dropdown-item" key="t-font-awesome">Font awesome</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map"
                                        role="button">
                                        <span key="t-maps">Maps</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-map">
                                        <a href="maps-google.html" className="dropdown-item" key="t-g-maps">Google Maps</a>
                                        <a href="maps-vector.html" className="dropdown-item" key="t-v-maps">Vector Maps</a>
                                        <a href="maps-leaflet.html" className="dropdown-item" key="t-l-maps">Leaflet Maps</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more" role="button"
                            >
                                <i className="bx bx-file me-2"></i><span key="t-extra-pages">Extra pages</span> <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-more">
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-invoice"
                                        role="button">
                                        <span key="t-invoices">Invoices</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-invoice">
                                        <a href="invoices-list.html" className="dropdown-item" key="t-invoice-list">Invoice List</a>
                                        <a href="invoices-detail.html" className="dropdown-item" key="t-invoice-detail">Invoice Detail</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-auth"
                                        role="button">
                                        <span key="t-authentication">Authentication</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                        <a href="auth-login.html" className="dropdown-item" key="t-login">Login</a>
                                        <a href="auth-login-2.html" className="dropdown-item" key="t-login-2">Login 2</a>
                                        <a href="auth-register.html" className="dropdown-item" key="t-register">Register</a>
                                        <a href="auth-register-2.html" className="dropdown-item" key="t-register-2">Register 2</a>
                                        <a href="auth-recoverpw.html" className="dropdown-item" key="t-recover-password">Recover Password</a>
                                        <a href="auth-recoverpw-2.html" className="dropdown-item" key="t-recover-password-2">Recover Password 2</a>
                                        <a href="auth-lock-screen.html" className="dropdown-item" key="t-lock-screen">Lock Screen</a>
                                        <a href="auth-lock-screen-2.html" className="dropdown-item" key="t-lock-screen-2">Lock Screen 2</a>
                                        <a href="auth-confirm-mail.html" className="dropdown-item" key="t-confirm-mail">Confirm Mail</a>
                                        <a href="auth-confirm-mail-2.html" className="dropdown-item" key="t-confirm-mail-2">Confirm Mail 2</a>
                                        <a href="auth-email-verification.html" className="dropdown-item" key="t-email-verification">Email verification</a>
                                        <a href="auth-email-verification-2.html" className="dropdown-item" key="t-email-verification-2">Email verification 2</a>
                                        <a href="auth-two-step-verification.html" className="dropdown-item" key="t-two-step-verification">Two step verification</a>
                                        <a href="auth-two-step-verification-2.html" className="dropdown-item" key="t-two-step-verification-2">Two step verification 2</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-utility"
                                        role="button">
                                        <span key="t-utility">Utility</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-utility">
                                        <a href="pages-starter.html" className="dropdown-item" key="t-starter-page">Starter Page</a>
                                        <a href="pages-maintenance.html" className="dropdown-item" key="t-maintenance">Maintenance</a>
                                        <a href="pages-comingsoon.html" className="dropdown-item" key="t-coming-soon">Coming Soon</a>
                                        <a href="pages-timeline.html" className="dropdown-item" key="t-timeline">Timeline</a>
                                        <a href="pages-faqs.html" className="dropdown-item" key="t-faqs">FAQs</a>
                                        <a href="pages-pricing.html" className="dropdown-item" key="t-pricing">Pricing</a>
                                        <a href="pages-404.html" className="dropdown-item" key="t-error-404">Error 404</a>
                                        <a href="pages-500.html" className="dropdown-item" key="t-error-500">Error 500</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle arrow-none" href="#" id="topnav-layout" role="button"
                            >
                                <i className="bx bx-layout me-2"></i><span key="t-layouts">Layouts</span> <div className="arrow-down"></div>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="topnav-layout">
                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-layout-verti"
                                        role="button">
                                        <span key="t-vertical">Vertical</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-layout-verti">
                                        <a href="layouts-light-sidebar.html" className="dropdown-item" key="t-light-sidebar">Light Sidebar</a>
                                        <a href="layouts-compact-sidebar.html" className="dropdown-item" key="t-compact-sidebar">Compact Sidebar</a>
                                        <a href="layouts-icon-sidebar.html" className="dropdown-item" key="t-icon-sidebar">Icon Sidebar</a>
                                        <a href="layouts-boxed.html" className="dropdown-item" key="t-boxed-width">Boxed Width</a>
                                        <a href="layouts-preloader.html" className="dropdown-item" key="t-preloader">Preloader</a>
                                        <a href="layouts-colored-sidebar.html" className="dropdown-item" key="t-colored-sidebar">Colored Sidebar</a>
                                        <a href="layouts-scrollable.html" className="dropdown-item" key="t-scrollable">Scrollable</a>
                                    </div>
                                </div>

                                <div className="dropdown">
                                    <a className="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-layout-hori"
                                        role="button">
                                        <span key="t-horizontal">Horizontal</span> <div className="arrow-down"></div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="topnav-layout-hori">
                                        <a href="layouts-horizontal.html" className="dropdown-item" key="t-horizontal">Horizontal</a>
                                        <a href="layouts-hori-topbar-light.html" className="dropdown-item" key="t-topbar-light">Topbar light</a>
                                        <a href="layouts-hori-boxed-width.html" className="dropdown-item" key="t-boxed-width">Boxed width</a>
                                        <a href="layouts-hori-preloader.html" className="dropdown-item" key="t-preloader">Preloader</a>
                                        <a href="layouts-hori-colored-header.html" className="dropdown-item" key="t-colored-topbar">Colored Header</a>
                                        <a href="layouts-hori-scrollable.html" className="dropdown-item" key="t-scrollable">Scrollable</a>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
      </div>

  </header>


  );
}
