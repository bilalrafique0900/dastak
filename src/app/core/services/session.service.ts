import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SessionService {
  CurrentLang: any;
  public token: string | null = sessionStorage.getItem('token');
  //public loginrole: string = sessionStorage.getItem('Role') || '';
  ApiKey: string = '58d4c8fd-f704-49ba-ae38-4dd20a5bea00';
  // BasePath= 'http://localhost:5269/';
  // BasePath= 'http://172.25.18.97:8085/';
  // BasePath= 'http://110.93.249.77:8085/';
  BasePath= window.location.origin == 'http://172.25.18.97:8090'? 'http://172.25.18.97:8085/':'http://110.93.249.77:8085/';


  FilePath="wwwroot\\upload";
  get GetUserName() {
    return sessionStorage.getItem('UserName') || '';
  }
    get loginrole() {
    return sessionStorage.getItem('Role') || '';
  }
  getFormattedData(data:any) {
    if(data){
      // let jdata=JSON.parse(data);
      // let mydt=jdata.filter((n: any) => n !== null);
      // return mydt;
      try {
        // Try parsing the data
        const parsed = JSON.parse(data);
        // If parsed is an array, filter out nulls
        if (Array.isArray(parsed)) {
          return parsed.filter((item: any) => item !== null);
        }
    
        // If it's not an array, return it as-is
        return parsed;
      } catch (e) {
        // If data is not valid JSON, just return it as-is
        let mydata:any[]=[];
        mydata.push(data);
        return mydata.filter((item: any) => item !== null);
      }
    
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
 // public static onlineUrl: string = 'http://172.25.18.97:8085/'
  //public static onlineUrl: string = 'http://110.93.249.77:8085/'
//  public static onlineUrl: string = window.location.origin == 'http://172.25.18.97:8090'? 'http://172.25.18.97:8085/':'http://110.93.249.77:8085/';






  // public static onlineUrl: string = 'https://localhost:5001/api/'
  // public static FilesPath: string = 'https://srv.masareefi.com/'

  public static TokenValue: string = sessionStorage.getItem("token") || "";
  public static CurrentSession = sessionStorage.getItem("DoDo") || "";
  // public static CurrentSession = sessionStorage.getItem("DoDo") ? sessionStorage.getItem("DoDo") : "";

  getFrontendUrl(): string {
    return window.location.origin; // This will return "http://localhost:4200"
  }
  
}
