import * as SecureStore from 'expo-secure-store';
import { KEY_TOKEN } from '../util/environment';

export default class AbstractApi{
    
  //protected BASE_URL: string = "https://bulir-challenge-one-production.up.railway.app/api/v1";

  protected BASE_URL: string = "https://0ddb-102-214-36-100.ngrok-free.app/api/v1";

   public baseUrl(): string{
        return this.BASE_URL;
   }

   protected getHeaders(){
     return {
         headers: {
             'Content-Type': 'application/json',
             'authorization': SecureStore.getItem(KEY_TOKEN)
         }
     }
 }

}