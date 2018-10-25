import { Component } from '@angular/core';
import { AwsService } from './core/aws-service.service';
import { Username } from './shared/models';


@Component({
  selector: 'userflip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userflip';
  un: any;
  topOffer: string

  constructor(private awsService: AwsService) {}

  ngOnInit() {
    this.awsService.getUsername('coolname')
    .subscribe((username: any) => { 
      if (username.body) {
        this.un = JSON.parse(username.body);
      }
    });

  }
 
}
