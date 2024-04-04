import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { SharedModule } from './shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { HomeModule } from './view/home/home.module';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { TokenInterceptorService } from './core/Interceptors/token-interceptor.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FeatherModule.pick(allIcons),
    SharedModule,
    CalendarModule,
    HomeModule
  ],
  providers: [
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '365938827641-ru8mdvqbbr2orm8v5ipqtpmpk6so4fjb.apps.googleusercontent.com'
          )
        }

      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },

],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private translateService: TranslateService,

  ) {
    // const appLang = localStorage.getItem('app-lang') ?? 'ar';
    // this.translateService.setDefaultLang('ar');
    // this.translateService.use(appLang);

    // this.translateService.onLangChange.subscribe((event) => {
    //   document.documentElement.dir = event.lang === 'ar' ? 'rtl' : 'ltr';
    //   document.documentElement.lang = event.lang;
    //   localStorage.setItem('app-lang', event.lang);

    // });
  }
 }
