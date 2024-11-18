import { useState } from "react";
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';


const SearchBar = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!query.trim()) {
            toast.error("Please enter a search term!")
            return
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <div>
            <header className={s.header}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <input className={s.input}
                     type="text"
                     value={query}
                     onChange={handleChange}
                     autoComplete="off"
                     autoFocus
                     placeholder="Search images and photos"
                    />
                    <button type="submit" className={s.button}>Search</button>
                </form>
            </header>
        </div>
    )
};

export default SearchBar;