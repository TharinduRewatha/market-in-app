import { ReportsComponent } from './reports/reports.component';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { MerchantComponent } from './merchant/merchant.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UpdatesComponent } from './updates/updates.component';



const routes: Routes = [

  {
  path: '',
  component: PagesComponent,
  children: [

    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'products',
      component: ProductComponent,
    },
    {
      path: 'category',
      component: CategoryComponent,
    }, 
    {
      path: 'merchant',
      component: MerchantComponent,
    },
    
    {
      path: 'invoice',
      component: InvoiceComponent,
    },
    {
      path: 'newinvoice',
      component: NewInvoiceComponent,
    },
    {
      path: 'purchases',
      component: PurchasesComponent,
    },
    {
      path: 'statistics',
      component: StatisticsComponent,
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
 
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
