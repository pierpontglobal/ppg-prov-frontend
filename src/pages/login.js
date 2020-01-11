import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginForm from "../components/loginForm"
import logo from '../images/dark.svg'
import { Logo, LoginView } from '../components/util'

const LoginPage = () => (
  <Layout>
    <SEO title="Login" description="Provisioning site" />
    <LoginView>
      <Logo src={logo} />
      <LoginForm />
    </LoginView>
  </Layout>
)

export default LoginPage
