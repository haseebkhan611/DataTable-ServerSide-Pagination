import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { FetchDataService } from '../_services/fetch-data.service';

@Component({
  selector: 'app-data-table-all',
  templateUrl: './data-table-all.component.html',
  styleUrls: ['./data-table-all.component.css'],
})
export class DataTableAllComponent implements OnInit {
  @ViewChild(DataTableDirective)
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  table: any = '';
  items: any | undefined;

  constructor(private _fetchDataService: FetchDataService) {
    
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: false,
    };
    this._fetchDataService.getAllData().subscribe((res) => {
      this.items = res.data;
      this.dtTrigger.next(true);

        setTimeout(() => {
          this.dtTrigger.next(true);
        });

      $('#test-one').DataTable({
        paging: true,
        scrollX: true,
        lengthChange : true,
        searching: true,
        ordering: true
      });
    });
  }
}
