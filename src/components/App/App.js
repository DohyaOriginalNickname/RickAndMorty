import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.scss'

import LoginPage from "../loginPages/loginPage/loginPage";
import CreateAccountPage from "../loginPages/createAccountPage/createAccountPage";
import PasswordRecovery from "../loginPages/passwordRecoveryPage/passwordRecoveryPage";
import ListOfCharactersPage from "../listOfCharacters/listOfCharacters";
import ListOfLocations from "../listOfLocations/listOfLocations";
import ListOfEpisods from "../listOfEpisods/listOfEpisods";
import CharacterPage from "../characterPage/characterPage";
import LocationPage from "../locationPage/locationPage";
import EpisodePage from "../episodePage/episodePage";
import SettingsPage from "../settings/settingsPage/settingsPage";
import EditProfile from "../settings/editProfile/editProfile";
import NameChange from "../settings/pages/nameChange/nameChange";
import PasswordChange from "../settings/pages/passwordChange/passwordChange";


if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'dark')
}

const App = () => {
    return (
        <Router>
            <div className={localStorage.getItem('theme') === 'dark' ? "App-dark" :"App-light"}>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/createAccount" element={<CreateAccountPage/>} />
                    <Route path="/recoveryPassword" element={<PasswordRecovery/>}/> 
                    <Route path="/listOfCharacters" element={<ListOfCharactersPage/>}/>
                    <Route path="/Character/:id" element={<CharacterPage/>}/>
                    <Route path="/listOfLocaions" element={<ListOfLocations/>}/>
                    <Route path="/location/:id" element={<LocationPage/>}/>
                    <Route path="/listOfEpisods" element={<ListOfEpisods/>}/>
                    <Route path="/episodePage/:id" element={<EpisodePage/>}/>
                    <Route path="/settingsPage" element={<SettingsPage/>}/>
                    <Route path="/changeUserData" element={<EditProfile/>}/>
                    <Route path="/nameChange" element={<NameChange/>}/>
                    <Route path="/passwordChange" element={<PasswordChange/>}/>
                </Routes>
            </div>       
        </Router> 
    )
}

export default App;