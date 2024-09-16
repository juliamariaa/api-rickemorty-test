import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<string[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getFavoriteCharacters(ids: string[]): Observable<any> {
    const url = `https://rickandmortyapi.com/api/character/${ids.join(',')}`;
    return this.http.get<any>(url);
  }
}
