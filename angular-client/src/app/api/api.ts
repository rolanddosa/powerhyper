export class Api {
  static readonly PATH = window.location.pathname;
  static readonly API_PREFIX = (Api.PATH.endsWith("/") ? Api.PATH : Api.PATH+"/") + "api/";

  static readonly GET_ELEXON_VALUES = Api.API_PREFIX + "elexon";
}
