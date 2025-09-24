import { Component } from '@angular/core'
import { TranslocoModule } from '@jsverse/transloco'
import { Card } from "primeng/card"

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Card, TranslocoModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
