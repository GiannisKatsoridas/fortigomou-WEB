import {Individual, Transporter} from './Entities';

export interface TestMethodResponse {

  result: string;
}

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
