import React, {useState} from 'react';

const InputPage = () => {
    const [users, setUsers] = useState([]);
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

    const handleClick = () => {
        if (inputValue !== '') {
            const updateUsers = [...users, inputValue];
            setUsers(updateUsers);
            localStorage.setItem('users', JSON.stringify(updateUsers));
            setInputValue({
                name: '',
                age: '',
                country: '',
                gender: '',
            });
        }
    };

    const redirect = () => {
        window.location.href = '/filter';
    };
    return (
        <div>
            <h1>ENTER DATA</h1>
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
            <button onClick={handleClick}>Add</button>
            <br />
            <br />
            <button onClick={redirect}>FilterPage</button>
        </div>
    );
};

export default InputPage;
