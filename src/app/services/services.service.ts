import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private HttpClient_:HttpClient){

  }
  getsinglepage(id:any){
    return this.HttpClient_.get(`https://api-generator.retool.com/5746Su/service/`+id)
   
   }
  
  getdata(){
   return this.HttpClient_.get(`https://api-generator.retool.com/5746Su/service`)
  
  }

  pushdata(formdata:any){
    return this.HttpClient_.post(`https://api-generator.retool.com/5746Su/service`,formdata)
   
   }






   ////////////comment///

   getAllposts(){
    return this.HttpClient_.get(`https://retoolapi.dev/wDUVbz/data`);
   }
 
   getpost(id:number){
     
    return this.HttpClient_.get(` https://api-generator.retool.com/wDUVbz/data/${id}`);
 
   }
   
 
   savecomment(inputdata:object){
     return this.HttpClient_.post(`https://retoolapi.dev/wDUVbz/data`,inputdata);
 
   }
   updatecomment(inputdate :object,commentid:number){
     return this.HttpClient_.put(`https://api-generator.retool.com/wDUVbz/data/${commentid}`,inputdate);
   }
   addpost(data :any)
   {
     return this.HttpClient_.get(`https://fakestoreapi.com/products`);
   }
 
   destroycomment(commentid:number)
   {
     return this.HttpClient_.delete(`https://api-generator.retool.com/wDUVbz/data/${commentid}`);
   }
  
//    private items :any[]=JSON.parse(localStorage.getItem('cartitem')||'[]');
//    Addtocart(prodect:any)
//    {
//  this.items.push({...prodect,quantity:1})
//   localStorage.setItem('cartitem',JSON.stringify(this.items))
//    }
//    getitem(){
//     return this.items;
//    }
//    delete(item:any)
//    {
//      this.items=this.items.filter((i)=>i.id !== item.id)
 
//      localStorage.setItem('cartitem',JSON.stringify(this.items))
 
//    }
//   incrementQuantity(id :number){
//    let item=this.items.find((i)=>i.id === id)
//    if(item){
//      item.quantity++;
//    }
//    localStorage.setItem('cartitem',JSON.stringify(this.items))
  
//   }
//   decrementQuantity(id :number){
//    let item=this.items.find((i)=>i.id === id)
//    if(item){
//      item.quantity--;
//    }
//    localStorage.setItem('cartitem',JSON.stringify(this.items))
  
//   }
//   gettotal()
//   {
//   return this.items.reduce((acc,item)=>{
//   return acc+item.price*item.quantity
//   },0)
//   }
 
 ////////////
      private countlike = new BehaviorSubject<number>(5)
      private countdislike = new BehaviorSubject<number>(3)
 
 
   getlike()
   { 
     return this.countlike.asObservable();
    }
    
    Updatalikecount(newcount : number)
   { 
      this.countlike.next(newcount);
    }
 
 
    getdislike()
    { 
      return this.countdislike.asObservable();
     }
     
     Updatadislikecount(newcount : number)
    { 
       this.countdislike.next(newcount);
     }
 

}
