import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result.user)

                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })


    }

    //const { ProviderLogin } = useContext(AuthContext);
    // const googleProvider = new GoogleAuthProvider();
    const handleGoggleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)

                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user)

                //navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div>
            <div>
                <h2 className='text-4xl my-8 text-center font-merriweather'>Login your Account</h2>

                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto font-lato">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control -mb-5">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider -mb-5">or</div>

                    <div className="form-control mt-6">
                        <button onClick={handleGoggleSignIn} className="btn bg-slate-200 text-black"><FcGoogle className='text-2xl' /> Login with Google</button>
                    </div>
                    <div className="divider -mb-5">or</div>

                    <div className="form-control mt-6">
                        <button onClick={handleGithubSignIn} className="btn bg-slate-200 text-black"><FaGithub className='text-2xl' /> Login with GitHub</button>
                    </div>
                </form>



                <p className='text-center'>Don't have an account? <Link className='text-blue-600 font-bold' to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;