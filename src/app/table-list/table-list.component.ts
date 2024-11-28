import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  medecins: any[] = [];  // This will store the doctor data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch the doctor data from the JSON file
    this.http.get<any[]>('assets/medecins.json').subscribe(data => {
      console.log('Doctors Data:', data);  // To check if data is fetched
      this.medecins = data;  // Store the data in the medecins array
    }, error => {
      console.error('Error fetching data', error);
    });
  }
}
