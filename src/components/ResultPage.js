import React from 'react';

const ResultPage = () => {
    const filteredData = JSON.parse(localStorage.getItem('filteredData')) || [];
    return (
        <div>
            <h1>Filtered Users</h1>
            {filteredData.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>Country: {user.country}</p>
                    <p>Gender: {user.gender}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default ResultPage;
