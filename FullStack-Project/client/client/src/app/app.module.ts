import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_API, BASE_IMAGE_API } from './core/token/baseUrl.token';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptor/api.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';
import { JwtModule } from '@auth0/angular-jwt';
import { appInitializer } from './core/helper/app.initializer';
import { AuthService } from './core/Services/auth.service';
import { AuthIntercetorInterceptor } from './core/interceptor/auth-intercetor.interceptor';
import { appEffects, appStore } from './redux/store';
import { NotificationModule } from './notification/notification.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appStore),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25 ,trace:true}),
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('accestoken'),
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      }
    }
    ),
    NotificationModule
   ],
  providers: [
    {
      provide:BASE_API,
      useValue:environment.baseApi
    },
    {
     provide:BASE_IMAGE_API,
     useValue:environment.imageBaseApi
    },
    {
      provide:APP_INITIALIZER,
      useFactory:appInitializer,
      multi:true,
      deps:[AuthService]},
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ApiInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthIntercetorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
