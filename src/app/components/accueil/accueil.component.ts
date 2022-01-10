import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Calendrier } from 'src/app/class/calendrier/calendrier';
import { Observable } from 'rxjs';
import { MoisBudgetaire } from 'src/app/class/moisBudgetaire/mois-budgetaire';
import { AnneeBudgetaire } from 'src/app/class/anneeBudgetaire/annee-budgetaire';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  progress!: string;

  calendrier = new Calendrier()
  annee: AnneeBudgetaire[] = []
  mois: MoisBudgetaire[] = []
  private _jsonURL = '../assets/calen.json';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    let obj = ''
    this.getJSON().subscribe(data => {
      console.log(data);
      this.annee = data
      this.mois = this.annee[0].mois
      
      // this.annee.forEach(element => {
      //   for (let index = 0; index < element.mois.length; index++) {
      //     console.log(element.mois[index].moisID);
      //     }
      // });



      // this.calendrier.annees = JSON.parse(data)

    },
      error => console.log(error));
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  setState() {

  }

}
