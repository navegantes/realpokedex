import React, { FormEvent, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa'
import { resultType } from '../../@types/apiTypes';
import {
  Card,
  Loading } from '../../components'
import api from '../../services/api';

import styles from './MainContent.module.scss';

export function MainContent(){
  const [GBIFData, setGBIFData] = useState({} as resultType)
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
    // api.get("/occurrence/search?q=felis catus&mediaType=StillImage&limit=20")
    apiGetOccurrenceRequest()
  }, [])
  
  function apiGetOccurrenceRequest(){
    const queryParams = {
      params: {
        q: searchTerm,
        mediaType: "StillImage",
        limit: "40",
        // country: "US"
        }
      }

    api.get("/occurrence/search?", queryParams)
    .then(response => {
      setGBIFData(response.data)
    })
    .catch((err) => {
      alert("ops! ocorreu um erro " + err);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  function handleSearchTerm(event: FormEvent){
    event.preventDefault()

    if(!searchTerm.trim()){
      return;
    }

    setIsLoading(true)
    console.log("REQUESTING API!!");
    apiGetOccurrenceRequest()
    setSearchTerm("")
  }
  
  return (
    <>
      {/* <div className={styles.divRoot}> */}
        <form
          className={styles.form}
          onSubmit={handleSearchTerm}
        >
          <input
            type="text"
            name="inputSearch"
            value={searchTerm}
            onChange={event => {
              setSearchTerm(event.target.value)
            }}
            placeholder="Search for a species name (scientific name)"
          />
          <button type="submit" value="Enviar">
            <FaSearch className={styles.iconButton} size={22}/>
          </button>
        </form>
        
        <div className={styles.mainWrapper}>
          <p style={{
            marginLeft: "2em"
          }}>Number of Occurencies: {GBIFData.count}</p>
          <main className={styles.mainContent}>
            {isLoading ? (
              <Loading />
              ):(
                <>
                  {/* <p>Numero de ocorr??ncias: {GBIFData.count}</p> */}
                  { GBIFData.results.map(item => {
                    return(
                      <Card item={item}/>
                      )
                    })
                  } 
                </>
            )}
          </main>
        </div>
      {/* </div> */}
    </>
  );
}