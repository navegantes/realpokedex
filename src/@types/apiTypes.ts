type mediaType = {
  type: string;
  creator: string;
  identifier: string;
}

export type GBIFType = {
  key: number;
  kingdomKey: number;
  kingdom:string;
  phylum: string;
  class: string;
  order:  string;
  family: string;
  species: string;
  scientificName: string;
  media: Array<{
    type: string;
    creator: string;
    identifier: string;
  }>;
  recordedBy: string;
  country: string;
  stateProvince: string;
  locality: string;
}

export type resultType = {
  count: number;
  limit: number;
  results: Array<GBIFType>;
}

export type infoType = {
  title: string;
  creator: string;
  publisher: string;
  rightsHolder: string;
  identifier: string;
  
}