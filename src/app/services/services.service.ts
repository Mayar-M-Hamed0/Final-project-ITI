import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
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


   insert (data:any){
    return this.HttpClient_.post('http://127.0.0.1:8000/api/orders',data)
  }



   ////////////comment///

   getAllposts(){
   // return this.HttpClient_.get(`https://retoolapi.dev/wDUVbz/data`);
    return this.HttpClient_.get('http://127.0.0.1:8000/api/reviews');
  
   }

   getpost(id:number){

    return this.HttpClient_.get(`http://127.0.0.1:8000/api/reviews/${id}`);

   }

   savecomment(inputdata:object){
     return this.HttpClient_.post('http://127.0.0.1:8000/api/reviews',inputdata);

   }
   updatecomment(inputdate :object,commentid:number){
     return this.HttpClient_.put(`http://127.0.0.1:8000/api/reviews/${commentid}`,inputdate);
   }
   addpost(data :any)
   {
     return this.HttpClient_.get(`https://fakestoreapi.com/products`);
   }

   destroycomment(commentid:number)
   {
     return this.HttpClient_.delete(`https://api-generator.retool.com/wDUVbz/data/${commentid}`);
   }


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
