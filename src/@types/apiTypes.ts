type mediaType = {
  type: string;
  creator: string;
  identifier: string;
};

type levelType = {
  gid: string;
  name: string;
};

type gadmType = {
  level0?: levelType;
  level1?: levelType;
  level2?: levelType;
};

export type GBIFType = {
  key: number;
  kingdomKey: number;
  kingdom: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  species: string;
  scientificName: string;
  media: Array<{
    type: string;
    creator: string;
    license: string;
    rightsHolder: string;
    identifier: string;
  }>;
  recordedBy: string;
  country: string;
  stateProvince: string;
  locality: string;
  municipality: string;
  basisOfRecord: string;
  gadm: gadmType | null;
  vernacularName: string;
};

export type resultType = {
  count: number;
  limit: number;
  results: Array<GBIFType>;
};

export type infoType = {
  title: string;
  creator: string;
  publisher: string;
  rightsHolder: string;
  identifier: string;
};
