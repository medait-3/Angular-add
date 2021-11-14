import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

   nom:string='';
   prenom:string='';
   etat:string='';
   creation:string='';
   utilisateur:string='';
   matricule:string='';

  users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    },
  ]
  add = function(){
   this.users.push({
     id: Math.random().toString(36).substr(2, 9),
     createdDate: this.creation,
     status: this.etat,
     firstName: this.prenom,
     lastName: this.nom,
     userName: this.utilisateur,
     registrationNumber: this.matricule,
    	   })
        
  }
  deleteRow(id){
    for(let i = 0; i < this.users.length; ++i){
        if (this.users[i].id === id) {
            this.users.splice(i,1);
        }
    }
}
  constructor() { }

  ngOnInit(): void {
  }

}
function resetForm() {
  throw new Error('Function not implemented.');
}

