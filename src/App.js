import React  from "react";
import {User} from './component/User.jsx';
const App = () => {
    return(
        <div>
            <p className="text-green">Welcome to react with webpack test</p>
            <User name="Pankaj Kumar Tiwari"/>
            <User name="Rakesh Kumar Tiwari"/>
        </div>
    )
}
export default App;