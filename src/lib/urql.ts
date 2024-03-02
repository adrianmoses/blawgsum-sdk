import {Client, cacheExchange, createClient, fetchExchange} from "urql/core";

let _client: Client | null = null;
export const getUrqlClient = (apiKey: string) => {
    if (!_client) {
        _client = createClient({
            url: "https://app.blawgsum.com/api/graphql",
            requestPolicy: "cache-and-network",
            exchanges: [cacheExchange, fetchExchange],
            fetchOptions: () => {
                return {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                };
            },
        });
    }
    const client = _client;
    return { client };
}