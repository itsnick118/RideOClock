import { Member } from './../_models/member';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  postmembers(pmembers: any) {
    return this.http.post(this.baseUrl + 'members', pmembers);
  }

  signup(pmembers: any) {
    return this.http.post(this.baseUrl + 'members', pmembers);
  }

  /*
  getMembers(){
      return this.http.get(this.baseUrl+'members');

  }
*/

  getMembers(): Observable<Member[]> {
    return this.http
      .get<Member[]>(this.baseUrl + 'members')
      .pipe(map((response) => response));
  }

  postMembers(member:Member):Observable<Member>{
    return this.http.post<Member>(this.baseUrl, member)
  }
}
