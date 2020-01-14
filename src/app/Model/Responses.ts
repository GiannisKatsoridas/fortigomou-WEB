import {Individual, Transporter} from './Entities';

export interface GenericResponse {

  isSuccessful: boolean;
  errorMessage: string;

}

export interface LoginIndividualResponse extends GenericResponse {

  individual: Individual;

}

export interface LoginTransporterResponse extends GenericResponse {

  transporter: Transporter;

}

export interface RegisterIndividualResponse extends GenericResponse {

  result: Individual;

}

export interface RegisterTransporterResponse extends GenericResponse {

  result: Transporter;

}

export interface GetCountriesResponse extends GenericResponse {
  
  countries: string[];
  
}
