import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

/**
 * Heading and subheading can be passed through simple string inputs or
 * with transclusion when more complex content is needed.
 */
@Component({
  selector: 'app-title-separator',
  templateUrl: './title-separator.component.html',
  styleUrls: ['./title-separator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class TitleSeparatorComponent {
  @Input()
  public heading: string;
  @Input()
  public subheading: string;
  @Input()
  public isFirst = false;
  @Input()
  public icon: string;
  @Input()
  public iconClasses: string;
  @Input()
  public iconClickable: boolean;
  @Input()
  public iconTooltip: string;
  @Output()
  public iconClicked = new EventEmitter<void>();

  public iconClick() {
    if (this.iconClickable) {
      this.iconClicked.emit();
    }
  }
}
