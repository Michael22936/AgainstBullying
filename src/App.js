import React, {useState} from 'react';
import Home from "./app/views/home";
import Tweet from "./app/views/Tweet"

function App() {

    const [users, setUsers] = useState([
        {name: 'Ed', message: 'Hello there'},
        {name: 'John', message: 'I am John snow'},
        {name: 'travesery', message: 'I am awesome'}
    ])

    // const [isRed, setRed] = useState(false)
    // const [count, setCount] = useState(0)
    //
    // const increment = () => {
    //     setCount(count + 1)
    //     setRed(!isRed);
    // }

  return (
    <div className="app">

        {users.map(user => (
            <Tweet name={user.name} message={user.message}/>
        ))}



        {/*<h1 className={isRed ? 'red' : ''}>Change my color</h1>*/}
        {/*<button onClick={increment}>Increment</button>*/}
        {/*<h1>{count}</h1>*/}
    </div>
  );
}

export default App;
