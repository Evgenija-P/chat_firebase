import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth } from "../firebase";

import { GoogleAuthProvider, signInWithRedirect, FacebookAuthProvider } from "firebase/auth";

export const Login = () => {
  return (
    <div className="w-full h-screen bg-login mx-auto p-10">
      <div className="w-1/3 h-[300px] bg-cyan-100 mx-auto py-9 rounded-md absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-between shadow-login">
        <h2 className="text-center mb-8 text-3xl font-bold">Welcome to Chat!</h2>
        <ul className="mx-auto">
          <li className="w-[280px] mx-auto">
            <button
              className="w-full flex gap-x-3 items-center justify-center bg-[rgb(66,133,244)] py-3 px-5 rounded-lg text-white text-lx font-semibold mb-5 hover:shadow-buttonLoginGoogle"
              onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
            >
              <GoogleOutlined /> Sing In wiht Google
            </button>
          </li>
          <li className="w-[280px] mx-auto">
            <button
              className="w-full flex gap-x-3 items-center justify-center bg-[rgb(59,89,152)] py-3 px-5 rounded-lg text-white text-lx font-semibold hover:shadow-buttonLoginFacebook"
              onClick={() => signInWithRedirect(auth, new FacebookAuthProvider())}
            >
              <FacebookOutlined /> Sign In with Facebook
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
