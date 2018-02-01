import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stones-dashboard',
  templateUrl: './stones-dashboard.component.html',
  styleUrls: ['./stones-dashboard.component.scss']
})
export class StonesDashboardComponent implements OnInit {
  private stonesCollection = [
    {
      mineral: 'malachite',
      weight: 100
    },
    {
      mineral: 'marcasite',
      weight: 50
    }
  ];

  private stoneField = [
    {
      mineral: 'abelsonite',
      weight: 200
    }
  ];

  constructor() {
  }

  onTakeStonesAway() {
    this.canThrowStone()
      ? this.throwStone()
      : alert('No stones to take away');
  }

  onGetStonesTogether() {
    this.canGetStone()
      ? this.getStone()
      : alert('All stones are already together');
  }

  getStone() {
    const stone = this.stoneField.shift();
    this.stonesCollection.push(stone);

  }

  throwStone() {
    const stone = this.stonesCollection.shift();
    this.stoneField.push(stone);
  }

  canThrowStone() {
    return !!this.stonesCollection.length;
  }

  canGetStone() {
    return !!this.stoneField.length;
  }

  ngOnInit() {
  }

}
