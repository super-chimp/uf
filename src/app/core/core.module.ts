import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AwsService } from './aws-service.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ AwsService ]
})
export class CoreModule { }