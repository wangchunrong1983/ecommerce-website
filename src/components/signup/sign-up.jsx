import React from 'react';
import FormInput from '../form-input/form-input.jsx';
import CustomButton from '../custom-button/custom-button.jsx';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.scss';


class Signup extends React.Component{
  constructor(){
    super();

    this.state = {
      displayName:'',
      email:'',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
      event.preventDefault();
      const {displayName, email, password, confirmPassword} = this.state;

      if(password !== confirmPassword){
        alert("passwords don't match");
        return;
      }

      try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password)
        createUserProfileDocument(user,{displayName});

        this.setState({
          displayName: '',
          email:'',
          password: '',
          confirmPassword: ''
        });

      } catch(error){
        console.log(error);
      }
  }

  handldChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }



  render(){
      const {displayName, email, password, confirmPassword} = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>

          <FormInput 
          type='text' name='displayName' 
          value={displayName} onChange={this.handldChange}
          label='Name' required
          />
          <FormInput 
          type='text' name='email' 
          value={email} onChange={this.handldChange}
          label='Email' required
          />
          <FormInput 
          type='password' name='password' 
          value={password} onChange={this.handldChange}
          label='password' required
          />
          <FormInput 
          type='password' name='confirmPassword' 
          value={confirmPassword} onChange={this.handldChange}
          label='ConfirmPassword' required
          />

          <CustomButton type='submit'> SIGN UP </CustomButton>
        </form>
      </div>
    )
}
}

export default Signup;