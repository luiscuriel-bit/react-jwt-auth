import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import './App.css'

function App() {
    const [user, setUser] = useState(null)

    return (
        <>
            <NavBar user={user} />
            <h1>Hello world!</h1>
        </>
    )
}

export default App
