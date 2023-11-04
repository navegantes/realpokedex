import { useState, useEffect } from 'react'
import { Header } from './components'

import styles from './styles/App.module.scss'
import { MainContent } from './components/MainContent/MainContent'

export function App() {
  
  // console.log("RESPOSTA", GBIFData.results)

  return (
    <>
      <Header />
      <div className={styles.divRoot}>
        <MainContent />
      </div>
    </>
  )
}

