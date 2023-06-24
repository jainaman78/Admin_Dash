import React, { useContext } from 'react'
import "./Main.css"
import { Theme } from '../Theme'
import Header from '../Components/Header/Header'
import Content from '../Content/Content'

const Main = () => {
    const {DarkTheme} = useContext(Theme)
  return (
    <div className={`main ${DarkTheme && "dark"}`}>
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default Main;
