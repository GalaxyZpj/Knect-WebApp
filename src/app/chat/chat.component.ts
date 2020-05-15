import { Component, OnInit } from '@angular/core';
import { FetchFriendsGQL } from 'src/generated/types.graphql-gen';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  data: any;
  loading: boolean;
  constructor(private fetchFriends: FetchFriendsGQL) { }

  ngOnInit(): void {
    this.fetchFriends.watch().valueChanges.subscribe(
      result => {
        this.data = result.data.friendList;
      }
    );
  }
}
