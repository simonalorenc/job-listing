import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selectedCategoriesSubject = new BehaviorSubject<string[]>([])

  addCategory(category: string) {
    const currentCategories = this.selectedCategoriesSubject.value
    if(!currentCategories.includes(category)) {
      currentCategories.push(category)
      this.selectedCategoriesSubject.next(currentCategories)
    }
  }

  setCategories(categories: string[]) {
    this.selectedCategoriesSubject.next(categories)
  }
}
