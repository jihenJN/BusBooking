import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  locations: Observable<any[]> = new Observable<any[]>();

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getAllLocations();
  }

  getAllLocations() {
    this.locations = this.masterService.getLocations();
  }
}
