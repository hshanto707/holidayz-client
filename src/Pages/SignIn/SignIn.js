import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLocation, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import './SignIn.css'

const SignIn = () => {
  const { signInUsingGoogle} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_url)
      })
  }
  return (
    <div style={{margin: "300px 0 200px"}}>
      <h3 class="mb-4">Signin With Google</h3>
      <FontAwesomeIcon className="social-link fs-1 mx-3 mt-2" icon={faGoogle} onClick={handleGoogleLogin} />
    </div>
  );
};

export default SignIn;