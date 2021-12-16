import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetService {
  constructor(private http:HttpClient) { }

  all_data(params) {
     //return this.http.get('http://13.127.119.140:83/api/v1/machines/machine_process12?machine_ip='+ params)
    return this.http.get('http://192.168.1.48:4003/api/v1/machines/machine_process12?machine_ip='+ params)
  }   
accpet(status,id) {
        //   return this.http.post('http://13.127.119.140:83/api/v1/shift_part_update?id='+ id ,{id: id,status});
              return this.http.post('http://192.168.1.48:4003/api/v1/shift_part_update?id='+ id ,{id: id,status});
   }
   test(params){
        // return this.http.get('http://13.127.119.140:83/api/v1/shift_part_count?machine_ip='+ params)
                  return this.http.get('http://192.168.1.48:4003/api/v1/shift_part_count?machine_ip='+ params)
   }

  accpet1(data,ip) {
          //  return this.http.post('http://13.127.119.140:83/api/v1/toradax_test' ,{Reasons: data,ip: ip});
                       return this.http.post('http://192.168.1.48:4003/api/v1/toradax_test' ,{Reasons: data,ip: ip});
      }
    

}
