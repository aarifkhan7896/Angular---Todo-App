import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("http://localhost:3000/todo");
  }
  postData(data:any){
    return this.http.post("http://localhost:3000/todo",data);
  }
  deleteData(id:any){
    return this.http.delete("http://localhost:3000/todo/"+id);
  }
  editData(id:any,data:any){
    return this.http.put("http://localhost:3000/todo/"+id,data);
  }
  getDataById(id:any){
    return this.http.get("http://localhost:3000/todo/"+id);
  }
}
