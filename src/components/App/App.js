import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import LoginPage from "../loginPages/loginPage/loginPage";
import CreateAccountPage from "../loginPages/createAccountPage/createAccountPage";
import PasswordRecovery from "../loginPages/passwordRecoveryPage/passwordRecoveryPage";
import ListOfCharactersPage from "../listOfCharacters/listOfCharacters";

import './App.scss'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<LoginPage/>}/>
                    <Route exact path="/createAccount" element={<CreateAccountPage/>} />
                    <Route exact path="/recoveryPassword" element={<PasswordRecovery/>}/> 
                    <Route exact path="/listOfCharacters" element={<ListOfCharactersPage/>}/>
                </Routes>
            </div>       
        </Router> 
    )
}

export default App;