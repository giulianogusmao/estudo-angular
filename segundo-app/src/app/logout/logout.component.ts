import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../login/authentication.service';

@Component({
    selector: 'app-logout',
    template: `Saindo...`,
})
export class LogoutComponent implements OnInit {
    constructor(
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
        this.authenticationService.logout();
    }
}