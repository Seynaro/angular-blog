import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {Post} from '../shared/interfaces';
import {switchMap} from 'rxjs/operators';
import { PostsService } from '../shared/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {



  constructor(

  ) {
  }

  ngOnInit() {

  }

}
