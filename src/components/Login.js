import React, { Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth' ;
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const {user , signOut, signInWithGoogle} = this.props;
        return (
                <div>
                    {
                   user ? <p> Hola { user.displayNamme}</p>
                   :    <p> sign in </p>  
                    }
                    {

      user ?<button onClick={signOut}>Sign out</button>
       :<button onClick={signInWithGoogle} >sign in with google</button>
                    }
                </div>

        )

    }

}

const firebaseAppAuth = firebaseApp.auth();

const providers= {
    googleProvuder: new firebase.auth.GoogleAuthProvider(),
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Login);