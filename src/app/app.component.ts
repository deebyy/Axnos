import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-stable-v';
  constructor(private toastrService: ToastrService,public translate: TranslateService) {}

  onClick() {
     this.toastrService.success('info');
    //  success, error, info, warning
  }
  switchLanguage() {
    const currentLang = this.translate.currentLang;
    this.translate.use(currentLang === 'ar' ? 'en' : 'ar');
  }
}
