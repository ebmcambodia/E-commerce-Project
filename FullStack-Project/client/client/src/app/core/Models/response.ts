export interface ResponseDto<T> {
    message: string;
    isSuccessed: boolean;
    data: T| null;
}