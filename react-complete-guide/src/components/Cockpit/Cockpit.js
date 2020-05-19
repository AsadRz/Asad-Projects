import React from 'react';
import styled from 'styled-components';
const cockpit = props =>
{
    const StyledButton = styled.button`
    background-color: green;
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover: {
        background-color: lightgreen;
        color: black;
    }
    `;

    let classes = "";
    if (props.persons.length <= 2) {
        classes = "red";
    }
    if (props.persons.length <= 1) {
        classes = "red bold";
    }

    return (
        <React.Fragment>
            <h1 className={classes}>Hi, I am going to Learn React From Scratch to an Expert Level...</h1>
            <StyledButton
                onClick={props.clicked} >
                Person Toggler
        </StyledButton>
        </React.Fragment>
    );
}

export default cockpit;