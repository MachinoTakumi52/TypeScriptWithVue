import { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { httpJson } from "@/utils/http";

//返却モデル
export interface resultModel {
  name: string;
  id: number;
}

/**
 * サンプルデータ取得
 * @param num
 * @returns サンプルデータ
 */
export const getData = async (num: number | null): Promise<resultModel[]> => {
  // リクエスト作成
  const request: AxiosRequestConfig = { params: { num: num } };
  // 呼び出し レスポンス受け取り
  // const response: AxiosResponse<resultModel[]> = await httpJson.get("APIURL", request);
  return [
    {
      name: "sample",
      id: 1,
    },
    {
      name: "sample2",
      id: 2,
    },
  ];
};

/**サンプルデータ登録 */
export const insertData = async (num: number | null): Promise<boolean> => {
  // リクエスト作成
  const request: AxiosRequestConfig = { params: { num: num } };
  // 呼び出し レスポンス受け取り
  // const response: AxiosResponse<boolean> = await httpJson.post("APIURL", request);
  return true;
};
