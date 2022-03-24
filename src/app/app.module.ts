import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthInteceptor } from './core/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: AuthInteceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
