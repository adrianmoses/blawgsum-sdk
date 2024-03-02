import type {
    PostsByProjectQuery,
    PostLatestByProjectQuery,
    PostByProjectAndSlugQuery,
    PublishedPostsByProjectQuery,
    PostsByProjectQueryVariables,
    PostLatestByProjectQueryVariables,
    PostByProjectAndSlugQueryVariables,
    PublishedPostsByProjectQueryVariables,
} from "./queries/posts.generated";
import {
    PostsByProjectDocument,
    PostLatestByProjectDocument,
    PostByProjectAndSlugDocument,
    PublishedPostsByProjectDocument,
} from "./queries/posts.generated";
import { getUrqlClient } from "./lib/urql";

export function add(a: number, b: number): number {
    return a + b;
}

export {
    PostsByProjectDocument,
    PostLatestByProjectDocument,
    PostByProjectAndSlugDocument,
    PublishedPostsByProjectDocument,
    PostsByProjectQuery,
    PostLatestByProjectQuery,
    PostByProjectAndSlugQuery,
    PublishedPostsByProjectQuery,
    PostsByProjectQueryVariables,
    PostLatestByProjectQueryVariables,
    PostByProjectAndSlugQueryVariables,
    PublishedPostsByProjectQueryVariables,
    getUrqlClient,
}
