import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private tost:ToastrService
) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
      return this.authenticationService.user$.pipe(
        map(user => {
          if (user) {
            // User is logged in, allow navigation
            return true;
          } else {
            // User is not logged in, redirect to login page with return URL
            return this.router.createUrlTree(['/auth/Login'], { queryParams: { returnUrl: state.url } });
          }
        })
      );
    }
}
