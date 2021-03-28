import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeList: any=[];

  ModalTitle:string="";
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeId:0,
      EmployeName:"",
      Departament:"",
      DateOfjoining:"",
      PhotoFileName:"City.jpg"
    }
    this.ModalTitle="Add Employe";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(itemData:any){
    this.emp=itemData;
    this.ModalTitle="Edit Employe"
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(itemData:any){
    if(confirm('Are you sure??')){
      this.service.deleteEmploye(itemData.EmployeId).subscribe(res=>{alert(res.toString())})
      this.refreshEmpList();
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeList = data;
      console.log(data);

    });
  }

}
