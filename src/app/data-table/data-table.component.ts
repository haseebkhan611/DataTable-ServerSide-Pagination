import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { FetchDataService } from '../_services/fetch-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @ViewChild(DataTableDirective)

  dtOptions: DataTables.Settings = {};
  table: any = '';
  items: any | undefined;
  pageLength = 10;
  totalRows = 0;
  page = 0;
  dropDownOptions=["","Vanilla","Matrix","Syntrax"]
  defaultFilterValue=this.dropDownOptions[0]

  constructor(
    private _fetchDataService: FetchDataService,
  ) {}

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      serverSide: true,
      info: true,
      processing: true,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      ajax: (dataTablesParameters: any, callback) => {
        const page = $('#test-one').DataTable().page.info();

        const filter = $('#test-one').DataTable().search();
        this._fetchDataService
          .getData(page.page, page.length, this.defaultFilterValue)
          .subscribe((res) => {
            this.items = res.data;
            this.totalRows = res.totalRecords;

            callback({
              recordsTotal: res.totalRecords,
              recordsFiltered: res.totalRecords,
              data: [],
            });
          });
      },
    };
  }

  searchFilter(): void{
   
  //  $('#test-one').DataTable().draw();
  $('#test-one').DataTable().draw();
  
  
}
}
