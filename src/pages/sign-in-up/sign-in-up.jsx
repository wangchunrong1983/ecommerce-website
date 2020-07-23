import React from 'react' ;

import './sign-in-up.scss';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/signup/sign-up';


const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndSignUpPage;