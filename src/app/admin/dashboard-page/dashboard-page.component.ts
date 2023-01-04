import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import { PostsService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {



  constructor(

  ) {
  }

  ngOnInit() {

  }



  ngOnDestroy() {

  }

}
