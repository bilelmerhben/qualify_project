import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Entreprise } from 'src/entreprise';
import { EntrepriseServiceService } from '../entreprise-service.service';

@Component({
  selector: 'app-entreprise-form',
  templateUrl: './entreprise-form.component.html',
  styleUrls: ['./entreprise-form.component.css']
})
export class EntrepriseFormComponent implements OnInit {


  constructor(private entrepriseService:EntrepriseServiceService) {

   }
  entreprise:Entreprise = new Entreprise();

  ngOnInit(): void {
  }
submit(formulaire:NgForm){
//console.log(formulaire.value);
 this.entrepriseService.ajouterEntreprise(this.entreprise).subscribe(data=>{
  console.log(data);
},
error => {
  console.log(error);
})
console.log(this.entreprise);
}
}
