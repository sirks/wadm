// get /dump/
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { GeneralHttpService } from "./shared/general-http.service";

@Injectable()
export class ExampleService extends GeneralHttpService {
  private path = {};

  constructor(http: Http) {
    super(http);
  }

  activate(): Promise<Response> {
    return this.post("/api/fidebox/activate", {serial: "dogedogedoge"});
  }

  login(): Promise<Response> {
    return this.post("/api/business/login", {username: "oskars20@yopmail.com", password: "123456"});
  }
}