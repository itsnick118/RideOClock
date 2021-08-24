import { Member } from './../_models/member';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string): Observable<Member> {
    return this.http.get<Member>(
      this.baseUrl + 'users/' + username);
  }

  postMembers(members: Member) {
    return this.http.post(this.baseUrl + 'users', members);
  }

  updateMember(membobj): Observable<any> {
    return this.http.put<number>(
      this.baseUrl + 'members/' + membobj.id,
      membobj
    );
  }

  deletemember(id): Observable<any> {
    return this.http.delete<any>(this.baseUrl + 'members/' + id);
  }

  getMemberbyid(username: number): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}
