import React from 'react';

import styles from './Loading.module.scss';
import pokeball from '../../assets/patterns/pokeball.svg'

export function Loading(){
  return (
    <div className={styles.loadingContent}>
      <span>Loading...</span>
      <img src={pokeball} className={styles.imgBall} />
      {/* <svg>
        <use xlinkHref={pokeball} fill="color" />
      </svg> */}
    </div>
  );
}
