import React, { useContext } from 'react'
import "./Header.css"
import img from "./user1.png";
import { Theme } from '../../Theme'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { TbMessage, TbMessages } from 'react-icons/tb'
import { HiOutlineLogout,HiOutlineMoon } from 'react-icons/hi'
import { RiSettingsLine } from 'react-icons/ri'
import { IoMdAnalytics } from 'react-icons/io'
const Header = () => {
    const {DarkTheme,setDarkTheme}=useContext(Theme)
    function changeTheme(){
        setDarkTheme(!DarkTheme);
    }

  return (
    <header className={` ${DarkTheme && "dark"}`}>
        <div className="search-bar">
            <input type="text" placeholder='search.....' />
            <BiSearch className='icon'></BiSearch>
        </div>
        <div className="tools">
            <AiOutlineUser className='icon'></AiOutlineUser>
            <TbMessages className='icon'></TbMessages>
            <IoMdAnalytics className="icon"></IoMdAnalytics>

            <div className="divider"></div>
            <HiOutlineMoon className='icon' onClick={changeTheme}></HiOutlineMoon>
            <RiSettingsLine className='icon'></RiSettingsLine>
            <HiOutlineLogout className="icon"></HiOutlineLogout>
            <div className="divider">
            </div>
            <div className="user">
                <img src={img} alt="" className='profile-img' />
            </div>
        </div>
      
    </header>
  )
}

export default Header;
