import {createBrowserRouter, RouterProvider, Route,} from "react-router-dom";

import LoginPage from "../loginPages/loginPage/loginPage";
import CreateAccountPage from "../loginPages/createAccountPage/createAccountPage";
import PasswordRecovery from "../loginPages/passwordRecoveryPage/passwordRecoveryPage";
import ListOfCharactersPage from "../listOfCharacters/listOfCharacters";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/createAccount",
        element: <CreateAccountPage/>
    },
    {
        path: "/recoveryPassword",
        element: <PasswordRecovery/>
    },
    {
        path: '/listOfCharacters',
        element: <ListOfCharactersPage/>
    }
]);

const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;