import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { AuthenticationService } from './login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  exibirMenu: boolean = false;
  inscricao: Subscription;

  constructor(
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.inscricao = this.authenticationService.mostrarMenuEmitter.subscribe(
      (mostrarMenu: boolean) => {
        this.exibirMenu  = mostrarMenu;
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
