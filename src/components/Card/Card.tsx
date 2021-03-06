import styles from './Card.module.scss'
import Plantae from '../../assets/Badges/Plantae.svg'
import themes from '../../styles/themes/theme.json'
import { TiLocation } from 'react-icons/ti'

import { GBIFType } from '../../@types/apiTypes'
import { taxonBadges } from '../Badges';

// <h3>{occurrence.media[0].creator}</h3>

export function Card(props: { item: GBIFType }){
  const { item } = props;
  const wrapper = {
    borderLeft: "10px solid cadetblue",
  }

  return(
    <div
        key={item.key}
        className={styles.card}
        style={{
          backgroundColor: themes.theme.taxonColors[item.kingdomKey]
        }}
        // style={item.class==='Insecta'?wrapper:{}}
        // style={wrapper}
    >
      <div
        className={styles.cardWrapper}
        // style={{backgroundImage: `url(${item.media[0].identifier})`}}
      >
        <figure className={styles.imgCard}>
          <img
            src={item.media[0].identifier}
            alt="Imagem ilustrativa"
          />
          <figcaption>{item.scientificName}</figcaption>
        </figure>

        <div className={styles.midCard} >
          <TiLocation size={18}/>
          <span>Belém, PA, Brasil</span>
        </div>
        {/* <img src={Plantae} alt="Grass type" height={24} /> */}

        <dl
          className={styles.taxonInfos}
        >
          <div key="kin">
            <dt>Kingdom</dt>
            {/* <dd>{item.kingdom}</dd> */}
            <dd>
              <img
                src={taxonBadges[item.kingdomKey]}
                alt="Grass type"
                height={18} />
            </dd>
          </div>
          <div key="phy">
            <dt>Phylum</dt>
            <dd>{item.phylum}</dd>
          </div>
          <div key="cla">
            <dt>Class</dt>
            <dd>{item.class}</dd>
          </div>
          <div key="ord">
            <dt>Order</dt>
            <dd>{item.order}</dd>
          </div>
          <div key="fam">
            <dt>Family</dt>
            <dd>{item.family}</dd>
          </div>
          <div key="spe">
            <dt>Species</dt>
            <dd>{item.species ? item.species : item.scientificName}</dd>
          </div>
          <div key="kk">
            <dt>KingdomKey</dt>
            <dd>{item.kingdomKey}</dd>
          </div>
        </dl>
        <dl
        className={styles.taxonInfos}
        >
          <div>
            <dt>Recorded by</dt>
            <dd>{item.recordedBy}</dd>
          </div>
          <div>
            <dt>Country</dt>
            <dd>{item.country}</dd>
          </div>
          <div>
            <dt>State</dt>
            <dd>{item.stateProvince}</dd>
          </div>
          {/* <div>
            <dt>Right Holder</dt>
            <dd>{item.media[0].rightsHolder}</dd>
          </div>
          <div>
            <dt>Family</dt>
            <dd>{item.media[0].type}</dd>
          </div> */}
        </dl>
      </div>
    </div>
  )
}