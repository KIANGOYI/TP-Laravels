import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../components/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Iproduct[]>{
    let host =environment.host;
    return this.http.get<Iproduct[]>(host+"/products");
  }

  getSelectedProducts():Observable<Iproduct[]>{
    let host =environment.host;
    return this.http.get<Iproduct[]>(`${host}/products?selected=true`);
  }

  getAvailableProducts():Observable<Iproduct[]>{
    let host =environment.host;
    return this.http.get<Iproduct[]>(`${host}/products?available=true`);
  }
}
