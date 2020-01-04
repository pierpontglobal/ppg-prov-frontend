import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';
import green from '../../images/green.svg'
import axios from '../utils/axios'
import { element } from 'prop-types';

const { Title } = Typography;

const DummyApps = [
  {
    title: "Pierpont Global",
    logo: "https://app.pierpontglobal.com/images/signinpage/ppg_logo.svg",
    route: "https://app.pierpontglobal.com"
  },
  {
    title: "Pierpont Logistics",
    logo: "https://pierpontlogistics.com/logos/loading_logo.png",
    route: "https://app.pierpontlogistics.com"
  },
  {
    title: "Pierpont Investors",
    logo: "https://svgshare.com/i/Gf8.svg",
    route: "https://app.pierpontlogistics.com"
  }
]

const AppHolder = styled.div`
width: 90%;
margin: 0 auto;
left: 0;
right: 0;
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-content: center;
justify-content: center;
align-items: center;
justify-items: center;
`;

const AppTagLayout = styled.div`
width: 162px;
height: 162px;
background: white;
display: flex;
flex-direction: column;
border-radius: 8px;
margin-top: 32px;
margin-left: 32px;
margin-right: 32px;
align-content: center;
justify-content: center;
align-items: center;
justify-items: center;
-webkit-box-shadow: 10px 10px 51px -29px rgba(0,0,0,0.4);
-moz-box-shadow: 10px 10px 51px -29px rgba(0,0,0,0.4);
box-shadow: 10px 10px 51px -29px rgba(0,0,0,0.4);
transition: all .2s ease-in-out;
cursor: pointer;
:hover {
  transform: scale(1.1);
}
`;

const AppTag = ({ title, image, route }) => {
  return <AppTagLayout onClick={() => { window.location = route }}>
    <img height='80px' src={image}></img>
    {title}
  </AppTagLayout>
}

const MyApps = () => {
  const [availableApps, setAvailableApps] = useState([])
  const [allowedApps, setAllowedApps] = useState([])
  useEffect(() => {
    axios.get('/apps').then(function (response) {
      setAvailableApps(response.data);
    })
    axios.get('/apps/owned').then(function (response) {
      setAllowedApps(response.data);
    })
  }, [])

  console.log(allowedApps);
  console.log(availableApps);
  return <>
    <Title style={{ textAlign: "center", fontWeight: 100 }}>Good morning Hector Acosta</Title>
    <AppHolder>
      {availableApps.map(app => <AppTag title={app.title} image={app.logo} route={app.location} />)}
    </AppHolder>
  </>
}

export default MyApps;