import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (

    <div className="container-fluid p-0">
    <div className="row g-0">
      <div className="col-xl-7">
          <div className="auth-full-bg pt-lg-5 p-4">
              <div className="w-100">
                  <div className="bg-overlay"></div>
                  <div className="d-flex h-100 flex-column">
                      <div className="p-5 mt-20">
                          <div className="row">
                              <div className="col-lg-7">
                                  <div className="">
                                      <h1 className="mb-3 text-white font-size-title">BIENVENUE <br/>SUR YOYO  </h1>

                                  </div>
                              </div>
                              <div className="col-lg-9">
                                  <div className="owl-item">
                                      <div className="py-3">
                                          {/* <p className="text-white font-size-16 mb-4">RICVA est une plateforme de suivi et de gestioh du secteur agricole, de la production à la vente en passant par le financement</p> */}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     
      <div className="col-xl-5">
          <div className="auth-full-page-content p-md-5 p-4 bg-white">
              <div className="w-100">
                  <div className="d-flex justify-content-center h-100">
                      <div className="col-md-9">
                          <div className="mt-5">
                              <div className="text-center">
                                <h1 className="">YOYO</h1>
                                  {/* <img src="/assets/img/logo.png" alt="" height="50" /> */}
                              </div>
                              <div className="text-center mt-4">
                                 <h1 className="text-primary-st">Connexion</h1>
                              </div>
                              <div className="mt-3">
                                  <form onSubmit={handleSubmit} >
                                      <div className="mb-3">
                                          <label for="login" className="form-label">Email ou Téléphone</label>
                                          <input  type='email' placeholder='email' id='email' onChange={handleChange} className="form-control form-control-st"/>
                                      </div>
                                      <div className="mb-3">
                                          <label className="form-label">Mot de passe</label>
                                          <div className="input-group auth-pass-inputgroup">
                                              <input type="password" placeholder='password'  id='password' onChange={handleChange} className="form-control form-control-st" aria-label="Password"/>
                                          </div>
                                      </div>
                                      <div className="mt-4 d-flex justify-content-center">
                                          <div className="col-md-8">
                                              <button disabled={loading}  className="btn btn-st" type="button" id="password-addon">
                                              <strong> {loading ? 'Loading...' : 'Connexion'}</strong>
                                              </button>

                                              <div className="mt-2 text-center">
                                                  <small> Vous avez oublier votre mat de passe?</small>
                                                  <a className="fw-medium text-primary-st"> Réinitialiser votre mot de passe.</a>
                                              </div>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
    
    // <div className='p-3 max-w-lg mx-auto'>
    //   <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
    //   <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
    //     <input
    //       type='email'
    //       placeholder='email'
    //       className='border p-3 rounded-lg'
    //       id='email'
    //       onChange={handleChange}
    //     />
    //     <input
    //       type='password'
    //       placeholder='password'
    //       className='border p-3 rounded-lg'
    //       id='password'
    //       onChange={handleChange}
    //     />

    //     <button
    //       disabled={loading}
    //       className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
    //     >
    //       {loading ? 'Loading...' : 'Sign In'}
    //     </button>
    //     <OAuth/>
    //   </form>
    //   <div className='flex gap-2 mt-5'>
    //     <p>Dont have an account?</p>
    //     <Link to={'/sign-up'}>
    //       <span className='text-blue-700'>Sign up</span>
    //     </Link>
    //   </div>
    //   {error && <p className='text-red-500 mt-5'>{error}</p>}
    // </div>

  );
}
