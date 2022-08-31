import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoserviceService } from 'src/app/services/todoservice.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  myform:FormGroup;

  id:any;
  constructor(private router: ActivatedRoute, private service:TodoserviceService,private route:Router) { 
    this.router.paramMap.subscribe((e:any)=>{
      console.log(e);
      this.id=e.params.id;
    },(err)=>{
      console.log(err);
    })
    this.myform = new FormGroup({
      todo:new FormControl()
    })
  }

  myTodoData:any;
  ngOnInit(): void {
    this.service.getDataById(this.id).subscribe((e)=>{
      console.log(e);
      this.myTodoData=e;
      this.myform = new FormGroup({
        todo:new FormControl(this.myTodoData.todo)
      })
    },(err)=>{
      console.log(err);
    })
  }

  edit(){
    this.service.editData(this.id,this.myform.value).subscribe((e)=>{
      console.log(JSON.stringify(e));
      this.route.navigate(['/']);
    },(err)=>{
      console.log(err);
    })
  }

}
