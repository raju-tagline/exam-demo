export interface IHttpRequestResponse {
  url: string;
  body: IBody;
  reportProgress: boolean;
  withCredentials: boolean;
  responseType: string;
  method: string;
  headers: IHeaders;
  context: IContext;
  params: IParams;
  urlWithParams: string;
}

export interface IBody {
  email: string;
  password: string;
}

export interface IHeaders {
  normalizedNames: INormalizedNames;
  lazyUpdate: null;
  headers: IHeaders2;
}

export interface INormalizedNames {}

export interface IHeaders2 {}

export interface IContext {
  map: IMap;
}

export interface IMap {}

export interface IParams {
  updates: null;
  cloneFrom: null;
  encoder: IEncoder;
  map: IMap2;
}

export interface IEncoder {}

export interface IMap2 {}
