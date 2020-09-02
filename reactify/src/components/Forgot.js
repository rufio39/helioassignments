import React from 'react'

export default function Forgot () {

    return (
        <div>
        <h1>oops forgot password? lets send a reminder.</h1>
        <form>
            <label for="email">user email</label>
            <input type="email" type="email" placeholder="enter email"></input><br></br>
            <input type="submit" value="forgot password"></input>
            <br></br>
            <br></br>
            <a href="./Home">Home page</a>
        </form>
        </div>
    )
}