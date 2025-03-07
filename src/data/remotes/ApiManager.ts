import axios, {AxiosError} from 'axios';

const api = axios.create({
  baseURL: 'http://10.86.35.93:3000/',
  timeout: 30000,
});

class ApiManager {
  constructor() {
    this.init();
  }

  init = () => {
    api.interceptors.request.use(
      config => {
        // TODO: handle request before sent
        console.info('[Request]: ', config);
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    api.interceptors.response.use(
      response => {
        //TODO: handle response
        return response;
      },
      error => {
        return Promise.reject(error);
      },
    );
  };

  requestApi = async <T>(config: RequestParams) => {
    try {
      const response = await Promise.race([
        api.request<T>({
          url: config.url,
          method: config.method,
          params: config.params,
          data: config.body,
        }),
      ]);
      const baseResponse: BaseResponse<T> = {
        status: response.status,
        data: response.data as BaseData<T>,
      };
      console.info(`[Response]: ${api.getUri()}${config.url}`, response);
      return baseResponse;
    } catch (error) {
      const exception = error as AxiosError;
      console.error('[Request error]: ', exception.toJSON);
      const baseResponse: BaseResponse<T> = {
        status: exception.response?.status,
        errorMessage: exception.message,
        error: exception.toJSON,
      };
      return baseResponse;
    }
  };
}

export interface BaseData<T> {
  code?: number;
  data?: T;
}

export interface BaseResponse<T> {
  status?: number;
  data?: BaseData<T>;
  errorMessage?: string;
  error?: any;
}

export interface RequestParams {
  url: string;
  method: RequestMethod;
  params?: any;
  body?: any;
  baseUrl?: string;
}

export enum RequestMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
}

export enum HttpStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  SYSTEM = 500,
}

export default new ApiManager();
