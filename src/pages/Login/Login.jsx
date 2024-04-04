import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar />
      <div className="hero bg-base-200 my-12">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left my-8">
            <h1 className="text-5xl font-bold">Login your account</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="mb-5">
              <label className="text-center">
                <p className="label-text">
                  Don't Have An Account?
                  <Link to="/register" className="text-[#FF8C47]">
                    {" "}
                    Register
                  </Link>
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
