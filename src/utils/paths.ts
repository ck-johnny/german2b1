const rawBasePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const [, pathname = normalizedPath, suffix = ""] =
    normalizedPath.match(/^([^?#]*)([?#].*)?$/) ?? [];
  const lastSegment = pathname.split("/").at(-1) ?? "";
  const isPagePath = pathname !== "/" && !pathname.endsWith("/") && !lastSegment.includes(".");
  const routablePath = isPagePath ? `${pathname}/` : pathname;

  return `${rawBasePath}${routablePath}${suffix}`;
};

export const withoutBasePath = (path: string) => {
  const pathWithoutBase = !rawBasePath || !path.startsWith(rawBasePath)
    ? path
    : path.slice(rawBasePath.length) || "/";

  return pathWithoutBase.length > 1 && pathWithoutBase.endsWith("/")
    ? pathWithoutBase.slice(0, -1)
    : pathWithoutBase;
};
