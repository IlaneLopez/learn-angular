import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api-service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  post = null;
  postId = null;
  

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute) {
  }

  async getPost(id) {
    this.post = await this.apiService.getPost(id).toPromise()
  }

  ngOnInit(): void {
    this.postId = this.route.snapshot.url['1'].path
    this.getPost(this.postId);
  }
}
