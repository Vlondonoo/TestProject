import { Component } from '@angular/core';
import { MockpostService } from './mockpost.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
  url = 'app/heroes'
  constructor(private http: HttpClient) {

    this.http.get(this.url).subscribe((data) => console.log(data))
    this.http.post(this.url, { name: 'super' })
      .pipe(switchMap(resp => {
        return this.http.get(this.url).subscribe((data) => console.log("new",data))
      })


      );
  }


  
   
  


}
