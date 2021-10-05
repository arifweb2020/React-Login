import React, { useState, useEffect } from 'react';

function Profile() {
    const [data, setData] = useState([]);
    const [localdata,setLocaldata]=useState([]);

    useEffect(() => {
        getData();
    })

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const res1 = await res.json();
        setData(res1);
        localStorage.setItem('user-list', JSON.stringify(res1))
    }

    useEffect(() => {
        const userList = JSON.parse(
            localStorage.getItem('user-list')
        );

        if (userList) {
            setLocaldata(userList);
        }
    }, []);

    const clearItem = () =>{
        window.localStorage.removeItem('user-list')
        setTimeout(() => {
            window.location.href = '/profile';
        }, 9000);
    }
    return (
        <>
            <div className="jumbotron">
                <h1>User Profile </h1>
                <p>Bootstrap is the most popular HTML, CSS...</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {
                            data.map((item, index) => {
                                return <h1 key={index}>{item.name}</h1>
                            })
                        }
                    </div>
                    <div className="col-lg-6">
                        <button className="btn btn-sm btn-warning" onClick={clearItem}>Clear</button>
                    {
                            localdata.map((item, index) => {
                                return <h1 key={index}>{item.username}</h1>
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    );
}

export default Profile;