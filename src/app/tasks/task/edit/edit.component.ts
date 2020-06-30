import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api-service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  post = null;
  postId = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  async getPost(id) {
    this.post = await this.apiService.getPost(id).toPromise()
  }

  async updatePost() {
    console.log("update")
    if (!this.postId) {
      console.log("if")
      console.error("Attention, Le postId est NULL")
    } else {   
      console.log("else")
      this.post.id = this.postId
      await this.apiService.updatePost(this.post).subscribe(
        async () => {
          this.router.navigate(['tasks'])
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  ngOnInit(): void {
    this.postId = this.route.snapshot.url['1'].path
    this.getPost(this.postId);
  }
}
