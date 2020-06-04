import { User, Feeling, SubActivity } from './interfaces';

export class Post {

  public id: string;
  public user: User;
  public shareWith: string;
  public content: string;
  public likes: number;
  public usersLiked: User[];
  public friendsTagged: User[];
  public feeling: Feeling;
  public subActivity: SubActivity;
  public location: string;
  public liked: boolean;
  public images: any[];
  public videos: any[];
  public gifs: any[];
  public comments: any[];

  constructor (
    id: string,
    user: User,
    shareWith: string,
    content: string,
    likes: number,
    usersLiked: User[],
    friendsTagged: User[],
    feeling: Feeling,
    subActivity: SubActivity,
    location: string,
    liked: boolean,
    images: any[],
    videos: any[],
    gifs: any[],
    comments: any[],
  ) {
    this.id = id;
    this.user = user;
    this.shareWith = shareWith;
    this.content = content;
    this.likes = likes;
    this.usersLiked = usersLiked;
    this.friendsTagged = friendsTagged;
    this.feeling = feeling;
    this.subActivity = subActivity;
    this.location = location;
    this.liked = liked;
    this.images = images;
    this.videos = videos;
    this.gifs = gifs;
    this.comments = comments;
  }
}
