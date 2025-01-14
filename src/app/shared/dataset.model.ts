export interface Place {
  id: string;
  address: Address[];
}

export interface Address {
  name: string;
  streetNumber: string;
  streetName: string;
  streetType: string;
  locality: string;
  state: string;
  esaId: string;
  postCode: string;
  latitude: string;
  longitude: string;
}

export interface Characteristic {
  name: string;
  value: string;
}
export interface Dataset {
  id: string;
  status: string;
  type: string;
  place: Place[];
  characteristic: Characteristic[];
}

export interface Details {
  data: Dataset[];
}

export interface DataWrapper {
  details: Details;
}

export interface RootObject {
  data: DataWrapper;
}
