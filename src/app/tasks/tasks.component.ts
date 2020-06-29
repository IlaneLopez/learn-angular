import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  posts = [];

  constructor(private apiService: ApiService) {
  }

  async getPosts() {
    this.posts = await this.apiService.getAllPosts().toPromise()
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
