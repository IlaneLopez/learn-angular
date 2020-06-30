import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api-service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  postTitle = null;
  postBody = null;

  constructor(
    private apiService: ApiService) {
  }

  async addPost(data) {
    await this.apiService.addPost(data).subscribe(
      async () => {
        console.log("succès")
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
