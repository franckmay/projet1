import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-reseau',
  templateUrl: './reseau.component.html',
  styleUrls: ['./reseau.component.scss']
})
export class ReseauComponent implements OnInit {

  data2: TreeNode[] = [];
  selectedNode: TreeNode = {}

  constructor(private messageService: MessageService) { 

   
  }

  ngOnInit(): void {

    this.data2 = [{
      label: 'F.C Barcelona',
      expanded: true,
      children: [
          {
              label: 'F.C Barcelona',
              expanded: true,
              children: [
                  {
                      label: 'Chelsea FC'
                  },
                  {
                      label: 'F.C. Barcelona'
                  }
              ]
          },
          {
              label: 'Real Madrid',
              expanded: true,
              children: [
                  {
                      label: 'Bayern Munich'
                  },
                  {
                      label: 'Real Madrid'
                  }
              ]
          }
      ]
  }];

  }



  onNodeSelect(event :any) {
    this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
}

}
