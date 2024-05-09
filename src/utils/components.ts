import { ActivityComponent } from '../app/components/activity/activity.component';
import { BannerComponent } from '../app/components/banner/banner.component';
import { ImageComponent } from '../app/components/image/image.component';
import { ProductComponent } from '../app/components/product/product.component';

export const COMPONENTS: Record<string, any> = {
  // Activity: ActivityComponent,
  Activity: import('./../app/components/activity/activity.component').then(c => c.ActivityComponent),
  // Image: {
  //   component: import('./../app/components/image/image.component').then(c => c.ImageComponent),
  //   // module: import('@angular').then(c.module => c.CommonModule),
  // }
  // Banner: BannerComponent,
  // Product: ProductComponent,
  // Image: ImageComponent,
};
