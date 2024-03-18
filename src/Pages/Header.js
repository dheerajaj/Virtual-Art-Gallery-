import React, { useContext, useEffect, useState } from "react";
import "../Styles/Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../ContextApi/CartProvider";
import Click from "../Audio/Click.mp3";
import voice from "../Audio/voice.wav";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import voiceImage from "../Images/voiceImage.gif";
import { useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";

function Header() {
  const [show, setShow] = useState(false);
  const { cart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const { isAuthenticated, logout, user } = useAuth0();
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    setQuantity(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  function Play() {
    new Audio(Click).play();
  }

  const navigate = useNavigate();

  const commands = [
    {
      command: "Hello",
      callback: () => {
        speak({ text: "Hello" + user.name + "How may I help you?" });
      },
    },
    {
      command: "How are you",
      callback: () => {
        speak({ text: "I am good, What about you" });
      },
    },
    {
      command: "thank you",
      callback: () => {
        speak({ text: "Your welcome" + user.name });
      },
    },
    {
      command: "open *",
      callback: (site) => {
        speak({
          text: "This will take you to another web page. Do you want to continue?",
        });
        window.open("http://" + site + ".com");
      },
    },
    {
      command: "home page",
      callback: () => {
        speak({ text: transcript });
        navigate("/");
        SpeechRecognition.stopListening();
      },
    },
    {
      command: "about page",
      callback: () => {
        speak({ text: "This is about page" });
        navigate("/about");
        SpeechRecognition.stopListening();
      },
    },
    {
      command: "products page",
      callback: () => {
        speak({ text: "This is Product page" });
        navigate("/products");
        SpeechRecognition.stopListening();
      },
    },
    {
      command: "contact page",
      callback: () => {
        speak({ text: "This is contact page" });
        navigate("/contact");
        SpeechRecognition.stopListening();
      },
    },
    {
      command: "cart page",
      callback: () => {
        speak({ text: "This is cart page" });
        navigate("/cart");
        SpeechRecognition.stopListening();
      },
    },
  ];

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const voiceHandle = () => {
    new Audio(voice).play();
    SpeechRecognition.startListening();
  };

  return (
    <div>
      <div className="MainHeader">
        {isAuthenticated && (
          <div>
            {show ? (
              <div className="a-mainProfileContainer">
                <div class="card">
                  <div class="cover-photo">
                    <img src={user.picture} alt={user.name} class="profile" />
                  </div>
                  <h3 class="profile-name">{user.name}</h3>
                  <p class="about">
                    UI/UX Designer <br /> Front End Developer
                  </p>
                  <button class="btn btn-lg">
                    {" "}
                    <a
                      href="https://api.whatsapp.com/send?phone=919996689916&text=Send me a quote."
                      target="blank"
                    >
                      Message
                    </a>{" "}
                    <i class="fa fa-commenting" aria-hidden="true"></i>
                  </button>
                  <button class="btn" onClick={() => setShow(false)}>
                    Go back <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  </button>
                  <div class="icons">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    <i class="fa fa-github-square" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            ) : null}

            {listening ? (
              <div className="mainVoiceListen">
                <h1>{transcript ? transcript : "Speak now..."}</h1>
                <img src={voiceImage} alt="Listening" width="100%" />
              </div>
            ) : null}

            <div className="headerLogo">
              <img
                src="https://app.virtualartgallery.com/vg-logo.3b5fe15c.png"
                alt="logo"
                width="100%"
              />
            </div>
            <div className="headerName" title="User_Name">
              <b style={{ fontWeight: "500" }}>Welcome: &nbsp; </b> {user.name}
            </div>
            <ul>
              <Link to="/">
                <li id="step-1" onClick={Play}>
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li id="step-2" onClick={Play}>
                  About
                </li>
              </Link>
              <Link to="/products">
                <li id="step-3" onClick={Play}>
                  Products
                </li>
              </Link>
              <Link to="/contact">
                <li onClick={Play}>Contact</li>
              </Link>
              
              <Link to="/cart">
                <span className="m-3 text-dark">
                  <FiShoppingCart style={{ fontSize: "35px" }} />
                  <span className="CartNumber">{quantity}</span>
                </span>
              </Link>

              <img
                src={user.picture}
                alt=""
                width="50px"
                style={{
                  borderRadius: "100%",
                  cursor: "pointer",
                  boxShadow: "2px 2px 5px #000 ",
                  margin: "10px",
                }}
                title="Profile"
                onClick={() => setShow(true)}
              />
              <div
                className="d-flex justify-content-center align-items-center mic"
                onClick={voiceHandle}
                title="Speak to search"
              >
                <i class="fa fa-microphone" aria-hidden="true"></i>
              </div>

              <button
                className="signOutBtn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Sign Out <i class="fa fa-sign-out" aria-hidden="true"></i>
              </button>

            </ul>
            <p className="userName"></p>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
