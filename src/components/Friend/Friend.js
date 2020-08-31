import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const {name, email, id} = props.friend;

    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`)
    }
    const friendStyle = {
        border:'1px solid purple',
        padding:'10px', 
        margin:'15px' ,
        borderRadius:'10px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            {/* <Link to={`/friend/${id}`}>
                <button>Show detail of {id}</button>
            </Link> */}
            <button onClick={() => handleClick(id)}>Show detail of {id}</button>
        </div>
    );
};

export default Friends;