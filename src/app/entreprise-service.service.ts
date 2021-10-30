import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Entreprise } from 'src/entreprise';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EntrepriseServiceService {
private baseUrl="http://localhost:8181/app/addEntreprise";
  constructor(private httpClient:HttpClient) { }

  ajouterEntreprise(entreprise:Entreprise):Observable<Object> {
return this.httpClient.post(`${this.baseUrl}`,entreprise);
  }
}
