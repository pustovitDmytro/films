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
  addMany(array){
    return Promise.all(
        array.map(film =>
            this.addFilm(film)
        )
    )
  }
  deleteFilm(id){
    return this.delete(`films/`,id);
  }
}

export default IndexApi;
