import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};



/**
 * ObjectType representation for Comment model.
 * 
 * User can comment on the posts.
 */
export type CommentType = {
   __typename?: 'CommentType';
  id: Scalars['ID'];
  user: UserType;
  post: PostType;
  content: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  subComments: Array<SubCommentType>;
};

/** Creates Activity for the Post Interface, can only be accessed by superuser  */
export type CreateActivity = {
   __typename?: 'CreateActivity';
  activity?: Maybe<PostActivityType>;
};

/** Creates a Comment for a Post  */
export type CreateComment = {
   __typename?: 'CreateComment';
  comment?: Maybe<CommentType>;
};

/** Creates Feeling for the Post Interface, can only be accessed by superuser  */
export type CreateFeeling = {
   __typename?: 'CreateFeeling';
  expression?: Maybe<PostFeelingType>;
};

/** Creates a Post  */
export type CreatePost = {
   __typename?: 'CreatePost';
  post?: Maybe<PostType>;
};

/** Creates SubActivity for the Post Interface, can only be accessed by superuser  */
export type CreateSubActivity = {
   __typename?: 'CreateSubActivity';
  subActivity?: Maybe<PostSubActivityType>;
};

/** Creates a reply for the Comment  */
export type CreateSubComment = {
   __typename?: 'CreateSubComment';
  subComment?: Maybe<SubCommentType>;
};

/** Mutation to create a user and its profile  */
export type CreateUser = {
   __typename?: 'CreateUser';
  user?: Maybe<UserType>;
};



/** Deletes a Comment  */
export type DeleteComment = {
   __typename?: 'DeleteComment';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

/** Deletes a Post  */
export type DeletePost = {
   __typename?: 'DeletePost';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

/** Deletes a reply to the comment  */
export type DeleteSubComment = {
   __typename?: 'DeleteSubComment';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};


/** Adds a like to the Post  */
export type LikePost = {
   __typename?: 'LikePost';
  post?: Maybe<PostType>;
};

/** Mutations available in the schema  */
export type Mutation = {
   __typename?: 'Mutation';
  /** Creates Feeling for the Post Interface, can only be accessed by superuser  */
  createFeeling?: Maybe<CreateFeeling>;
  /** Creates Activity for the Post Interface, can only be accessed by superuser  */
  createActivity?: Maybe<CreateActivity>;
  /** Creates SubActivity for the Post Interface, can only be accessed by superuser  */
  createSubActivity?: Maybe<CreateSubActivity>;
  /** Creates a Post  */
  createPost?: Maybe<CreatePost>;
  /** Deletes a Post  */
  deletePost?: Maybe<DeletePost>;
  /** Creates a Comment for a Post  */
  createComment?: Maybe<CreateComment>;
  /** Deletes a Comment  */
  deleteComment?: Maybe<DeleteComment>;
  /** Creates a reply for the Comment  */
  createSubComment?: Maybe<CreateSubComment>;
  /** Deletes a reply to the comment  */
  deleteSubComment?: Maybe<DeleteSubComment>;
  /** Adds a like to the Post  */
  likePost?: Maybe<LikePost>;
  /** Removes a like from the Post  */
  unlikePost?: Maybe<UnlikePost>;
  /** Mutation to create a user and its profile  */
  createUser?: Maybe<CreateUser>;
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
};


/** Mutations available in the schema  */
export type MutationCreateFeelingArgs = {
  emoticon?: Maybe<Scalars['Upload']>;
  name: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationCreateActivityArgs = {
  emoticon?: Maybe<Scalars['Upload']>;
  name: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationCreateSubActivityArgs = {
  activityId: Scalars['String'];
  emoticon?: Maybe<Scalars['Upload']>;
  name: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationCreatePostArgs = {
  postData: PostInput;
};


/** Mutations available in the schema  */
export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationCreateCommentArgs = {
  content: Scalars['String'];
  postId: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationCreateSubCommentArgs = {
  commentId: Scalars['String'];
  content: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationDeleteSubCommentArgs = {
  subCommentId: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationLikePostArgs = {
  postId?: Maybe<Scalars['String']>;
};


/** Mutations available in the schema  */
export type MutationUnlikePostArgs = {
  postId?: Maybe<Scalars['String']>;
};


/** Mutations available in the schema  */
export type MutationCreateUserArgs = {
  userData: UserInput;
};


/** Mutations available in the schema  */
export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


/** Mutations available in the schema  */
export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


/** Mutations available in the schema  */
export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
   __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/**
 * ObjectType representation for PostActivity model.
 * 
 * User can mension their activity in the posts.
 */
export type PostActivityType = {
   __typename?: 'PostActivityType';
  id: Scalars['ID'];
  name: Scalars['String'];
  emoticon: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  subActivities: Array<PostSubActivityType>;
};

/**
 * ObjectType representation for PostFeeling model.
 * 
 * User can add an expression or feeling to their posts.
 */
export type PostFeelingType = {
   __typename?: 'PostFeelingType';
  id: Scalars['ID'];
  name: Scalars['String'];
  emoticon: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  postSet: Array<PostType>;
};

/**
 * ObjectType representation for PostGIF model.
 * 
 * User can add multiple gifs in their posts.
 */
export type PostGifType = {
   __typename?: 'PostGIFType';
  id: Scalars['ID'];
  post: PostType;
  gif: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

/**
 * ObjectType representation for PostImage model.
 * 
 * User can add multiple images in their posts.
 */
export type PostImageType = {
   __typename?: 'PostImageType';
  id: Scalars['ID'];
  post: PostType;
  image: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

/** InputObjectType defination for adding a post  */
export type PostInput = {
  shareWith: Scalars['String'];
  content: Scalars['String'];
  friendsTagged?: Maybe<Array<Scalars['String']>>;
  feelingId?: Maybe<Scalars['String']>;
  subActivityId?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['Upload']>>;
  videos?: Maybe<Array<Scalars['Upload']>>;
  gifs?: Maybe<Array<Scalars['Upload']>>;
};

/** An enumeration. */
export enum PostShareWith {
  /** Public */
  Public = 'PUBLIC',
  /** Friends */
  Friends = 'FRIENDS',
  /** Only Me */
  OnlyMe = 'ONLY_ME'
}

/**
 * ObjectType representation for PostSubActivity model.
 * 
 * User can elaborate their activity by choosing a sub activity while creating a posts.
 */
export type PostSubActivityType = {
   __typename?: 'PostSubActivityType';
  id: Scalars['ID'];
  activity: PostActivityType;
  name: Scalars['String'];
  emoticon: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  postSet: Array<PostType>;
};

/**
 * ObjectType representation for Post model.
 * 
 * User can add a post to his wall, tagging friends, uploading images/videos/gifs,
 * also has like, comment and even replying to the comments functionality.
 */
export type PostType = {
   __typename?: 'PostType';
  id: Scalars['ID'];
  user: UserType;
  shareWith: PostShareWith;
  content: Scalars['String'];
  likes: Scalars['Int'];
  usersLiked: Array<UserType>;
  friendsTagged: Array<UserType>;
  feeling?: Maybe<PostFeelingType>;
  subActivity?: Maybe<PostSubActivityType>;
  location?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  images: Array<PostImageType>;
  videos: Array<PostVideoType>;
  gifs: Array<PostGifType>;
  comments: Array<CommentType>;
  liked?: Maybe<Scalars['Boolean']>;
};

/**
 * ObjectType representation for PostVideo model.
 * 
 * User can add multiple videos in their posts.
 */
export type PostVideoType = {
   __typename?: 'PostVideoType';
  id: Scalars['ID'];
  post: PostType;
  video: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

/** An enumeration. */
export enum ProfileGender {
  /** Male */
  Male = 'MALE',
  /** Female */
  Female = 'FEMALE',
  /** Other */
  Other = 'OTHER'
}

/** InputObjectType defination for Profile model  */
export type ProfileModelInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  gender: Scalars['String'];
  dob: Scalars['Date'];
};

/** DjangoObjectType defination for Profile model  */
export type ProfileType = {
   __typename?: 'ProfileType';
  user: UserType;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  gender: ProfileGender;
  dob?: Maybe<Scalars['Date']>;
  friends: Array<UserType>;
  updated: Scalars['DateTime'];
};

/** Queries available in the schema  */
export type Query = {
   __typename?: 'Query';
  friendList?: Maybe<Array<Maybe<UserType>>>;
  /** Fetches a post corresponding to a postId */
  post?: Maybe<PostType>;
  /** Fetches all the posts corresponding to the current logged in user */
  myPosts?: Maybe<Array<Maybe<PostType>>>;
  /** Fetches posts corresponding to a userId of a friend */
  friendPosts?: Maybe<Array<Maybe<PostType>>>;
  /** Fetches all posts from every friend */
  allFriendsPosts?: Maybe<Array<Maybe<PostType>>>;
  user?: Maybe<UserType>;
  userList?: Maybe<Array<Maybe<UserType>>>;
};


/** Queries available in the schema  */
export type QueryPostArgs = {
  postId: Scalars['String'];
};


/** Queries available in the schema  */
export type QueryFriendPostsArgs = {
  friendId: Scalars['String'];
};


/** Queries available in the schema  */
export type QueryUserArgs = {
  userId?: Maybe<Scalars['String']>;
};

export type Refresh = {
   __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

/**
 * ObjectType representation for SubComment model.
 * 
 * Users can reply to the comment on the posts.
 */
export type SubCommentType = {
   __typename?: 'SubCommentType';
  id: Scalars['ID'];
  user: UserType;
  comment: CommentType;
  content: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
};

/** Removes a like from the Post  */
export type UnlikePost = {
   __typename?: 'UnlikePost';
  post?: Maybe<PostType>;
};


/** InputObjectType defination for User and Profile InputTypeObjects  */
export type UserInput = {
  user?: Maybe<UserModelInput>;
  profile?: Maybe<ProfileModelInput>;
};

/** InputObjectType defination for User model  */
export type UserModelInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  mobile: Scalars['String'];
  password: Scalars['String'];
};

/** DjangoObjectType defination for User model  */
export type UserType = {
   __typename?: 'UserType';
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean'];
  username: Scalars['String'];
  email: Scalars['String'];
  mobile: Scalars['String'];
  isStaff: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isVerified: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  profile?: Maybe<ProfileType>;
  friends: Array<ProfileType>;
  posts: Array<PostType>;
  usersLiked: Array<PostType>;
  friendsTagged: Array<PostType>;
  commentSet: Array<CommentType>;
  subcommentSet: Array<SubCommentType>;
};

export type Verify = {
   __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type AuthorizeUserMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type AuthorizeUserMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'payload' | 'refreshExpiresIn'>
  )> }
);

export type RegisterUserMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  mobile: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  gender: Scalars['String'];
  dob: Scalars['Date'];
};


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'CreateUser' }
    & { user?: Maybe<(
      { __typename?: 'UserType' }
      & Pick<UserType, 'id' | 'username'>
    )> }
  )> }
);

export type FetchAllUsersQueryVariables = {};


export type FetchAllUsersQuery = (
  { __typename?: 'Query' }
  & { userList?: Maybe<Array<Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'username'>
    & { profile?: Maybe<(
      { __typename?: 'ProfileType' }
      & Pick<ProfileType, 'firstName' | 'lastName'>
    )> }
  )>>> }
);

export type FetchUserQueryVariables = {
  userId: Scalars['String'];
};


export type FetchUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserType' }
    & Pick<UserType, 'username' | 'email' | 'mobile'>
    & { profile?: Maybe<(
      { __typename?: 'ProfileType' }
      & Pick<ProfileType, 'firstName' | 'lastName' | 'gender' | 'dob'>
      & { friends: Array<(
        { __typename?: 'UserType' }
        & { profile?: Maybe<(
          { __typename?: 'ProfileType' }
          & Pick<ProfileType, 'firstName' | 'lastName'>
        )> }
      )> }
    )> }
  )> }
);

export type FetchFriendsQueryVariables = {};


export type FetchFriendsQuery = (
  { __typename?: 'Query' }
  & { friendList?: Maybe<Array<Maybe<(
    { __typename?: 'UserType' }
    & { profile?: Maybe<(
      { __typename?: 'ProfileType' }
      & Pick<ProfileType, 'firstName' | 'lastName'>
    )> }
  )>>> }
);

export type FeelingMutationVariables = {
  name: Scalars['String'];
  emoticon?: Maybe<Scalars['Upload']>;
};


export type FeelingMutation = (
  { __typename?: 'Mutation' }
  & { createFeeling?: Maybe<(
    { __typename?: 'CreateFeeling' }
    & { expression?: Maybe<(
      { __typename?: 'PostFeelingType' }
      & Pick<PostFeelingType, 'id' | 'name' | 'emoticon'>
    )> }
  )> }
);

export const AuthorizeUserDocument = gql`
    mutation AuthorizeUser($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
    refreshExpiresIn
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthorizeUserGQL extends Apollo.Mutation<AuthorizeUserMutation, AuthorizeUserMutationVariables> {
    document = AuthorizeUserDocument;
    
  }
export const RegisterUserDocument = gql`
    mutation RegisterUser($username: String!, $password: String!, $email: String!, $mobile: String!, $firstName: String!, $lastName: String!, $gender: String!, $dob: Date!) {
  createUser(userData: {user: {username: $username, email: $email, mobile: $mobile, password: $password}, profile: {firstName: $firstName, lastName: $lastName, gender: $gender, dob: $dob}}) {
    user {
      id
      username
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterUserGQL extends Apollo.Mutation<RegisterUserMutation, RegisterUserMutationVariables> {
    document = RegisterUserDocument;
    
  }
export const FetchAllUsersDocument = gql`
    query FetchAllUsers {
  userList {
    username
    profile {
      firstName
      lastName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchAllUsersGQL extends Apollo.Query<FetchAllUsersQuery, FetchAllUsersQueryVariables> {
    document = FetchAllUsersDocument;
    
  }
export const FetchUserDocument = gql`
    query FetchUser($userId: String!) {
  user(userId: $userId) {
    username
    email
    mobile
    profile {
      firstName
      lastName
      gender
      dob
      friends {
        profile {
          firstName
          lastName
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchUserGQL extends Apollo.Query<FetchUserQuery, FetchUserQueryVariables> {
    document = FetchUserDocument;
    
  }
export const FetchFriendsDocument = gql`
    query FetchFriends {
  friendList {
    profile {
      firstName
      lastName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchFriendsGQL extends Apollo.Query<FetchFriendsQuery, FetchFriendsQueryVariables> {
    document = FetchFriendsDocument;
    
  }
export const FeelingDocument = gql`
    mutation feeling($name: String!, $emoticon: Upload) {
  createFeeling(name: $name, emoticon: $emoticon) {
    expression {
      id
      name
      emoticon
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FeelingGQL extends Apollo.Mutation<FeelingMutation, FeelingMutationVariables> {
    document = FeelingDocument;
    
  }