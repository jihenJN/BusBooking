import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl ='http://localhost:3000/'
  constructor(private http:HttpClient) {

   }

   getLocations() : Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'busLocations');
   }

   searchBuses(from:number,to:number,date:string) : Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}buses?fromLocation=${from}&toLocation=${to}&travelDate=${date}`);
   }

  getScheduledById(id:number): Observable<any[]>{
    console.log(id);
    return this.http.get<any[]>("http://localhost:3000/buses?scheduledId="+id);
   }
}
