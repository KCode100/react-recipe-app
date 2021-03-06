import { useState } from 'react/cjs/react.development';

// styles
import './Searchbar.css'

const Searchbar = () => {
    const [term, setTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="searchbar">
            <form
                onSubmit={handleSubmit}
            >
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id='search'
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    );
}

export default Searchbar;