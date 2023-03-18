import logo from "../assets/logowhite.png";
import { GoogleLogin } from "@react-oauth/google";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const responseMessage = (response: any) => {
    console.log("LOGIN SUCCESS! Current user: ", response);
    var decode: any = jwt_decode(response.credential);
    console.log(decode);

    localStorage.setItem("user", JSON.stringify(decode));

    const { sub, name, picture } = decode;

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  const errorMessage = () => {
    console.log("LOGIN FAILED!");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client: auth2", start);
  });

  return (
    <div className="flex h-screen">
      <div className="relative w-full h-full">
        <video
          src="/videos/share.mp4"
          autoPlay
          controls={false}
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="flex flex-col justify-center items-center absolute top-0 right-0 bottom-0 left-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="seemeLogo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
