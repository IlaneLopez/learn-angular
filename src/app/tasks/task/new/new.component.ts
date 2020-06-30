import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api-service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  postTitle = null;
  postBody = null;

  constructor(
    private apiService: ApiService,
    private router: Router) {
  }

  async addPost(data) {
    await this.apiService.addPost(data).subscribe(
      async () => {
        this.router.navigate(['tasks'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit(): void { }

  newPost () {
    let data = {
      title:this.postTitle,
      body:this.postBody
    }

    this.addPost(data);
  }
}
