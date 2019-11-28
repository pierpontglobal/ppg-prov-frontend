import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from 'react-image'
import SEO from "../components/seo"
import styled from 'styled-components'
import LoginForm from "../components/login_form"
import logo from '../images/dark.svg'

const Logo = styled.div`
width: 100%;
background-image: url(${logo});
background-repeat: no-repeat;
background-position: center;
background-size: 60%;
height: 100px;
`;

const LoginView = styled.div`
min-height: 300px;
padding: 20px;
position: relative;
max-width: 375px;
margin: 0 auto;

@media only screen and (min-width: 425px) {}
@media only screen and (min-width: 768px) {}
@media only screen and (min-width: 1024px) {}

`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LoginView>
      <Logo src={logo} />
      <LoginForm />
    </LoginView>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
