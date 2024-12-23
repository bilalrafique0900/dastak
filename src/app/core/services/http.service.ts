import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionConfig, SessionService } from './session.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(protected httpClient: HttpClient, protected session: SessionService) {
  }
  doGet(url: string, options?: any) {
    return this.httpClient.get(SessionConfig.onlineUrl + url, options);
  }
  PostData(Url: string,Data: any) {
    Url = `${SessionConfig.onlineUrl}${Url}`;
    // console.log(Url);
    // console.log(SessionConfig.TokenValue);

    return this.httpClient.post<any>(Url, Data, {
      headers: new HttpHeaders().set("authorization", "Bearer " + SessionConfig.TokenValue),
    });
    
   // return this.httpClient.post<any>(Url, Data);
  }


  GetDataAnonymousData(Url: string) {
    Url = `${SessionConfig.onlineUrl}${Url}`;
    var headers = new HttpHeaders();
    //headers.append('Accept-Language', 'ar');
    return this.httpClient.get<any>(Url, {
      headers: headers
    });
  }
  addDocument(Url:string,model: any, image: File): Observable<any> {
    const formData = new FormData();
    Url = `${SessionConfig.onlineUrl}${Url}`;
    // Append form data (DocumentViewModel properties)
    formData.append('ReferenceNo', model.ReferenceNo);
    formData.append('Name', model.Name);
    formData.append('Detail', model.Detail);

    // Append the image (IFormFile)
    formData.append('image', image, image.name);
debugger
    // Send POST request to the API with the form data
    return this.httpClient.post<any>(Url, formData, {
      headers: new HttpHeaders().set("authorization", "Bearer " + SessionConfig.TokenValue),
    });
  }
  GetData(Url: string) {
    Url = `${SessionConfig.onlineUrl}${Url}`;
    // console.log('GetDataGetDataGetDataGetDataGetDataGetDataGetData');
    // console.log(Url);
    return this.httpClient.get<any>(Url, {
      headers: new HttpHeaders().set("authorization", "Bearer " + SessionConfig.TokenValue),
    });
  }
}
