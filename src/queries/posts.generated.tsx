import * as Types from '../graphql/types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PostsByProjectQueryVariables = Types.Exact<{
  projectId: Types.Scalars['ID']['input'];
}>;


export type PostsByProjectQuery = { __typename?: 'Query', postsByProject: Array<{ __typename?: 'Post', id: string, title: string, slug: string, body: string, publishedAt?: string | null, author: { __typename?: 'User', email: string } }> };


export const PostsByProjectDocument = gql`
    query postsByProject($projectId: ID!) {
  postsByProject(projectId: $projectId) {
    id
    title
    slug
    body
    publishedAt
    author {
      email
    }
  }
}
    `;

export function usePostsByProjectQuery(options: Omit<Urql.UseQueryArgs<PostsByProjectQueryVariables>, 'query'>) {
  return Urql.useQuery<PostsByProjectQuery, PostsByProjectQueryVariables>({ query: PostsByProjectDocument, ...options });
};