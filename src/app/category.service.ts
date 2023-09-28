import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  selectedCategoriesSubject = new BehaviorSubject<string[]>([])
  //selectedCategories = this.selectedCategoriesSubject.asObservable()

  addCategory(category: string) {
    const currentCategories = this.selectedCategoriesSubject.value
    console.log("TAG_categoryService: " + currentCategories)
    if(!currentCategories.includes(category)) {
      currentCategories.push(category)
      this.selectedCategoriesSubject.next(currentCategories)
    }
  }
}
