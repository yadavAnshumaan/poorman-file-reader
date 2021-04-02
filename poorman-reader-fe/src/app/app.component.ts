import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public data: any[];
  private list: any;
  breadcrumb: any[];

  constructor(private appService: AppService) {
    this.data = [];
  }

  ngOnInit(): void {
    this.getDir();
  }

  getDir(path?: string) {
    this.appService.getDir(path).subscribe(v => {
      this.list = v;
      this.data = v.dir;
      this.breadcrumb = v.path.split('/');
    }, err => {
      console.error(err);
    });
  }

  handleClick(path: string) {
    this.getDir(this.list.path + '/' + path);
  }

  handleBreadcrumbClick(bread: number) {
    this.getDir(this.breadcrumb.slice(0, bread + 1).join('/'));
  }
}
