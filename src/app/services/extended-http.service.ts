import { Injectable } from '@angular/core';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers,
    Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ExtendedHttp extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    /**
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.beforeRequest();
        return super.get(url, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    /**
    * @param url
   * @param body
    * @param options
    * @returns {Observable<>}
    */
    post(url: string, body?: any, options?: RequestOptionsArgs) {
        this.beforeRequest();
        return super.post(url, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    /**
    * @param url
   * @param body
    * @param options
    * @returns {Observable<>}
    */
    put(url: string, body?: any, options?: RequestOptionsArgs) {
        this.beforeRequest();
        return super.put(url, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }


    /**
    * @param url
    * @param options
    * @returns {Observable<>}
    */
    delete(url: string, options?: RequestOptionsArgs) {
        this.beforeRequest();
        return super.delete(url, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    /**
     * @param options
     * @returns {RequestOptionsArgs}
     */
    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null && currentUser) {
            options.headers = new Headers({
                'Authorization': `Basic ${currentUser.token}`,
                'X-Auth-Token': localStorage.getItem('access_token'),
                'Content-Type': 'application/json'
            });
        }
        return options;
    }

    /**
     * Before any Request.
     */
    private beforeRequest(): void {
        console.log("show loader");
    }

    /**
     * After any request.
     */
    private afterRequest(): void {
        console.log("hide loader");
    }

    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    /**
     * onSuccess
     * @param res
     */
    private onSuccess(res: Response): void {
        console.log(res);
    }

    /**
     * onError
     * @param error
     */
    private onError(error: any): void {
        console.log("error: " + error);
    }

    /**
     * onFinally
     */
    private onFinally(): void {
        this.afterRequest();
    }
}
