import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Calendrier } from 'src/app/class/calendrier/calendrier';
import { Observable } from 'rxjs';
import { MoisBudgetaire } from 'src/app/class/moisBudgetaire/mois-budgetaire';
import { AnneeBudgetaire } from 'src/app/class/anneeBudgetaire/annee-budgetaire';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {
  progress!: string;

  calendrier = new Calendrier()
  annee: AnneeBudgetaire[] = []
  mois: MoisBudgetaire[] = []
  private _jsonURL = '../assets/calen.json';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.annee = data
      this.mois = this.annee[0].mois

    },
      error => console.log(error));
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  setState() {

  }

  monthID = ''
  details = ''
  setDetails(id: string, data: any) {

    this.monthID = id
    console.log(id);

    this.details = data
  }

}
