import httpEndPoint from '../constants/httpEndPoint';
import ApiManager, {RequestMethod} from '../remotes/ApiManager';

class HomeRepositories {
  async getListMusic<T>() {
    return await ApiManager.requestApi<T>({
      url: httpEndPoint.getListMusic,
      method: RequestMethod.GET,
    });
  }
}

export default new HomeRepositories();
