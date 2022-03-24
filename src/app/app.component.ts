import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  getResponse(): Observable<any> {
    return new Observable((observer) => {
      observer.next({ name: 'Mohit' });
    });
  }

  getMResponse(): Observable<any> {
    return new Observable((observer) => {
      observer.next({ name: 'Rohit' });
    });
  }

  ngOnInit() {
    this.getResponse()
      .pipe(
        switchMap((x) => {
          return this.getMResponse().pipe(map((y) => ({ x, y })));
        })
      )
      .subscribe(({ x, y }) => console.log(x, y));
  }
}
