import { Component } from '@angular/core';
import { dataset } from './shared/dataset.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  largeDataset: dataset[] = [];
  filteredDataset: dataset[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    //filtering the dataset and changing the name of 1 product type
    this.httpClient.get<dataset[]>('assets/dataset.json').subscribe(
      (dataset) => {
        this.largeDataset = dataset;
        this.filterAndModifyData();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  filterAndModifyData(): void {
    this.filteredDataset = this.largeDataset
      .filter(
        (product: dataset) =>
          product.type === 'Electronics' || product.type === 'Furniture'
      )
      .map((product: dataset, index) => {
        if (product.type === 'Electronics') {
          return { ...product, name: `EProduct ${product.id + 1}`, id: index };
        }
        return { ...product, id: index };
      });

    console.log(this.filteredDataset);
  }
}
