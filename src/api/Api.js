/**
 * Created by pusti on 30.06.2017.
 */
import fetch from 'isomorphic-fetch';
class Api {
  constructor(){
    this.domain = 'http://localhost:8080';
  }
  fetch(url, params={}){
    return fetch(url, params);
    //     .then((response)=>{
    //   if (!response.ok) {
    //     throw Error(response.statusText);
    //   }
    //   return response;
    // });
  }
  get(url, params={}){
    return this.fetch(this.domain +'/'+ url,params);
  }
  post(url, data){
    let formData = new FormData();
    for(const name in data) {
      formData.set(name, data[name]);
    }
    return this.fetch(this.domain +'/' + url, {
      method: 'POST',
      body: formData
    });
  }
  delete(url, id){
    return this.fetch(`${this.domain}/${url}${id}`, {
      method: 'DELETE'
    });
  }
}
export default Api;
