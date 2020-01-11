import React from "react"
import styled from 'styled-components'
import logo from '../images/dark.svg'

export const Logo = styled.div`
width: 100%;
background-image: url(${logo});
background-repeat: no-repeat;
background-position: center;
background-size: 60%;
height: 100px;
`;

export const LoginView = styled.div`
min-height: 300px;
padding: 20px;
position: relative;
max-width: 375px;
margin: 0 auto;

@media only screen and (min-width: 425px) {}
@media only screen and (min-width: 768px) {}
@media only screen and (min-width: 1024px) {}

`