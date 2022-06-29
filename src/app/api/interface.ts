export interface BaseListResponse<T> {
  data: T[];
  error: any;
  isSuccess: boolean;
}
