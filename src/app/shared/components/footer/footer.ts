import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [SvgIconComponent, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
