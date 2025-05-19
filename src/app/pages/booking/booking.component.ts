import { MasterService } from './../../services/master.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  scheduleId: number = 0;
  ScheduledDetails: any;
  seatsArray: number[] = [];
  availableSeatsArray: number[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private masterService: MasterService
  ) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.scheduleId = res.id;
      this.getScheduledDetails();
    });
  }

  getScheduledDetails() {
    this.masterService
      .getScheduledById(this.scheduleId)
      .subscribe((res: any) => {
        this.ScheduledDetails = res[0];

        for (
          let index = 1;
          index <= this.ScheduledDetails.totalSeats;
          index++
        ) {
          this.seatsArray.push(index);
        }

        for (
          let index = 1;
          index <= this.ScheduledDetails.availableSeats;
          index++
        ) {
          this.availableSeatsArray.push(index);
        }
      });
  }

  checkIfSeatBooked(seatNum: number) {
    return this.availableSeatsArray.indexOf(seatNum);
  }
}
