import { Component, Input, OnInit } from '@angular/core';
import { Dataset } from '../shared/dataset.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  @Input() displayedDataset: Dataset[];
  tableHeadings: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<any>('assets/headings.json').subscribe(
      (data) => {
        this.tableHeadings = data.headings;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filteredCharacteristics(characteristics: any[]): any[] {
    return characteristics.filter((characteristic) =>
      this.isHeadingPresent(characteristic.name)
    );
  }

  isHeadingPresent(key: string): boolean {
    return this.tableHeadings.includes(key);
  }
}
