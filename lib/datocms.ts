import { GraphQLClient } from "graphql-request";

type Headers = {
  authorization: string;
  "X-Include-Drafts"?: string;
  "X-Exclude-Invalid"?: string;
};

const ENDPOINT: string = "https://graphql.datocms.com";

export function request({
  query,
  variables,
  includeDrafts,
  excludeInvalid,
}: {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  excludeInvalid?: true;
}) {
  const headers: Headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }

  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }

  const client = new GraphQLClient(ENDPOINT, { headers });
  return client.request(query, variables);
}
