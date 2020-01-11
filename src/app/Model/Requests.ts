export interface LoginIndividualRequest {

  username: string;
  password: string;

}

export interface LoginTransporterRequest {

  username: string;
  password: string;

}

export interface RegisterTransporterRequest {

  username: string;
  password: string;
  businessname: string;
  businesstitle: string;
  objective: string;
  website: string;
  vatnumber: number;
  businessphone: string;
  fax: string;
  email: string;
  contactname: string;
  contactphone: string;
  mobilephone: string;
  address: string;
  streetno: number;
  postalcode: number;
  country: number;
  region: number;
  prefecture: number;
  city: string;
  acceptstermsofuse: boolean;

}

export interface RegisterIndividualRequest {

  username: string;
  password: string;
  email: string;
  phonenumber: string;
  firstname: string;
  lastname: string;
  landline: string;
  gender: number;
  acceptstermsofuse: boolean;

}
