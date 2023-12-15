import { Injectable, inject } from '@angular/core';
import { EditContentService } from '../services/edit-content.service';
import { createStore, withProps } from '@ngneat/elf';
import { map, switchMap, tap } from 'rxjs';
import { joinRequestResult, trackRequestResult } from '@ngneat/elf-requests';
import { selectAllEntities } from '@ngneat/elf-entities';

interface EditContentStateModel {
  id: string;
  title: string;
}

export interface DTO {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class EditContentState {
  private readonly editContentService = inject(EditContentService);

  editContentStore = createStore(
    { name: 'edit-content' },
    withProps<EditContentStateModel>({ id: '0', title: 'Sample' })
  );

  editContentState$ = this.editContentStore.pipe(
    joinRequestResult(['edit-content'])
  );

  constructor() {
    console.log('EditContentState init', this.editContentStore);
  }

  getEditContentState(identifier: string | null, contentType: string) {
    const obs = identifier
      ? this.editContentService.getContentById(identifier).pipe(
          switchMap(({ id }) => {
            //Place some extra logic here
            return this.editContentService.getContentTypeFormData(id);
          })
        )
      : this.editContentService.getContentTypeFormData(contentType);

    return obs.pipe(
      tap((res) => this.setEditContentState(res)),
      trackRequestResult(['edit-content'])
    );
  }

  setEditContentState(state: EditContentStateModel) {
    this.editContentStore.update((editContentState) => ({
      ...editContentState,
      ...state,
    }));
  }
}
