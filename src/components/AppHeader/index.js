import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
//import logo from '../../assets/logo.svg'
import logo from "../../assets/group-4-logo.jpg";
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <h1 className='app-title'>Grupo 4 | Arellano</h1>
              <p className='app-intro'>
                2020 | Grupo 4 utilidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
