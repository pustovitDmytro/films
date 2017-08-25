/**
 * Created by pusti on 30.06.2017.
 */
import fetch from 'isomorphic-fetch';
class Api {
  constructor(){
    this.domain = 'http://localhost:8080';
  }
  fetch(url, params = {}){
    return fetch(url, params);
  }
  get(url, params={}){
    return this.fetch(this.domain +'/'+ url,params);
  }
  post(url, data){
  let formdata = new FormData(data);
  return this.fetch(this.domain +'/' + url, {
    method: 'POST',
    body: formdata
  });
}
  delete(url, id){
    return this.fetch(this.domain +'/' + url+'/'+id, {
      method: 'DELETE'
    });
  }
}
export default Api;
