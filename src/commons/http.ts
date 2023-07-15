import axios, { type AxiosInstance } from "axios";

/** Content-type : Json */
export const httpJson: AxiosInstance = axios.create({
  // APIのURI
  baseURL: "APIのBaseURL記載",
  // リクエストヘッダ
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

// interceptors.request.use で送信時に引数に入れた関数が動作する
// 引数で渡ってくるのは axios の設定(送信先や通信方式も持つ今まさに通信を実行しようとしている設定)で、返り値が通信時に実際に使われる axios の設定になる
httpJson.interceptors.request.use((request) => {
  return request;
});

// interceptors.response.use で返信時に引数に入れた関数が動作する
httpJson.interceptors.response.use(
  // 第一引数は通信成功時処理
  (response) => {
    // レスポンス内容
    // console.log("response", response);
    return response;
  },
  // 第二引数は通信失敗時処理
  (error) => {
    switch (error.response?.status) {
      case 0: //セッション切れ　Network Error
        break;

      case 302: //リダイレクト　Network Error
        alert("セッションが切れました\n再度ログインしてください");
        // ログアウト処理
        break;

      case 401: //セッション切れ　Network Error
        break;

      case 500: //サーバーエラー
        alert("エラーコード:" + error.response?.status + "\n" + error.response.data.error);
        break;

      default:
        alert("エラーコード:" + error.response?.status + "\n" + error.response.data.error ?? JSON.stringify(error.response.data.errors ?? error.response.data));
        break;
    }
    return Promise.reject(error); //.thenを通らせない
  }
);
