import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { GeneralHttpService } from "../shared/general-http.service";
import "rxjs";
import { AppState } from "../shared/app.state";

@Injectable()
export class AccessService extends GeneralHttpService {
  private paths = {
    register: "/api/business/register",
    login: "/api/business/login"
  };

  constructor(http: Http,
              private appState: AppState) {
    super(http);
  }

  login(credentials): Promise<Response> {
    let params = {
      username: credentials.username,
      password: credentials.password
    };

    return this.post(this.paths.login, params);
  }

  signUp(credentials): Promise<Response> {
    let params = {
      username: credentials.username,
      password: credentials.password
    };

    return this.post(this.paths.register, params);
  }

  signOut(): Promise<Response> {
    this.appState.isLoggedIn = false;
    return Promise.resolve({status: 200});
  }
}