import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selectedCategorySubject = new BehaviorSubject<string>('')
  selectedCategory = this.selectedCategorySubject.asObservable()

  setSelectedCategory(category: string) {
    this.selectedCategorySubject.next(category) 
  }
}
