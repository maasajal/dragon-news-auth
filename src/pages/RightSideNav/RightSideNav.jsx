import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import add from "../../assets/add.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const RightSideNav = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="space-y-2 mb-8">
        <h2 className="text-lg font-semibold mb-4">Login With</h2>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full flex items-center gap-2 text-sm"
        >
          <FaGoogle />
          Login with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          className="btn btn-outline w-full flex items-center gap-2 text-sm"
        >
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Find Us On</h2>
        <a href="" className="flex items-center gap-2 border rounded-t-lg p-4">
          <FaFacebook />
          Facebook
        </a>
        <a href="" className="flex items-center gap-2 border-x p-4">
          <FaTwitter />
          Twitter
        </a>
        <a href="" className="flex items-center gap-2 border rounded-b-lg p-4">
          <FaInstagram />
          Instagram
        </a>
      </div>
      <div className="bg-[#F3F3F3] space-y-6 p-4">
        <h2 className="text-lg font-semibold mb-4">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className="mt-10">
        <img src={add} alt="" />
      </div>
    </div>
  );
};
export default RightSideNav;
