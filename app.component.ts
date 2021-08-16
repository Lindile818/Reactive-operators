import { Component,OnInit } from '@angular/core';
import { Observable,from } from "rxjs";
import { tap,filter,map } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements OnInit{
  title = ' Sisipho  mlenzana';
public time:any;



ngOnInit(){
 
  const myDerivedRaytoanobs = from([1982,1984,1986,1990,1993,1996,1998]);
  
  
  const datapipeline = myDerivedRaytoanobs.pipe(
    tap((v)=>console.log(`value passing through the tap! ${v}`),
    filter((v:any)=>v<1981)),
    map((v)=>v-2021)
  );

  const subscriptionToBase = (subscriberName:any)=>{

    return myDerivedRaytoanobs.subscribe((v)=>{

      console.log(subscriberName,`base subscription received: ${v}`)
    });


  }
 
  const subscriptionTodata = (subscriberName:any)=>{

    return datapipeline.subscribe((v)=>{

      console.log(subscriberName,`base subscription received: ${v}`)
    });
  }


const handlingsubscriptiontoBase = ()=>{

  const subscription1 = subscriptionToBase('subscription1');
  const subscription2 = subscriptionToBase('subscription1');

};
const handlingsubscriptionPipeline = ()=>{

  const subscription1 = subscriptionTodata('subscription1');
  const subscription2 = subscriptionTodata('subscription1');

};


handlingsubscriptiontoBase();
handlingsubscriptionPipeline();

  
}

  
}
