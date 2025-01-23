import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/ContextProvider";
import placementcell from "../../assets/PLACE.jpg";
import gg from "../../assets/GGG.svg"
// import { GoogleButton } from "react-google-button";

const Signin = () => {
  const { googleSignIn, unRegisteredGoogleUser, RegisteredGoogleUser } =
    useContext(Context);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (unRegisteredGoogleUser) {
      navigate("/register");
    }
    if (RegisteredGoogleUser) {
      navigate("/userprofile");
    }
  }, [unRegisteredGoogleUser, RegisteredGoogleUser]);

  const navigateAdminSignin = () => {
    navigate("/adminsignin");
  };

  return (
    <div
      className="h-full flex flex-col md:flex-row"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/R.1073db72463ca6c3ee33dfa7ac355923?rik=l7%2b7uCzA%2bb5TEw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f3%2fa%2fa%2f495733.jpg&ehk=pHOxekIIZBYCllmTkLByHb24mNvadKJB%2fLeh%2b1MKbcE%3d&risl=&pid=ImgRaw&r=0')"
      }}
    >
      <div className="py-3 flex-1 flex flex-col justify-center items-center backdrop-blur-lg bg-white/40">
        <div className="m-3 p-7 rounded-xl bg-white shadow-xl">
          <div className="space-y-4">
            <img
              src={placementcell}
              loading="lazy"
              className="w-20 rounded-full shadow-md"
              alt="tailus logo"
            />
            <h2 className="mb-8 text-5xl text-blue-950 font-black">
              Signup Into<br /> Make Placements
            </h2>
          </div>
          <div className="mt-16 grid space-y-4">
            <button
              onClick={handleGoogleSignIn}
              className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
            >
              <div className="relative flex items-center space-x-4 justify-center">
              <img
                  src={gg}
                  className="absolute left-0 w-6"
                  alt="google logo"
                />
               
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-lg transition duration-300 group-hover:text-blue-600">
                  Continue with Google
                </span>
              </div>
            </button>
            <button
              onClick={navigateAdminSignin}
              className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <span className="block w-max font-semibold tracking-wide text-gray-700 text-lg transition duration-300 group-hover:text-blue-600">
                  Signin as Admin
                </span>
              </div>
            </button>
          </div>
          <div className="mt-20 text-gray-600 text-center">
            <p className="text-xs">
              By proceeding, you agree to our Terms of Use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;