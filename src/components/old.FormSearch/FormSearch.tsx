import { useState, FormEvent } from 'react';
import styles from './FormSearch.module.scss'
import api from '../../services/api';

export function FormSearch(){
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTerm(event: FormEvent){
    event.preventDefault()

    const queryParams = { params: {
                        q: "",
                        mediaType: "StillImage",
                        limit: "10",
                        }
                      }

    if(!searchTerm.trim()){
      return;
    }

    api.get("/occurrence/search?", queryParams)
    .then(response => {
      // setGBIFData(response.data)
      // setIsLoading(false)
    })
    .catch((err) => {
      alert("ops! ocorreu um erro " + err);
    })
  }

  return(
    <form
    className={styles.form}
    onSubmit={handleSearchTerm}>
      <input
        type="text"
        name="inputSearch"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        // width={90}
        // rows={1}
        placeholder="Busque por uma espécie"
      />
      <button className={styles.submitButton} type="submit" value="Enviar">Enviar</button>
    </form>
  )
}