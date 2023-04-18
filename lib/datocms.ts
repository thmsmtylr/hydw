import { GraphQLClient } from "graphql-request";

type Headers = {
  authorization: string;
  "X-Include-Drafts"?: string;
  "X-Exclude-Invalid"?: string;
};

interface RequestProps {
  query: string;
  variables?: any;
  includeDrafts?: "true" | "false";
  excludeInvalid?: "true" | "false";
}

const ENDPOINT: string = "https://graphql.datocms.com";

export function request(props: RequestProps) {
  const { query, variables, includeDrafts, excludeInvalid } = props;

  const headers: Headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  if (includeDrafts) {
    headers["X-Include-Drafts"] = includeDrafts;
  }

  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = excludeInvalid;
  }

  const client = new GraphQLClient(ENDPOINT, { headers });
  return client.request(query, variables);
}
