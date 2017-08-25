/**
 * Created by pusti on 30.06.2017.
 */
import Api from './Api';

class IndexApi extends Api {
  getFilms(){
    return this.get(`films/`);
  }
  addFilm(data){
    return this.post(`films/`,data);
  }
  deleteFilm(id){
    return this.get(`films/`,id);
  }
}

export default IndexApi;
