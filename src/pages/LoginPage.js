// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useAuthState } from "react-firebase-hooks/auth";
import { myAuth } from "../auth/myFirebase";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  Navbar,
  Nav,
} from "react-bootstrap";

import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import axios from "axios";

import { setUsername, setUserid } from "../reducers/customUserReducer";

const LoginPage = () => {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.customUser);

  const [user, loading] = useAuthState(myAuth);

  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    console.log("signing in");

    try {
      await signInWithPopup(myAuth, googleProvider).then((result) => {
        if (result) {
          console.log(`signed in as: ${result.user.displayName}`);
          axios.get(`/api/users/${result.user.uid}`).then((response) => {
            const userExists = response.data.exists;

            console.log(`Existing user: ${userExists}`);

            /*add new user */

            if (!userExists) {
              axios
                .post(`/api/users/`, {
                  userId: result.user.uid,
                })
                .then((newUserResult) => {
                  console.log(newUserResult.data);
                  dispatch(setUsername(newUserResult.data.userName));
                  dispatch(setUserid(result.user.uid));
                });
              /*existing user */
            } else if (userExists) {
              console.log(
                `Retrieved existing user info: ${JSON.stringify(
                  response.data.user
                )}`
              );
              dispatch(setUsername(response.data.user.userName));
              dispatch(setUserid(response.data.user.userId));
            }
          });
        } else {
          console.log("sign in failed");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const GoogleLogout = async () => {

    console.log("signing out");

    try {
      const result = await signOut(myAuth);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    console.log(`signed in as ${userState.userName} auth UID: ${user.uid}`);
  }

  return (
    <div>
      <h3>Login Page</h3>
      {user ? (
        <div>
          <p>logged in as {userState.userName}</p>
          <button onClick={GoogleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <p>logged out</p>
          <button onClick={GoogleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
