import { Injectable } from '@angular/core';
import { Response, Request } from '@angular/http';
import { HttpClient, HttpHandler, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ExtendedHttp extends HttpClient {
    constructor(handler: HttpHandler) {
        super(handler);
    }

    /**
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    get(url: string, options?: any): Observable<any> {
        this.beforeRequest();
        return super.get(url, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: HttpResponse<any>) => {
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
    post(url: string, body?: any, options?: any) {
        this.beforeRequest();
        return super.post(url, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: HttpResponse<any>) => {
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
    put(url: string, body?: any, options?: any) {
        this.beforeRequest();
        return super.put(url, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: HttpResponse<any>) => {
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
    delete(url: string, options?: any) {
        this.beforeRequest();
        return super.delete(url, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: HttpResponse<any>) => {
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
     * @returns {{ headers: HttpHeaders }}
     */
    private requestOptions(options: { headers?: HttpHeaders }): Object {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (options == null) {
            options = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            if (options.headers == null && currentUser) {
                options.headers = new HttpHeaders({
                    'Authorization': `Basic ${currentUser.token}`,
                    'X-Auth-Token': localStorage.getItem('access_token'),
                    'Content-Type': 'application/json'
                });
            }
            return options;
        }
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
    private onSuccess(res: HttpResponse<any>): void {
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
