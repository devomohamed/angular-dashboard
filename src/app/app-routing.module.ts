import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'statics', loadChildren: () => import('./modules/statics/statics.module').then(m => m.StaticsModule) },
  { path: 'coupons', loadChildren: () => import('./modules/coupons/coupons.module').then(m => m.CouponsModule) },
  { path: 'pages', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) },
  { path: 'media', loadChildren: () => import('./modules/media/media.module').then(m => m.MediaModule) },
  { path: 'Settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
