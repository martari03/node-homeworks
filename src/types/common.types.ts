export interface ICommonResponse<T> extends IMessage {
  data: T;
}

export interface IMessage {
  message: string;
}
