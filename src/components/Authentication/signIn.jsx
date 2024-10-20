import { Link, useNavigate } from 'react-router-dom';
import pic1 from '../../assets/pic1.jpg';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const SignIn = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await signIn(email, password);
            toast.success("Signed in successfully");
            navigate('/');
        } catch (err) {
            console.log(err);
            toast.error(err?.message || 'Sign in failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm sm:max-w-md p-6 space-y-6 rounded-xl shadow-lg bg-white">
                {/* Title and Image */}
                <div className="text-center">
                    <img
                        src={pic1}
                        alt="Oshopping Logo"
                        className="mx-auto w-24 h-24 rounded-lg"
                    />
                    <h1 className="text-2xl font-bold text-gray-800 mt-4">
                        Welcome to Oshopping Login
                    </h1>
                </div>

                {/* Sign-in Form */}
                <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <button className="btn btn-primary w-full">
                        Sign In
                    </button>
                </form>

                {/* Sign Up Link */}
                <div className="text-center">
                    <p className="text-sm">
                        Don’t have an account?{" "}
                        <Link to='/signUp'>Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
