import { Component, ChangeDetectionStrategy, input, inject, computed } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
  template: `
    <div 
      class="svg-icon"
      [style.width]="size() + 'px'"
      [style.height]="size() + 'px'"
      [innerHTML]="svgContent() | async">
    </div>
  `,
  styles: [`
    .svg-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .svg-icon svg {
      width: 100%;
      height: 100%;
      stroke: var(--highlight-primary);
      stroke-width: 2;
      fill: none;
    }
  `]
})
export class SvgIconComponent {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private iconCache = new Map<string, Observable<SafeHtml>>();
  
  name = input.required<string>();
  size = input<number>(24);
  
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