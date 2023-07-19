
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  taskArray =  [{taskName: 'Brush teeth', isCompleted: false}];
constructor (){}
 ngOnInit(): void {
   
 }
  onSubmit(form : NgForm){
    console.log(form)

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();
  }

  onDelete(index: number){
    console.log(index);

    this.taskArray.splice(index, 1);
  }
  onCheck(index: number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
