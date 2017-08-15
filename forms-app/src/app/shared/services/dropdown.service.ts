import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DropdownService {

  constructor(
    private http: Http
  ) { }

  getEstadosBR() {
    return this.http.get('assets/dados/estadosbr.json')
      .map((res: Response) => res.json());
  }

}
