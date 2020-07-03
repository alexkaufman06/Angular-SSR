import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private questionsUrl = 'https://opentdb.com/api.php?amount=10';
    constructor(private http: HttpClient) { }

    getQuestions(): Observable<any> {
        return this.http.get<any>(this.questionsUrl)
            .pipe(
                catchError(this.handleError)
            )
            ;
    }

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}

