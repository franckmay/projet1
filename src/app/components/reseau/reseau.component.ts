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
      label: 'Administrateur',
      expanded: true,
      children: [
          {
              label: 'Fils 1',
              expanded: true,
              children: [
                  {
                      label: 'petit fils'
                  },
                  {
                      label: 'F.C. Barcelona'
                  }
              ]
          },
          {
              label: 'Fils 2',
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
