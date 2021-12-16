import { Component, OnInit } from '@angular/core';
import { NetService } from './net.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.css'],
  providers: [DatePipe]
})
export class NetComponent implements OnInit {
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
  test:boolean=true;
  reasonval:any;
  constructor(private dashboardService: NetService,private datePipe: DatePipe,private route: ActivatedRoute,private translate: TranslateService) { 
  this.reason_name= [
    {value: 'Setting'},
    {value: 'Breakdown'},
    {value: 'Bobbin changing'},
    {value: 'code changing(Yarn)'},
    {value: 'Maintenance'},
    {value: 'Operator shortage'},
    {value: 'Size & Depth changing'},
    {value: 'Yarn shortage'},
    {value: 'No job order'}
  ];
  if(localStorage.getItem("chLanguage") != undefined )
  {
    this.translate.use(localStorage.getItem("chLanguage"))
  }else
  {
  this.translate.use('en');

  }
                
       }
   

ngOnInit() {
//this.image_auto();
     this.languagenew = localStorage.getItem("chLanguage");
    this.route.params.subscribe( params => this.ipaddress = params.ip );
    //this.ipaddress = this.route.params._value.ip;
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
  this.test=false; 
  setTimeout(() => {  
    this.test=true;
             }, 10000); 
this.dashboardService.accpet1(testing,this.ipaddress).pipe(untilDestroyed(this)).subscribe( res => {
this.reason = res;
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
