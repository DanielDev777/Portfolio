import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private iconCache = new Map<string, Observable<SafeHtml>>();

  getSvgIcon(iconPath: string): Observable<SafeHtml> {
    if (!this.iconCache.has(iconPath)) {
      const svg$ = this.http.get(`/img/icons/${iconPath}.svg`, { responseType: 'text' })
        .pipe(
          map(svgContent => this.sanitizer.bypassSecurityTrustHtml(svgContent)),
          shareReplay(1)
        );
      this.iconCache.set(iconPath, svg$);
    }
    return this.iconCache.get(iconPath)!;
  }
}