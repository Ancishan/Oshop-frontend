import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/image1.jpg';
import useAuth from '../../hooks/useAuth';
import { imageUpload } from '../../Api/Utils';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useState } from 'react';

const SignUp = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useAuth();
    // const [role, setRole] = useState('user')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const role = 'user';

        try {
            const photoURL = await imageUpload(image);
            const result = await createUser(email, password);
            await updateUserProfile({ displayName: name, photoURL });
            await axiosPublic.post('/users', {name, email, role, photoURL});
            toast.success('Signup Successful!');
            navigate('/');
        } catch (err) {
            console.log(err);
            toast.error(err?.message || 'Sign up failed');
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-center mb-8">OShopping for You</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl w-full max-w-4xl">
                <figure className="block w-full sm:w-1/2 lg:w-1/2">
                    <img
                        src={img1}
                        alt="Shopping"
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body w-full sm:w-1/2 lg:w-1/2 p-6">
                    <h2 className="text-3xl font-bold text-center mb-6">Create Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Select Image</span>
                            </label>
                            <input
                                required
                                type="file"
                                name="image"
                                accept="image/*"
                                className="file-input file-input-bordered w-full"
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label cursor-pointer justify-start space-x-2">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    required
                                />
                                <span className="label-text">I agree to the terms and conditions</span>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-sm">
                        Already have an account? <Link to='/login'>Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
