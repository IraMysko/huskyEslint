import React from 'react';

type PropsType = {
    user: string | undefined,
    city: string | undefined,
}


const User: React.FC<PropsType> = ({user, city}) => {
console.log("RENDER");
  
    return (
        <div>
            <h2>All added users </h2>
            <div>{user}</div>
            <div>{city}</div>
        </div>
    )
};

export default React.memo(User);