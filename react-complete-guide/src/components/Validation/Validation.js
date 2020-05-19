import React from 'react';

const Validation = (props) =>
{
    let message = "Text Long enough";
    if (props.textLength <= 5) {
        message = "Text Too Short";
    }
    return (
        <p>{message}</p>
    );
}

export default Validation;