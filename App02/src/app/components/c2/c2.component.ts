import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor() { }

  data: Student[] = [];

  ngOnInit(): void {
    fetch('https://api-ne5be.herokuapp.com/c2')
      .then(response => response.json())
      .then(json => {
        json.forEach((x: any) => {
          let si = new Student();
          si.name = x.name;
          si.houdour = x.houdour;
          si.nbrhofoz = x.nbrhofoz;
          si.nbrmuraja3a = x.nbrmuraja3a;
          si.sura = x.sura;
          this.data.push(si);
        });
        this.data = json
      })
  }

}
