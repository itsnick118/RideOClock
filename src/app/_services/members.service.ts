import { Member } from './../_models/member';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  getMemberbyid(id:number): Observable<Member>{
    return this.http.get<Member>(this.baseUrl+'members/'+id);
  }


  updateMember(membobj):Observable<any>{
    return this.http.put<number>(this.baseUrl+'members/'+membobj.id,membobj);

  }



  deletemember(id):Observable<any>
  {
    return this.http.delete<any>(this.baseUrl+"members/"+id);
  }



}
