
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxBarcode6Module } from 'ngx-barcode6';
import {
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartPageComponent } from './start-page/start-page.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';


@NgModule({
  
  declarations: [AppComponent, StartPageComponent, ViewInvoiceComponent ],
  imports: [
    NgxBarcode6Module,
    TagInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NgbModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
