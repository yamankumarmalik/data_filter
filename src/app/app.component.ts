import { Component } from '@angular/core';
import { RootObject, Dataset } from './shared/dataset.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  largeDataset: Dataset[] = [];
  filteredDataset: Dataset[] = [];

  types: any[] = ['All', 'Electronics', 'Furniture'];
  selectedValue: string = 'All';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    //filtering the dataset and changing the name of 1 product type
    this.httpClient.get<RootObject>('assets/newDataset.json').subscribe(
      (dataset) => {
        this.largeDataset = dataset.data.details.data;
        console.log(this.largeDataset);
        this.filterAndModifyData();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  filterAndModifyData(): void {
    this.filteredDataset = this.largeDataset
      .filter((product: Dataset) => {
        if (this.selectedValue === 'All') {
          return product.type === 'Electronics' || product.type === 'Furniture';
        } else if (this.selectedValue === 'Electronics') {
          return product.type === 'Electronics';
        } else {
          return product.type === 'Furniture';
        }
      })
      .map((product: Dataset, index) => {
        if (product.type === 'Electronics') {
          return { ...product, status: 'Active', id: `${index + 1}` };
        }
        return { ...product, id: `${index + 1}` };
      });

    console.log(this.filteredDataset);
  }
}
