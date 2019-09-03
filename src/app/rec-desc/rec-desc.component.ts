import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetSeqInfoService } from '../getSeqInfo.service';

@Component({
  selector: 'app-rec-desc',
  templateUrl: './rec-desc.component.html',
  styleUrls: ['./rec-desc.component.css']
})
export class RecDescComponent implements OnInit {
  tableData = [];
  constructor(
    public route: ActivatedRoute,
    public getInfo: GetSeqInfoService
  ) {}

  ngOnInit() {
    this.getInfo.getFilingsData().subscribe(res => {
      this.route.queryParams.subscribe(ps => {
        const params = Object.values(ps);
        params.forEach(seqNum => {
          this.tableData.push(res.data.find(x => x.seq === seqNum));
        });
      });
      console.table(this.tableData)
    });
  }
}
