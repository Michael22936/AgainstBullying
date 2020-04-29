import React from 'react';



export default function Home() {

    const sayGoodbye = () => {
        console.log('Goodbye');
    }

    return (

        <div>
            <h3>This is the goodbye component</h3>
            <button onClick={sayGoodbye}>Say Goodbye</button>
        </div>

    );
}
