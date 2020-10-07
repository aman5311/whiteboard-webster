import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // userDetail : any ;
  // constructor(
  //   private globalAjaxApiHandlerService: GlobalAjaxApiHandlerService
  // ) { }

  // /** login API */
  // attemptAuth(url, credentials): Observable<any> {
  //   return this.globalAjaxApiHandlerService.post(url, credentials)
  //     .pipe(map(data => data));
  // }


}
