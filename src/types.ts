export enum Regions {
    germany = "de",
    usa = "en",
    poland = "pl",
    turkey = "tr",
  }
  
export type requestType = {
    region: Regions;
    seed: number;
    errors: number;
    page: number;
  };
  
  
  
export type dataType = {
    id: string;
    name: string;
    email: string;
    phone: string;
    house: string;
    street: string;
    city: string;
    country: string;
    zipCode: string;
};