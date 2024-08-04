import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetReqService } from './services/get-req.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data: any[] = [];
  title = 'task2';
  constructor(private _getReq: GetReqService){

  }
  ngOnInit(): void {
    this._getReq.getTrendingMovies().subscribe(
      data => {
        this.data = data.results;
        console.log("my response: ", this.data)
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
