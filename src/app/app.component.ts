import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManagement';
  
  // ngOnInit(){
  //   this.prime()
  // }
  

  // prime(){
  //    var num:number=1000;
  //    var count:number;
  //    var rem:number=0;
  //    var temp:number;
  //    for(let i=1;i<=num;i++){

  //       count=0;
  //       temp=i;
  //       while(temp>0){
  //         rem=temp%10;
  //         if(rem==1){
  //           count++;
  //         }
  //         temp=temp/10;
  //       }
  //       if(count==1){
  //         console.log(i);
  //       }
  //    }
  // }
}
