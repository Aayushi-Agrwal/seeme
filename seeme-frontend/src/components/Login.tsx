import logo from "../assets/logowhite.png";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const responseMessage = (response: any) => {
    console.log(response);
  };
  const errorMessage = (error: Error) => {
    console.log(error);
  };
  //     return (
  //         <div>
  //             <h2>React Google Login</h2>
  //             <br />
  //             <br />
  //
  //         </div>
  //     )
  // }
  // export default App;

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
            <GoogleLogin onSuccess={responseMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
