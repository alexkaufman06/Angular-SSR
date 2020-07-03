import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    questions: any;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getQuestions().subscribe(questions => {
            this.questions = questions.results;
        });
    }

}
