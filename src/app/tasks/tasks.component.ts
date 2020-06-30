import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service'
import { async } from 'rxjs/internal/scheduler/async';
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

  deleteRow(id) {
    this.posts = this.posts.filter(post => post.id != id)   
    this.deletePost(id)
  }

  async deletePost(id) {
    await this.apiService.deletePost(id).subscribe(
      async (response) => {
        console.log("succès")
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
