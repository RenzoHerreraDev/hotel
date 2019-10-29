import React, { Component} from 'react';
import firebase from 'firebase';
firebase.initializeApp({

    apiKey: "AIzaSyDWzgjVZAeEck5YakEG3ufyIBz7SM9BOoI",
    authDomain: "hotel-e0fce.firebaseapp.com",
    databaseURL: "https://hotel-e0fce.firebaseio.com",
    projectId: "hotel-e0fce",
    storageBucket: "hotel-e0fce.appspot.com",
    messagingSenderId: "415250362105",
    appId: "1:415250362105:web:53798fa861f3539eb93c28"
    
  })


class Login extends Component{
    constructor(){
        super()
        this.state = {
            user: null,
        }
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged( user => {
            if( user ){
                this.setState({user: user});
            }else{
                this.setState({ user: null});
            }
        })
    }
      
      signIn() {
          const googleProvuder =  new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleProvuder)
          .then(result => console.log( `${ result.user.email} a iniciado ` ))
          .catch( result => console.error(   `Error: ${ result.code} ${ result.message} `) )
      }
      
      signOut() {
        firebase.auth().signOut()
        .then( () => console.log( `Te has desconectado ` ))
        .catch( result => console.error(   `Error: ${ result.code} ${ result.message} `) )
    }
    renderUserFalse(){
        return( 
        <button onClick={this.signIn}>Sign In</button>
        
        )

    }
    renderUserTrue(){
        return (
            <>
            <img width='32' src={ this.state.user.photoURL} />
           

            <button onClick={this.signOut}>Sign out</button>
        </>
        )
    }
    render(){
        return (
            <>
     { this.state.user  ?   this.renderUserTrue() :  this.renderUserFalse()   }
            </>
        )

    }

}

export default Login;