import { Component, OnInit } from '@angular/core';
import { InfoPersonnel } from 'src/app/demo/domain/info-personnel.';
import { Situation } from 'src/app/demo/domain/situation';


@Component({
  selector: 'app-info-personnel',
  templateUrl: './info-personnel.component.html',
  styleUrls: ['./info-personnel.component.scss']
})
export class InfoPersonnelComponent implements OnInit {

  situations: Situation[];
infoperso = new InfoPersonnel();
  selectedSituation:Situation ;
  value:boolean;
  selectedValues: string[] = [];
 submitted:boolean;

  constructor() {
      this.situations = [
          {name: 'Mariee', code: 1},
          {name: 'Celebataire', code: 2},
          {name: 'Divorcee', code: 3},
         
      ];
  }

  ngOnInit(): void {
  }


}
