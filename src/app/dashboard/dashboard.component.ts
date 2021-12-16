import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
   ipaddress :any;
   data:any =[];
   all_data :any;
   reason:any;
   datas:any;
   languagenew:any;
   reasontest:any;
   reason_name:any;
   reason_name1:any;
   image_value:any;
   selectedlan:any;
   reasonval:any;
   reasonvals:any;
   test:boolean=true;
  constructor(private dashboardService: DashboardService,private datePipe: DatePipe,private route: ActivatedRoute,private translate: TranslateService) { 
    this.reason_name= [
      {value: 'Tea Break'},
      {value: 'Lunch Break'},
      {value: 'Setting'},
      {value: 'Inspection'},
      {value: 'No Operator'},
      {value: 'Tools Not Available'},
      {value: 'Coolant Change'},
      {value: 'Scrap Removed'},
      {value: 'No Drawing'},
      {value: 'Program Not Ready'},
      {value: 'Preventive Maintenance'}, 
      {value: 'Planned Maintenance'},
      {value: 'Breakdown Maintenance'},
      {value: 'Supervisor Not Available'}, 
      {value: 'Crane Not Available'},
      {value: 'Dial Gauge Not Available'},
      {value: 'Process Plan Not Available'}, 
      {value: 'Route Card Not Available'}
    ];
    if(localStorage.getItem("chLanguage") != undefined )
    {
      this.translate.use(localStorage.getItem("chLanguage"))
    }else
    {
    this.translate.use('en');

    }
    
        //  setTimeout(() => {  
        //    this.test=true;
        //    // this.ipaddres_services();
        //             }, 5000); 
              }
      //    image_auto(){
      //    this.dashboardService.image().pipe(untilDestroyed(this)).subscribe( res => {
      //     this.image_value = res;
      //     console.log(this.image_value.setting_name);
      //   });
      // }

ngOnInit() {
       this.languagenew = localStorage.getItem("chLanguage");
       this.route.params.subscribe( params => this.ipaddress = params.ip );
       this.ipaddres_services();
       this.dashboardService.test(this.ipaddress).pipe(untilDestroyed(this)).subscribe( res => {
       this.datas = res;
    }); 
    }
    valuetest(){
      this.test=false; 
      setTimeout(() => {  
        this.test=true;
                 }, 5000); 
           
    }

   language(languagenew){
     this.translate.use(languagenew);
     localStorage.setItem("chLanguage", languagenew);
      this.languagenew = localStorage.getItem("chLanguage");
   }


    ipaddres_services(){
       this.dashboardService.all_data(this.ipaddress).pipe(untilDestroyed(this)).subscribe( res => {
       this.data = res;
    });

        }

send(testing){
  this.reasonval = testing;
  // localStorage.setItem("reason", testing)
  // this.reasonvals = localStorage.getItem("reason");
  // console.log(this.reasonvals)
  this.test=false; 
  setTimeout(() => {  
    this.test=true;
             }, 10000); 
this.dashboardService.accpet1(testing,this.ipaddress).pipe(untilDestroyed(this)).subscribe( res => {
  this.reason = res;
  console.log(this.reason);
});
this.ipaddres_services();

}
autore(){
  this.dashboardService.test(this.ipaddress).pipe(untilDestroyed(this)).subscribe( res => {
    this.datas = res;
  });
  
}

accept(values,id){
  this.dashboardService.test(this.ipaddress).pipe(untilDestroyed(this)).subscribe( res => {
   this.datas = res;
   this.dashboardService.accpet(values,id).pipe(untilDestroyed(this)).subscribe( res => {
   this.reasontest = res;
  
  });

    });
}
ngOnDestroy(){}

}
