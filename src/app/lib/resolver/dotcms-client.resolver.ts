import { ResolveFn } from '@angular/router';

export const dotcmsClientResolver: ResolveFn<boolean> = (route, state) => {
  console.log({route,state});
  return true;
};
