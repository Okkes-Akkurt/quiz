import React, {useState} from 'react';


const FilterPage = () => {
const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    const [filteredUser,setFilteredUser]=useState([])
    const [inputValue, setInputValue] = useState({
        name: '',
        age: '',
        country: '',
        gender: '',
    });

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    };

    const filterUser = () => {
        const filteredData = users.filter(user => {
            if (inputValue.name && !user.name.includes(inputValue.name)) return false;
            if (inputValue.age && !user.age.includes(inputValue.age)) return false;
            if (inputValue.country && !user.country.includes(inputValue.country)) return false;
            if (inputValue.gender && user.gender !== (inputValue.gender)) return false;
            return true;
        })
        setFilteredUser(filteredData)
        localStorage.setItem('filteredData', JSON.stringify(filteredData));
        window.location.href = '/result';
    };
    return (
        <div>
            <h1>ENTER FILTER</h1>
            NAME{' '}
            <input
                name='name'
                type='text'
                value={inputValue.name}
                onChange={handleChange}
            />
            <br />
            <br />
            AGE{' '}
            <input
                name='age'
                type='text'
                value={inputValue.age}
                onChange={handleChange}
            />
            <br />
            <br />
            COUNTRY{' '}
            <input
                name='country'
                type='text'
                value={inputValue.country}
                onChange={handleChange}
            />
            <br />
            <br />
            <label
                htmlFor='male'
                value={inputValue.gender}
                onChange={handleChange}>
                MALE
                <input
                    id='male'
                    type='radio'
                    name='gender'
                    value='male'
                    onChange={handleChange}
                    checked={inputValue.gender === 'male'}
                />
            </label>
            <label htmlFor='female'>
                FEMALE
                <input
                    id='female'
                    type='radio'
                    name='gender'
                    value='female'
                    onChange={handleChange}
                    checked={inputValue.gender === 'female'}
                />
            </label>
            <br />
            <br />
            <button onClick={filterUser}>filterUser</button>
        </div>
    );
};

export default FilterPage;
