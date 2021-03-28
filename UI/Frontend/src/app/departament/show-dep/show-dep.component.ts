import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private servie:SharedService) { }

  DepartamentList: any=[];

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartamentId:0,
      DepartamentName:""
    }
    this.ModalTitle="Add Departament";
    this.ActivateAddEditDepComp=true;
  }

  editClick(itemData:any){
    this.dep=itemData;
    this.ModalTitle="Edit Departament"
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(itemData:any){
    if(confirm('Are you sure??')){
      this.servie.deleteDepartament(itemData.DepartamentId).subscribe(res=>{alert(res.toString())})
      this.refreshDepList();
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }

  refreshDepList(){
    this.servie.getDepList().subscribe(data=>{
      this.DepartamentList = data;
    });
  }


}
