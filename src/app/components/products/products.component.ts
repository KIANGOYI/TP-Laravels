import { AppDataState} from './../../state/product.state';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../models/product.model';
import { DataStateEnum } from 'src/app/state/product.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$:Observable<AppDataState<Iproduct[]>>|undefined;
  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
  this.products$=this._productsService.getAllProducts()
    .pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data} as AppDataState<Iproduct[]>)),
      startWith({dataState:DataStateEnum.LOADING} as AppDataState<Iproduct[]>),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message} as AppDataState<Iproduct[]>))
    );
  }
  onGetAvailableProducts(){
    this.products$=this._productsService.getAvailableProducts()
    .pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data} as AppDataState<Iproduct[]>)),
      startWith({dataState:DataStateEnum.LOADING} as AppDataState<Iproduct[]>),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message} as AppDataState<Iproduct[]>))
    );
  }

  onGetSelectedProducts(){
    this.products$=this._productsService.getSelectedProducts()
    .pipe(
      map(data=>({dataState:DataStateEnum.LOADED, data:data} as AppDataState<Iproduct[]>)),
      startWith({dataState:DataStateEnum.LOADING} as AppDataState<Iproduct[]>),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message} as AppDataState<Iproduct[]>))
    );
  }
}

