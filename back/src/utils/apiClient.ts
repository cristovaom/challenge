import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class ExternalAPI {
  private client: AxiosInstance;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL,
      ...config,
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.get(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.post(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // 
  private handleError(error: any): never {
    if (error.response) {
      throw new Error(
        `HTTP Error: ${error.response.status} - ${error.response.statusText}`
      );
    } else if (error.request) {
      throw new Error("No response received from server");
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
}
