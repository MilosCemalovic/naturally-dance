import { Component } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'
import { CardModule } from "primeng/card"

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule, TranslocoModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
