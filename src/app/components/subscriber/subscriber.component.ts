import { Component, inject } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EditContentState } from 'src/app/state-elf/state.elf';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.scss']
})
export class SubscriberComponent {
  private readonly editContentState = inject(EditContentState);

  editContentState$ = this.editContentState.editContentState$;

  @Select('editContentState') editContentStateNgXS$!: Observable<any>;
}
