import React from 'react';
import './Person.css';
import styled from 'styled-components';

const person = (props) =>
{
    const StyledDiv = styled.div`
    {
        width: 60%;
        margin: auto;
        box-shadow: 0 2px 2px #eeeeee;
        text-align: center;
        border: 1px solid #eee;
        padding: 20px;
        margin-top: 15px;
    }
    `
    return (
        <StyledDiv>
            <p onClick={props.clickHandler}>I'm {props.name}! and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeHandler} value={props.name} />
        </StyledDiv>)
}

export default person;