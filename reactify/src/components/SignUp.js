import React from 'react'


export default function SignUp () {

    return (
        <div>
        <h1>lets get you started by creating a log in!</h1>
        <form>
          
            <input id="fName" type="text" placeholder="Enter first name"></input>
            <br></br>
            <input id="lName" type="text" placeholder="Enter last name"></input>
            <br></br>
            <input id="email" type="email" placeholder="Enter email"></input>
            <br></br>
            <input id="phone" type="phonne" placeholder="Enter phone number"></input>
            <br></br>
            <input id="age" type="number" placeholder="Current age"></input>
            <br></br>
            <input id="password" type="password" placeholder="Create password"></input>
            <br></br>
            <input id="password" type="password" placeholder="Password must match"></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            <br></br>
            <br></br>
            <a href="./Home">Home Page</a>

        </form>
        
        </div>
    )
}