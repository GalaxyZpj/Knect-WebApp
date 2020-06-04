import { Component, OnInit } from '@angular/core';
import { MyPostsGQL } from 'src/generated/types.graphql-gen';
import { Post } from '../models';

@Component({
  selector: 'wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  posts: Post[] = [];

  constructor(private myPosts: MyPostsGQL) { }

  ngOnInit(): void {
    this.myPosts.watch().valueChanges.subscribe(({ data, errors, loading, stale, networkStatus }) => {
      if (errors) {
        console.log(errors);
      } else {
        data.myPosts.forEach((item, index, arr) => {

          let nestedLists = {
            usersLiked: [],
            friendsTagged: [],
          };

          ['usersLiked', 'friendsTagged'].forEach(key => {
            item[key].forEach(item => {
              nestedLists[key].push({
                id: item.id,
                username: item.username,
                firstName: item.profile.firstName,
                lastName: item.profile.lastName,
              });
            });
          });

          this.posts.push(new Post(
            item.id,
            {
              id: item.user.id,
              username: item.user.username,
              firstName: item.user.profile.firstName,
              lastName: item.user.profile.lastName
            },
            item.shareWith,
            item.content,
            item.likes,
            nestedLists.usersLiked,
            nestedLists.friendsTagged,
            item.feeling,
            item.subActivity,
            item.location,
            item.liked,
            item.images,
            item.videos,
            item.gifs,
            item.comments
          ));
        });
        console.log(this.posts);
      }
    });
  }
}
