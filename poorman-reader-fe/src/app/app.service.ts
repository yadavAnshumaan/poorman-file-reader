import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private http: HttpClient) { }

    public getDir(path?: string): Observable<any> {
        if (path)
        return this.http.get<any>('http://localhost:4300', { params: { path } });
        else
        return this.http.get<any>('http://localhost:4300');
    }
}