/*
ChickenList path="/"

ChickenDetail.js path="/chicken-detail"

npm install react-router-dom
*/
import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ChickenList from "./component/ChickenList";

function App () {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<ChickenList/>}/>
                <Route path='/chicken-detail/:id' element={<chicken-detail/>}/>
            </Routes>
        </Router>
    )
}

export default App;