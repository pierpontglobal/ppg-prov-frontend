import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/loginForm"
import logo from '../images/dark.svg'

const LoginPage = () => (
  <Layout>
    <SEO title="Login" description="Provisioning site" />
    <div style={{
      minHeight: '300px',
      padding: '20px',
      position: 'relative',
      maxWidth: '375px',
      margin: '0 auto'
    }}>
      <div style={{
        width: '100%',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '60%',
        height: '100px'
      }} src={logo} />
      <LoginForm />
    </div>
  </Layout>
)

export default LoginPage
