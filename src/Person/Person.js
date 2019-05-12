import React from 'react';

const person = (props) => {
    // return <p>My name is {props.name} and I am {props.age} years old</p>
    return (
        <div>
            <p>My name is {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
