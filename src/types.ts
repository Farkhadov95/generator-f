export enum Regions {
    spain = "es",
    usa = "en",
    poland = "pl",
    turkey = "tr",
  }
  
export type requestType = {
    region: Regions;
    seed: number;
    errors: number;
  };
  
  
  
export type dataType = {
    name: string;
    email: string;
    phone: string;
    house: string;
    street: string;
    city: string;
    country: string;
    zipCode: string;
};