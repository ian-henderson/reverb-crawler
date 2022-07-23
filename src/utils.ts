export type UrlParams = Record<string, number | string | undefined>;

function createUrlParams(params: UrlParams): string {
  function toParamString(
    acc: string,
    [key, value]: [string, number | string | undefined],
    index: number
  ) {
    if (!value) return acc;

    return `${acc}${index === 0 ? "?" : "&"}${key}=${value}`;
  }

  return Object.entries(params).reduce(toParamString, "");
}

export interface CreateUrlArguments {
  domain: string;
  params?: UrlParams;
  path?: string;
  protocol?: string;
}

export function createUrl({
  domain,
  params,
  path = "",
  protocol = "https",
}: CreateUrlArguments) {
  const url = [`${protocol}://`, domain];

  if (path) url.push(path.startsWith("/") ? path : `/${path}`);

  if (params) url.push(createUrlParams(params));

  return url.join("");
}
