export interface CountryInfo {
    id: string;
    name: string;
    dataType: string;
  }


  export interface University {
    universityId: string;
    name: string;
    countryId: string;
  }

  export interface Faculty {
    faculityId: string;
    name: string;
    universityId: string;
    countryId: string;
  }