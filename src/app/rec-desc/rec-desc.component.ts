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
    this.route.params.subscribe(ps => {
      const params = Object.values(ps);
      this.getInfo.getFilingsData(params).subscribe(res => {
        const multiParams = params[0].split(',');
        if (multiParams.length > 0) {
          multiParams.forEach(seqNum => {
            this.tableData.push(res.find(x => x.srNum === seqNum));
          });
        }
      });
    });

    setTimeout(() => {
      window.print();
    }, 2000);
  }
}
