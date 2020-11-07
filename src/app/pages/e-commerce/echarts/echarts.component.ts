import { Component, OnInit,  ChangeDetectionStrategy } from '@angular/core';
import { NbComponentSize } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts',
  templateUrl: './echarts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit {

  // slection option (drop-down) with sizes
  selectedItem = '1';
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];



  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  setCategory(data){
    alert(data);
  }

}
