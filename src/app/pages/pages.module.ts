import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbInputModule,
  NbPopoverModule, NbSelectModule, NbTabsetModule, NbTooltipModule, NbWindowModule,
  NbAccordionModule, NbListModule, NbRouteTabsetModule, NbStepperModule, NbUserModule,
  NbMenuModule, NbActionsModule, NbDatepickerModule, NbIconModule, NbRadioModule,
  NbTreeGridModule, NbBadgeModule, NbSidebarModule,
  NbToastrModule, 
} from '@nebular/theme';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';

import { UploadService } from './../@core/mock/upload.service';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { UpdatesComponent } from './updates/updates.component';
import { ProductComponent } from './product/product.component';

import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { MerchantComponent } from './merchant/merchant.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PurchasesComponent } from './purchases/purchases.component';



@NgModule({
  imports: [
   
    CommonModule,
    PagesRoutingModule,
    NbActionsModule,
    NbBadgeModule,
    Ng2SmartTableModule,
    NbTreeGridModule,
    NbDatepickerModule, 
    NbIconModule,
    NbRadioModule,
    ReactiveFormsModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    NgxBarcode6Module,
    FormsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDialogModule,
    NbInputModule,
    NbPopoverModule,
    NbSelectModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
    NbAccordionModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbUserModule,
    NgbModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    
  ],
  declarations: [
    PagesComponent,
    // BrandsComponent,
    // ProductsComponent,
    // PromotionsComponent,
    // InventoryComponent,
    // NewsPostComponent,

    //FsIconComponent,

   
    UsersComponent,
    ReportsComponent,
    UpdatesComponent,
    ProductComponent,
    CategoryComponent,
    MerchantComponent,
    InvoiceComponent,
    NewInvoiceComponent,
    StatisticsComponent,
    PurchasesComponent,
  ],
  providers: [
    // services
   // NewsService,
    UploadService,
    // AllBrandService,
    // AllProductsService,
    // PromotionService,
    // UsersService,
    // CustomersService,
  ],
})
export class PagesModule {
}
