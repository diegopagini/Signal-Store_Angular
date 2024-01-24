import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ssr',
  standalone: true,
  imports: [],
  templateUrl: './ssr.component.html',
  styleUrl: './ssr.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SsrComponent {
  assetsLoad(): void {
    console.log('assets');
  }

  networkLoad(): void {
    console.log('network');
  }
}
