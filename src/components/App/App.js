import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import LoginPage from "../loginPages/loginPage/loginPage";
import CreateAccountPage from "../loginPages/createAccountPage/createAccountPage";
import PasswordRecovery from "../loginPages/passwordRecoveryPage/passwordRecoveryPage";
import ListOfCharactersPage from "../listOfCharacters/listOfCharacters";
import ListOfLocations from "../listOfLocations/listOfLocations";
import ListOfEpisods from "../listOfEpisods/listOfEpisods";
import CharacterPage from "../characterPage/characterPage";
import LocationPage from "../locationPage/locationPage";
import EpisodePage from "../episodePage/episodePage";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<LoginPage/>}/>
                    <Route exact path="/createAccount" element={<CreateAccountPage/>} />
                    <Route exact path="/recoveryPassword" element={<PasswordRecovery/>}/> 
                    <Route exact path="/listOfCharacters" element={<ListOfCharactersPage/>}/>
                    <Route exact path="/Character" element={<CharacterPage/>}/>
                    <Route exact path="/listOfLocaions" element={<ListOfLocations/>}/>
                    <Route exact path="/location" element={<LocationPage/>}/>
                    <Route exact path="/listOfEpisods" element={<ListOfEpisods/>}/>
                    <Route exact path="/episodePage" element={<EpisodePage/>}/>
                </Routes>
            </div>       
        </Router> 
    )
}

export default App;