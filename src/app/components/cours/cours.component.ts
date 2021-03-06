import { Component, OnInit } from "@angular/core";
import { Course } from "../../objets-metiers/course";
import { CoursService } from "../../services/cours.service";

@Component({
    moduleId:module.id,
    selector:'cours-liste',
    templateUrl:'cours.component.html'
    //,providers:[CoursService]
})
export class CoursListeComponent implements OnInit {

    listeCours:Course[];
    erreurHttp : string;



    constructor(private coursService:CoursService) {
    }

    ngOnInit(): void {
        this.coursService.obtenirListeApi()
                        .subscribe(
                            liste => this.listeCours = liste,
                            err => this.erreurHttp = err.status,
                            () => this.testerComplete() 
                        );
        /*
        this.listeCours.forEach(function(cours) {
                    console.log(cours.nom + " - " + cours.libelleEtablissement)
        });
        */
    

     }


     public testerComplete() {

         console.log("subscribe complet");
     }

     public testerComplete2() {

         console.log("subscribe complet2");
     }


}

