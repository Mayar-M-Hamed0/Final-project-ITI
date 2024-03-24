import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DashboardAccessGuard implements CanActivate {

  res: any = '';

  constructor(private authService: LoginService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.auth().pipe(
      map(response => {
        // التحقق من وجود قيمة role وتحديد سلوك حسب قيمتها
        const role = response ? response.role : null;
        if (role === 'admin' || role === 'agent') {
          // إذا كان المستخدم مسؤولًا أو وكيلًا، يتم السماح بالوصول
          return true;
        } else {
          // في حالة أخرى، يتم توجيه المستخدم إلى صفحة تسجيل الدخول
          this.router.navigate(['/login']);
          return false;
        }
      }),
      catchError(error => {

        console.error(error);
        this.router.navigate(['/login']);
        return throwError(error);
      })
    );
  }
}
