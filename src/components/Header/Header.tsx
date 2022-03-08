import gbifLogo from '../../assets/logos/full_logo_white.svg'
import { VscGithub } from 'react-icons/vsc'
import styles from './Header.module.scss'

export function Header(){
  return(
    <nav className={styles.headerContent}>
      <div>
        <h1>
          PokeReal:Dex
        </h1>
        <p>A Real Life Pokedex</p>
      </div>
      <div style={{display: "flex"}}>
        <div className={styles.gbifLogo} >
          <a href="https://www.gbif.org/" target={"_blank"}>
            <img src={gbifLogo}  alt="GBIF Logo" height={40}/>
          </a>
        </div>
        <a href="https://github.com/navegantes" target={"_blank"}>
          <VscGithub size={32}/>
          <span style={{fontSize: "10px"}}>Created by Navegantes</span>
        </a>
      </div>
    </nav>
  )
}