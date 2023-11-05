import styles from "./Card.module.scss";
import Plantae from "../../assets/Badges/Plantae.svg";
import themes from "../../styles/themes/theme.json";
import { TiLocation } from "react-icons/ti";

import { GBIFType } from "../../@types/apiTypes";
import { taxonBadges } from "../Badges";

// <h3>{occurrence.media[0].creator}</h3>

export function Card(props: { item: GBIFType }) {
  const { item } = props;
  const wrapper = {
    borderLeft: "10px solid cadetblue",
  };

  return (
    <div
      key={item.key}
      className={styles.card}
      style={{
        backgroundColor: themes.theme.taxonColors[item.kingdomKey],
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
            className={styles.showcaseImg}
            src={item.media[0].identifier}
            alt="Imagem ilustrativa"
          />
          <figcaption className={styles.figcaption}>
            {item.scientificName}
          </figcaption>
          <img
            className={styles.badgeKingdom}
            src={taxonBadges[item.kingdomKey]}
            alt="Grass type"
          />
        </figure>

        <div className={styles.midCard}>
          <TiLocation size={18} />
          <span>{item?.gadm?.level2?.name}, </span>
          <span>{item?.gadm?.level1?.name ?? item?.locality}, </span>
          <span>{item?.gadm?.level0?.name ?? item?.country}</span>
        </div>

        <dl className={styles.taxonInfos}>
          <div key="bor">
            <dt>BasisOfRecord</dt>
            {/* <dd>{item.kingdom}</dd> */}
            <dd>{item.basisOfRecord}</dd>
          </div>
          <div key="kin">
            <dt>Kingdom</dt>
            <dd>{item.kingdom}</dd>
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
          <div key="vn">
            <dt>Vernacular Name</dt>
            <dd>{item.vernacularName}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
