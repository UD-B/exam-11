import terroristsJson from './data.json'
import { useState } from 'react'

export default function App() {

    const [terrorists, setTerrorists] = useState(terroristsJson)

    const listTerrorists = terrorists.map(person =>
        <li className='line'>
            <img src={person.imageUrl} className='img' />
            <p className='name'>{person.name}</p>
            <p className='organization'>{person.organization}</p>
            <p className='attacks'>{person.attacksCount}</p>
            <p className='status'>{person.status}</p>
            <p className='relation'>{person.relationToIsraelSummary}</p>
        </li>
    )

    return (
        <>
            <header>Threat Actor Database</header>
            <nav>
                <input onChange={(e) => setTerrorists(...terrorists, e.target.name.includes(e)) } type="text" placeholder='search by name' />
                <input type="text" placeholder='search by attacks' />
                <button>filter by status</button>
                <button>most dangerous terrorist</button>
            </nav>
            <ul>
                <li className='line'>
                    <p className='img'>image</p>
                    <p className='name'>name</p>
                    <p className='organization'>organization</p>
                    <p className='attacks'>attacks</p>
                    <p className='status'>status</p>
                    <p className='relation'>summary</p>
                </li>
                {listTerrorists}
            </ul>
        </>
    )
}