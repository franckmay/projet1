import { Component, OnInit } from '@angular/core'; 
import { PrimeIcons } from 'primeng/api';
// import { MessageService } from 'primeng/api';
import { Notif } from 'src/app/interfaces/notif';
// import { NotificationService } from 'src/app/services/notification.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  lang = 'fr'
  username?: string;
  notifs : Notif[] = [];
  notifSelectionne !: Notif;
  nbrMessages: number = 0
  nbrNotifications: number = 0

  events1: any[] = [];

  events2: any[] = [];
  constructor(
    // private notifService: NotificationService,
     ){}

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
    // this.translate.use(lang);
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
