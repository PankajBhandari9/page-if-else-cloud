import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user-registrations',
  templateUrl: './new-user-registrations.component.html',
  styleUrls: ['./new-user-registrations.component.scss']
})
export class NewUserRegistrationsComponent implements OnInit {

  @Input() newUser!:any[];

  ngOnInit(): void {
  }

}
