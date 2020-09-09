import React from 'react'

const LoggedInContext = React.createContext()

function LoggedInProvider (props) {

    let [users, setUsers] = React.useState([])
    let [loggedIn, setLoggedIn] = React.useState(false) 
    
    // create a context for logged in
    const updatePass = (username,password) => {

        let rtnValue = false

        let foundUser = users.findIndex( user => user.username === username)

        if (foundUser !== -1) {
            //is found

            // copy array
            let tmpUsers = [...users]

            // update password
            tmpUsers[foundUser].password = password

            // set new state
            setUsers(tmpUsers)

            rtnValue = true  
        }
        return rtnValue
    }

    const checkUser = (username, password) => {
        // if username and password match return true
        let rtnValue = false

        let found = users.findIndex(user => user.username === username && user.password === password) 

        if (found !== -1) {
            setLoggedIn(true)
            rtnValue = true
        }
        return rtnValue



    }

    const addUser = (username, password) => {

        let rtnValue = false
        // check to see if user exist
        if (users.findIndex(element => username === element.username) === -1) {
            // not found
            let tmpUsers = [...users]
            tmpUsers.push({ username, password })
            setUsers(tmpUsers)
            rtnValue = true
        } else {
            throw new Error("User Already Exist")
        }
        return rtnValue; 
    }
    return (
        <LoggedInContext.Provider value={{users, loggedIn, updatePass, checkUser, addUser}}>
            {props.children}
        </LoggedInContext.Provider>
    )

}
const LoggedInConsumer = LoggedInContext.Consumer
export {LoggedInContext, LoggedInProvider, LoggedInConsumer}