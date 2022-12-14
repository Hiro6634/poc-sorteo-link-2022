import { useState, useContext } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';

import { auth } from '../../utils/firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { 
    SignInContainer,
    TitleContainer,
    ButtonsContainer
} from './sign-in-form.styles';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.development';

const SignInForm = () => {
    const {user, setUser} = useContext(UserContext);
    const [formFields, setFormFields] = useState({
        email:'',
        password: ''
    });
    const {email, password} = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                setUser(userCredential.user);
                console.log("SUCCESS ", userCredential.user);
            })
            .catch((error)=>{
                console.log("ERROR " + error.code);
                switch(error.code){
                    case 'auth/wrong-password':
                        alert('incorrect password for email');
                        break;
                    case 'auth/user-not-found':
                        alert('no user associated with this email');
                        break;
                    default:
                        console.log(error);
                }
            });
        console.log("USER", user);
    }
    return(
        <SignInContainer>
            <TitleContainer>Already have an account</TitleContainer>
            <span>Sign in with your email anda password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='Email'
                    onChange={handleChange}
                    name='email'
                    value={email}
                    required
                />
                <FormInput
                    label='Password'
                    type='Password'
                    onChange={handleChange}
                    name='password'
                    value={password}
                    required
                />
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' onClick={()=>console.log("USER:", user)}>Test</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;