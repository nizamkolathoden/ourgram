import React, { useState, useEffect } from 'react';

const ChangeName = () => {
    const localstorage = localStorage.getItem('jwt')
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user._id);
    useEffect(() => {
        fetch(`http://localhost:8080/settings/editname/${user._id}`, {
            headers: {
                "authorization": localstorage.replace(/['"]+/g, '')
            }
        }).then(res => res.json()).then(responce => {


            console.log(responce);

        });

    }, [])
    const [name, setName] = useState('');
    return (

        <div className='mycard'>
            <div className='card auth-card'>
                <h2>Ourgram</h2>
                Name<input type="text"
                    placeholder='name'
                    value={name}
                    className='validate'
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ChangeName;