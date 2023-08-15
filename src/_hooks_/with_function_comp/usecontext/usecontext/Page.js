import React from 'react';
import Layout from './Layout';

const user = {
    name: 'hesham',
    age: 22
  }
const theme = {name: 'dark-theme'};

export const userContext = React.createContext();
export const themeContext = React.createContext();
const Page = () => {
  return (
    <userContext.Provider value={user}>
      <themeContext.Provider value={theme}>
        <Layout/>
      </themeContext.Provider>
    </userContext.Provider>
  )
}

export default Page
