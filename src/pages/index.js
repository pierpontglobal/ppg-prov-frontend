import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import logo from '../images/dark.svg'
import FunctionBar from "../components/functionBar"
import MyApps from "../components/indexSections/myApps"

const Sections = [
  <MyApps />,
  <></>,
  <></>,
  <></>
]


const IndexPage = () => {
  const [section, setSection] = useState(0)
  return (
    <Layout>
      <SEO title="Home" description="Provisioning site" />
      <FunctionBar onChange={key => setSection(key)}>
        {Sections[section]}
      </FunctionBar>
    </Layout>
  )
}

export default IndexPage
