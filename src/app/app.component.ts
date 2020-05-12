import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    // { label: 'Início', action: this.onClick.bind(this), icon: 'po-icon-home', shortLabel: 'Início' },
    { label: 'Início', link: '/home', icon: 'po-icon-home', shortLabel: 'Início' },
    { label: 'Cadastro de Usuários', link: '/usuario', icon: 'po-icon-users', shortLabel: 'Usuários'}
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
