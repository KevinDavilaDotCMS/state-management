import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DTO } from '../state-elf/state.elf';

@Injectable({
  providedIn: 'root',
})
export class EditContentService {
  private readonly http = inject(HttpClient);

  getContentById(id: string) {
    console.log("Called getContentById");
    return this.http.get<DTO>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getContentTypeFormData(contentType: string) {
    console.log("Called getContentTypeFormData");
    return this.http.get<DTO>(
      `https://jsonplaceholder.typicode.com/posts/${contentType}`
    );
  }
}
