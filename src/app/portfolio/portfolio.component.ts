import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  check:boolean = false
  srcImg:string = ''
   display(info:any):void{
    this.srcImg = info.getAttribute('src')
    console.log(info.getAttribute('src'))
    
      this.check = true
      
   }
}
