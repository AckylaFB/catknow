type Breed = {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
  temperament: string;
  origin: string;
  country_code: string;
  description: string;
  life_span: string;
  alt_names: string;
  wikipedia_url?: string;
};

export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breed[];
};
