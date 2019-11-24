import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const url = 'http://localhost:8000/upload';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  constructor(private http: HttpClient) {
  }

  public upload(files: Set<File>): { [key: string]: { progess: Observable<number> } } {
  }

}
