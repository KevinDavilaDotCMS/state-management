import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { EditContentState } from 'src/app/state-elf/state.elf';
import { AddState } from 'src/app/state-ngxs/actions.state';

@Component({
  selector: 'app-emisor',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.scss'],
})
export class EmisorComponent {
  private readonly editContentState = inject(EditContentState);

  private store = inject(Store);

  emitEditContentStateElf() {
    //Replace null to '1' to emulate identifier
    this.editContentState.getEditContentState(null, '2').subscribe((res) => {
      console.log(res);
    });
  }

  emitEditContentStateNgXs() {
    //Replace null to '1' to emulate identifier
    this.store
      .dispatch(new AddState(null, '2'))
      .subscribe((state) => console.log(state));
  }
}
