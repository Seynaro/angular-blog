import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../shared/interfaces';
import { PostsService } from '../shared/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {



  constructor(private postsService: PostsService) {
  }

  ngOnInit() {

  }

}
