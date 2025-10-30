import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { availableFields, OpenLibraryApiResult } from "../model/open-library.model";

// Docs: https://openlibrary.org/dev/docs/api/search

@Injectable({ providedIn: 'root'})
export class OpenLibraryApi {
  private client = inject(HttpClient);

  readonly entryPoint = 'https://openlibrary.org/search.json';

  search(query: string, page:number = 1, limit: number = 10): Observable<OpenLibraryApiResult> {
    const fields = availableFields.join(',');
    return this.client.get<OpenLibraryApiResult>(
      `${this.entryPoint}?q=${query}&page=${page}&limit=${limit}&fields=${fields}`
    );
  }
}
