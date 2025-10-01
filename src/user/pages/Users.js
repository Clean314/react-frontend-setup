import React from 'react';

import UsersList from '../components/UsersList';

const Users = () =>{
    const USERS = [{
        key : '1',
        id : '1',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        name : '111',
        placeCount : '111'
    }];

    return (
       <UsersList items={USERS}/>
    );
}

export default Users;