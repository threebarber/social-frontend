// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useAuthState } from "react-firebase-hooks/auth";
import {myAuth} from "../auth/myFirebase"

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

const LandingPage = () =>  {

  return (

   <div>
    <h3>Home Page</h3>
    <div style={{
        display:"flex",
        border:"dashed green 5px"
    }}>
        
    </div>
   </div>
  );
}

export default LandingPage;
