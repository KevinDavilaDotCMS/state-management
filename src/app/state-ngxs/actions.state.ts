import { Action, State, StateContext } from '@ngxs/store';
import { EditContentService } from '../services/edit-content.service';
import { switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';

export class AddState {
  static readonly type = '[EditContent] Add State';

  constructor(public identifier: string | null, public contentType: string) {}
}

interface EditContentStateModel {
  id: string;
  title: string;
}

@State<EditContentStateModel>({
  name: 'editContentState',
  defaults: {
    id: '0',
    title: 'Sample NgXS',
  },
})
@Injectable()
export class EditContentState {
  constructor(private editContentService: EditContentService) {}

  @Action(AddState)
  addEditContentState(
    { getState, setState }: StateContext<EditContentStateModel>,
    { identifier, contentType }: AddState
  ) {
    console.log("called action", identifier)
    const obs$ = identifier
      ? this.editContentService.getContentById(identifier).pipe(
          switchMap(({ id }) => {
            //Place some extra logic here
            return this.editContentService.getContentTypeFormData(id);
          })
        )
      : this.editContentService.getContentTypeFormData(contentType);

    return obs$.pipe(
      tap((res) => {
        const state = getState();
        console.log({ res, state });
        setState({
          ...state,
          ...res,
        });
      })
    );
  }
}
