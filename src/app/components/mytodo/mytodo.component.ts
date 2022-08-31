import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-mytodo',
  templateUrl: './mytodo.component.html',
  styleUrls: ['./mytodo.component.css']
})
export class MytodoComponent implements OnInit {

  constructor(private service:TodoserviceService) { }

  myform:FormGroup = new FormGroup({
    todo: new FormControl()
    // date:new FormControl()
  })

  render(){
    this.service.getData().subscribe((e)=>{
      this.data=e;
    },(err)=>{
      console.log(err);
    })
  }

  data:any;
  ngOnInit(): void {
    this.render();
  }
  formSubmit(){
    console.log(this.myform.value);
    
    this.service.postData(this.myform.value).subscribe((e)=>{
      console.log(e);
      this.render();
      this.myform.reset();
    },(err)=>{
      console.log(err);
    })
  }
  delFun(id:any){
    this.service.deleteData(id).subscribe((e)=>{
      console.log(e);
      this.render();
    },(err)=>{
      console.log(err);
    })
  }
}
