// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
// import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');


    const handleRegister = (e) => {

        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const user = { name, email, photo, password }
        console.log(user)

        setRegisterError('')

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should contain atleast one upper case')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Password should contain atleast one lower case')
            return;
        }

        //Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user)

                //New user has been created
                const createdAt = result.user?.metadata?.creationTime;
                const user = { name, email, createdAt, photo };

                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(rse => rse.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'User has been created Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })
    }

    return (
        <div>
            <div>
                <h2 className='text-5xl my-8 text-center font-garamond'>Please Register</h2>

                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto font-lato">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Create Account</button>
                    </div>
                </form>
                {
                    registerError && <p className='text-red-600 text-center'>{registerError}</p>
                }

                <p className='text-center mt-4'>Already have an account? <Link className='text-blue-600 font-bold' to='/login'>Login</Link></p>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;