import type {
    PostsByProjectQuery,
    PostsByProjectQueryVariables,
} from "./queries/posts.generated";
import { PostsByProjectDocument } from "./queries/posts.generated";
import { getUrqlClient } from "./lib/urql";

export function add(a: number, b: number): number {
    return a + b;
}

export {
    PostsByProjectDocument,
    PostsByProjectQuery,
    PostsByProjectQueryVariables,
    getUrqlClient,
}
