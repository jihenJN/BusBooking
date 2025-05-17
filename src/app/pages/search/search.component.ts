import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe,FormsModule,DatePipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  locations: Observable<any[]> = new Observable<any[]>();
  searchParams :any ={fromLocation:'',toLocation:'',travelDate:''};
  busesList:any[]=[];

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.locations = this.masterService.getLocations();
  }

  onSearch(){
    const  { fromLocation, toLocation, travelDate } = this.searchParams;
    this.masterService.searchBuses(fromLocation, toLocation, travelDate ).subscribe((res:any)=>{
      this.busesList=res;
    })
  }
}
