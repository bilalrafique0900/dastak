import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  CurrentLang: any;
  public token: string | null = sessionStorage.getItem('token');

  ApiKey: string = '58d4c8fd-f704-49ba-ae38-4dd20a5bea00';
  BasePath= 'http://localhost:5269/';
  FilePath="wwwroot\\upload";
  get GetUserName() {
    return sessionStorage.getItem('UserName') || '';
  }
  getFormattedData(data:any) {
    if(data){
      let jdata=JSON.parse(data);
      let mydt=jdata.filter((n: any) => n !== null);
      return mydt;
    }else{
      return null;
    }
    
  }

}



@Injectable({
  providedIn: "root",
})
export class SessionConfig {
  constructor() { }

  public static onlineUrl: string = 'http://localhost:5269/'

  // public static onlineUrl: string = 'https://localhost:5001/api/'
  // public static FilesPath: string = 'https://srv.masareefi.com/'

  public static TokenValue: string = sessionStorage.getItem("token") || "";
  public static CurrentSession = sessionStorage.getItem("DoDo") || "";
  // public static CurrentSession = sessionStorage.getItem("DoDo") ? sessionStorage.getItem("DoDo") : "";
}
