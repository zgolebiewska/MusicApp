import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Composer} from "./composer";
import {environment} from "../../../environments/environment";


@Injectable({providedIn: 'root'})
export class ComposersService {

  private composersUrl= environment.apiBaseUrl;
  constructor(private http: HttpClient) {
  }

  public getComposers(): Observable<Composer[]>{
    return this.http.get<Composer[]>(
      `${this.composersUrl}/composers`
    );
  }

}
