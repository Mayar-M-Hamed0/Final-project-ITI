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
    return this.HttpClient_.get(`http://127.0.0.1:8000/api/center/`+id)

   }

  getdata(){
   return this.HttpClient_.get(`http://127.0.0.1:8000/api/Allservice-center`)

  }

  // createservice(data){
  //   return this.HttpClient_.post(`http://127.0.0.1:8000/api/service-center`,data)
  // }

  pushdata(formdata:any){
    return this.HttpClient_.post(`https://api-generator.retool.com/5746Su/service`,formdata)

   }

// start orders
   insert (data:any,token:any){
    return this.HttpClient_.post('http://127.0.0.1:8000/api/orders',data,token)
  }

  getordersforcenterservice(id:number,token:any){
    return this.HttpClient_.get(`http://127.0.0.1:8000/api/orderByServiceCenter/`+id,token)

  }
  getordersforuser(id:number,token:any){
    return this.HttpClient_.get(`http://127.0.0.1:8000/api/orderByUserid/`+id,token)

  }
  softdelete(id:number,token:any){
    return this.HttpClient_.delete(`http://127.0.0.1:8000/api/orders/`+id,token)

  }
  showorder(id:number,token:any){
    return this.HttpClient_.get(`http://127.0.0.1:8000/api/orders/`+id,token)

  }
  updateorder(id:number,formdata:any,token:any){
    return this.HttpClient_.put(`http://127.0.0.1:8000/api/orders/`+id,formdata,token)

  }
  restore(id:number){
    return this.HttpClient_.get(`http://127.0.0.1:8000/api/orders-archeive/`+id)

  }
  forcedeleteorder(id:number){
    return this.HttpClient_.delete(`http://127.0.0.1:8000/api/orders-archeive/`+id)

  }

  getarchived(id:number,token:any){
    return this.HttpClient_.get(`http://127.0.0.1:8000/api/showorders-archeive/`+id,token)

  }
  getarchivedforuser(id:number,token:any){
    return this.HttpClient_.get(`http://127.0.0.1:8000/api/showuserorders-archeive/`+id,token)

  }
// end orders

   ////////////comment///

   getAllposts(){
   // return this.HttpClient_.get(`https://retoolapi.dev/wDUVbz/data`);
    return this.HttpClient_.get('http://127.0.0.1:8000/api/allcomment');

   }

   getpost(id:number){

    return this.HttpClient_.get(`http://127.0.0.1:8000/api/reviews/${id}`);

   }


   savecomment(inputdata:object,token:any){
    return this.HttpClient_.post('http://127.0.0.1:8000/api/reviews',inputdata,token);

  }

   updatecomment(inputdate :object,commentid:number){
     return this.HttpClient_.put(`http://127.0.0.1:8000/api/reviews/${commentid}`,inputdate);
   }


  //  destroycomment(commentid:number,headers:any)
  //  {
  //    return this.HttpClient_.delete('http://127.0.0.1:8000/api/reviews/'+commentid ,{ headers: headers });
  //  }


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
