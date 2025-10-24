import { Component, ChangeDetectionStrategy, input, inject, computed, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [AsyncPipe],
  templateUrl: './svg-icon.html',
  styleUrl: './svg-icon.scss'
})
export class SvgIconComponent {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private iconCache = new Map<string, Observable<SafeHtml>>();
  
  name = input.required<string>();
  size = input<number>(24);
  cssClass = input<string>('');
  
  svgContent = computed(() => this.getSvgIcon(this.name()));
  
  private getSvgIcon(iconPath: string): Observable<SafeHtml> {
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