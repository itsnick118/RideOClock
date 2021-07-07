import { Member } from './../_models/member';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMembers(){
    return this.http.get<Member[]>(this.baseUrl+'members');
  }

  postMembers(members: Member) {
    return this.http.post(this.baseUrl + 'members', members);
  }



}
