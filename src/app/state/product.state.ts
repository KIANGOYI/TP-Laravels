import { DataStateEnum } from "./product.enum";
export interface AppDataState<T>{
  dataState?:DataStateEnum,
  data?:T,
  errorMessage:string
}
