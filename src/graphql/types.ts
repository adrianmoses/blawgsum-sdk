export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Media = {
  __typename?: 'Media';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Post = {
  __typename?: 'Post';
  author: User;
  body: Scalars['String']['output'];
  coverImage?: Maybe<Media>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isPublished: Scalars['Boolean']['output'];
  publishedAt?: Maybe<Scalars['String']['output']>;
  publishedSince?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  postByProjectAndSlug?: Maybe<Post>;
  postLatestByProject?: Maybe<Post>;
  postsByProject: Array<Post>;
  publishedPostsByProject: Array<Post>;
};


export type QueryPostByProjectAndSlugArgs = {
  projectId: Scalars['ID']['input'];
  slug: Scalars['String']['input'];
};


export type QueryPostLatestByProjectArgs = {
  projectId: Scalars['ID']['input'];
};


export type QueryPostsByProjectArgs = {
  projectId: Scalars['ID']['input'];
};


export type QueryPublishedPostsByProjectArgs = {
  projectId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  avatarImage?: Maybe<UserMedia>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UserMedia = {
  __typename?: 'UserMedia';
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};
