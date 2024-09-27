import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-angular-project-1';
  responseData$: Observable<any> | undefined;
  loadData: boolean = false;

  constructor(private http: HttpClient){}

  postData() {
    const user = {
      id: 104,
      name: "Chanom",
      email: "chanom@gmail.com"
    }

    this.http.post('http://localhost:3000/users', user).subscribe((response) => {
      console.log("User Update", response);
    })
  }
}