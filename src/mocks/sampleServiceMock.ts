import { useMockStore } from "@/stores/mockStore";
import type { AxiosRequestConfig } from "axios";

//サンプルサービス
export const sampleServiceMock = (): void => {
  //mockAdapterインスタンス
  const mock = useMockStore().mock;

  //GET通信
  mock!.onGet("GetSampleData").reply((config: AxiosRequestConfig) => {
    //パラメータの取得
    const params = config.params as { num: number | null };

    //返却データ
    const result = fakeData.filter((x) => {
      //条件式
      let conditionalExpression = true;

      //パラメータがある場合
      if (params.num !== null) {
        conditionalExpression &&= x.id === params.num;
      }

      return conditionalExpression;
    });
    console.log(result);
    return [200, result];
  });

  //POST通信
  mock!.onPost("InsertSampleData").reply((config: AxiosRequestConfig) => {
    //ボディに渡した値を取得
    const data = config.data as { num: number | null };
    return [200, true];
  });
};

/**フェイクデータ */
const fakeData = [
  { name: "sample1", id: 1 },
  { name: "sample2", id: 2 },
  { name: "sample3", id: 3 },
  { name: "sample4", id: 4 },
  { name: "sample5", id: 5 },
  { name: "sample6", id: 6 },
];
