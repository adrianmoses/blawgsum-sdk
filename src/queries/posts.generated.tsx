import * as Types from '../graphql/types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PostsByProjectQueryVariables = Types.Exact<{
  projectId: Types.Scalars['ID']['input'];
}>;


export type PostsByProjectQuery = { __typename?: 'Query', postsByProject: Array<{ __typename?: 'Post', id: string, title: string, slug: string, body: string, publishedAt?: string | null, coverImage?: string | null, author: { __typename?: 'User', email: string, image?: string | null, name?: string | null } }> };

export type PostByProjectAndSlugQueryVariables = Types.Exact<{
  projectId: Types.Scalars['ID']['input'];
  slug: Types.Scalars['String']['input'];
}>;


export type PostByProjectAndSlugQuery = { __typename?: 'Query', postByProjectAndSlug?: { __typename?: 'Post', id: string, title: string, slug: string, body: string, publishedAt?: string | null, publishedSince?: string | null, coverImage?: string | null, author: { __typename?: 'User', email: string, image?: string | null, name?: string | null } } | null };

export type PostLatestByProjectQueryVariables = Types.Exact<{
  projectId: Types.Scalars['ID']['input'];
}>;


export type PostLatestByProjectQuery = { __typename?: 'Query', postLatestByProject?: { __typename?: 'Post', id: string, title: string, slug: string, body: string, publishedAt?: string | null, publishedSince?: string | null, coverImage?: string | null, author: { __typename?: 'User', email: string, image?: string | null, name?: string | null } } | null };

export type PublishedPostsByProjectQueryVariables = Types.Exact<{
  projectId: Types.Scalars['ID']['input'];
}>;


export type PublishedPostsByProjectQuery = { __typename?: 'Query', publishedPostsByProject: Array<{ __typename?: 'Post', id: string, title: string, slug: string, body: string, publishedAt?: string | null, publishedSince?: string | null, coverImage?: string | null, author: { __typename?: 'User', email: string, image?: string | null, name?: string | null } }> };


export const PostsByProjectDocument = gql`
    query postsByProject($projectId: ID!) {
  postsByProject(projectId: $projectId) {
    id
    title
    slug
    body
    publishedAt
    coverImage
    author {
      email
      image
      name
    }
  }
}
    `;

export function usePostsByProjectQuery(options: Omit<Urql.UseQueryArgs<PostsByProjectQueryVariables>, 'query'>) {
  return Urql.useQuery<PostsByProjectQuery, PostsByProjectQueryVariables>({ query: PostsByProjectDocument, ...options });
};
export const PostByProjectAndSlugDocument = gql`
    query postByProjectAndSlug($projectId: ID!, $slug: String!) {
  postByProjectAndSlug(projectId: $projectId, slug: $slug) {
    id
    title
    slug
    body
    publishedAt
    publishedSince
    coverImage
    author {
      email
      image
      name
    }
  }
}
    `;

export function usePostByProjectAndSlugQuery(options: Omit<Urql.UseQueryArgs<PostByProjectAndSlugQueryVariables>, 'query'>) {
  return Urql.useQuery<PostByProjectAndSlugQuery, PostByProjectAndSlugQueryVariables>({ query: PostByProjectAndSlugDocument, ...options });
};
export const PostLatestByProjectDocument = gql`
    query postLatestByProject($projectId: ID!) {
  postLatestByProject(projectId: $projectId) {
    id
    title
    slug
    body
    publishedAt
    publishedSince
    coverImage
    author {
      email
      image
      name
    }
  }
}
    `;

export function usePostLatestByProjectQuery(options: Omit<Urql.UseQueryArgs<PostLatestByProjectQueryVariables>, 'query'>) {
  return Urql.useQuery<PostLatestByProjectQuery, PostLatestByProjectQueryVariables>({ query: PostLatestByProjectDocument, ...options });
};
export const PublishedPostsByProjectDocument = gql`
    query publishedPostsByProject($projectId: ID!) {
  publishedPostsByProject(projectId: $projectId) {
    id
    title
    slug
    body
    publishedAt
    publishedSince
    coverImage
    author {
      email
      image
      name
    }
  }
}
    `;

export function usePublishedPostsByProjectQuery(options: Omit<Urql.UseQueryArgs<PublishedPostsByProjectQueryVariables>, 'query'>) {
  return Urql.useQuery<PublishedPostsByProjectQuery, PublishedPostsByProjectQueryVariables>({ query: PublishedPostsByProjectDocument, ...options });
};