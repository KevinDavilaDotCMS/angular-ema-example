import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  dotcmsClient,
  initEditor,
  isInsideEditor,
  updateNavigation,
} from '@dotcms/client';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  from,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DotcmsContextService {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  private dotmCmsContext = new BehaviorSubject<{
    pathname?: string;
    page?: any;
    nav?: any;
    isInsideEditor?: boolean;
  }>({});

  dotmCmsContext$ = this.dotmCmsContext.asObservable();

  private AUTH_TOKEN =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcGk3ZDcwMGJjNy0yNmZmLTRmMjUtYjg0Mi1lNjA2YTljZTM0ODEiLCJ4bW9kIjoxNzEzNTk1NDI5MDAwLCJuYmYiOjE3MTM1OTU0MjksImlzcyI6ImI1YTNlYTI3ZGQiLCJsYWJlbCI6ImtkIiwiZXhwIjoxODA4MTk3MjAwLCJpYXQiOjE3MTM1OTU0MjksImp0aSI6ImQ3OTMwNjMwLWNlYjctNDM1Zi1hYjEzLTVjNTc5Nzk1YTk4OCJ9._sTdtLcs1_KHcegBLjqMFKDGnhcA4IvngFCVz_rIVDg';
  private DOTCMS_URL = 'http://localhost:8080';

  client = dotcmsClient.init({
    dotcmsUrl: this.DOTCMS_URL,
    authToken: this.AUTH_TOKEN,
    siteId: '59bb8831-6706-4589-9ca0-ff74016e02b2',
    requestOptions: {
      // In production you might want to deal with this differently
      cache: 'no-cache',
    },
  });
  
  init() {
    combineLatest([this.router.events, this.route.queryParams])
      .pipe(
        filter(([event]) => event instanceof NavigationEnd),
        map(([event, searchParams]) => {
          if (event instanceof NavigationEnd) {
            console.log(event);

            const requestData = {
              path: event.urlAfterRedirects || 'index',
              language_id: searchParams['language_id'],
              'com.dotmarketing.persona.id':
                searchParams['com.dotmarketing.persona.id'] || '',
              mode: searchParams['mode'],
              variantName: searchParams['variantName'],
            };
            return { pathname: event.urlAfterRedirects, requestData };
          }
          return {} as any;
        }),
        switchMap(({ pathname, requestData }) => {
          return from(
            Promise.all([
              this.client.page.get(requestData),

              this.client.nav.get({
                path: '/',
                depth: 2,
                languageId: requestData.language_id,
              }),
            ]).then(([page, nav]) => ({ pathname, page, nav })),
          );
        }),
        // map(({ pathname, page, nav }) => {
        //   const insideEditor = isInsideEditor();
        //   console.log({ pathname, page, nav });
        //   return {
        //     page,
        //     nav,
        //     pathname,
        //     insideEditor,
        //   };
        // }),
        tap(({ pathname, page, nav }) => {
          this.dotmCmsContext.next({ pathname, page, nav, isInsideEditor: isInsideEditor()});
        }),
      )
      .subscribe((res) => {
        console.log(res);

        if (isInsideEditor()) {
          const config = {
            pathname: res.pathname,
            onReload: () => {
              // this.router.navigateByUrl(res.pathname)
              window.location.reload();
              // this.router.navigate(['/']).then(() => {
              //   this.router.navigateByUrl(res.pathname);
              // });
            },
          };
          initEditor(config);
          updateNavigation(config.pathname || '/');
        }
      });
  }

  get getContextData() {
    return this.dotmCmsContext.value;
  }

  get clientII() {
    return this.client;
  }
}
