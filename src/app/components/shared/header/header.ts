import { TranslocoModule } from '@jsverse/transloco'
import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
