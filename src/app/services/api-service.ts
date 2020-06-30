import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "any" })
export class ApiService {
    constructor(private http: HttpClient) { }
    getAllPosts() {
        return this.http.get<any>(`http://localhost:3000/posts`);
    }
    getPost(id) {
        return this.http.get<any>(`http://localhost:3000/posts/${id}`);
    }
    deletePost(id) {
        return this.http.delete<any>(`http://localhost:3000/posts/${id}`);
    }
}