import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeIcons, PrimeNGConfig } from 'primeng/api';
// import { MessageService } from 'primeng/api';
import { Notif } from 'src/app/interfaces/notif';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  lang = 'fr'
  username?: string;
  notifs: Notif[] = [];
  notifSelectionne !: Notif;
  nbrMessages: number = 0
  nbrNotifications: number = 0

  events1: any[] = [];

  events2: any[] = [];
  constructor(public translate: TranslateService, public primeNGConfig: PrimeNGConfig) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');


  }

  ngOnInit() {
    this.events1 = [
      { status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg' },
      { status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7' },
      { status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800' },
      { status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B' }
    ];

    // this.events2 = [
    //   "2020", "2021", "2022", "2023"
    // ];
    // this.notifService.getNotification()
    // .then ((notifs) => (this.notifs = notifs));

    this.username = 'admin'
  }


  status: any = 'courrier'
  toggleStatus(val: string) {

    this.status = val;
    // this.tokenStorageService.saveActiveItem(val)
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    this.translate.get('primeng').subscribe(res => this.primeNGConfig.setTranslation(res));
  }



  display = false
  displayN = false
  displayE = false

  showDialog() {
    this.display = true
  }
  showNotifiction() {
    this.displayN = true
  }
  message: string = '';
  showDialogError(message: string) {
    this.message = message
    this.displayE = true
  }
  close() {
    this.display = false;
  }
  closeError() {
    this.displayE = false;
  }
  closeNotif() {
    this.displayN = false;
  }

}

