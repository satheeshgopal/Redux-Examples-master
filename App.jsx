import React from 'react';
import { Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="list">                   
                    <Link to="/UserInput">Example.1.User Input - To do List </Link>
                </nav>               
            </div>
        );
    }
}
export default App;