import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moutakadem',
  templateUrl: './moutakadem.component.html',
  styleUrls: ['./moutakadem.component.css']
})
export class MoutakademComponent implements OnInit {

  constructor() { }

  data : Student[] = [];

  ngOnInit(): void {
    fetch('https://kachaf-proj.herokuapp.com/moutakadem')
    .then(response => response.json())
    .then(json => {
      json.forEach((x:any) => {
        let si = new Student();
        si.name = x.name;
        si.libas = x.libas;
        si.hofoz = x.hofoz;
        si.sira = x.sira;
        si.total = x.total;
        x.total = x.libas + x.hofoz + x.sira;
        this.data.push(si);
      });
      this.data = json
    })
  }

}

class Student
{
  name : string = '';
  libas : string = '';
  hofoz : string = '';
  sira : string = '';
  total : string = '';
}