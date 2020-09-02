import React from 'react'


export default function SignIn () {

    return (
        <div>
        <h1>Sign in to your account.</h1>
        <form>
            <label for="email">Email</label>
            <input id="email" type="email"></input>
            <br></br>
            <label for="password">Password</label>
            <input id="password" type="password"></input>
            <br></br>
            <input type="submit" value="Login"></input>
            <br></br>
            <br></br>
            <a href="./Home">Home Page</a>
        </form>
        
        </div>
    )
}