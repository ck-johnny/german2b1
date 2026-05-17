const rawBasePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${rawBasePath}${normalizedPath}`;
};

export const withoutBasePath = (path: string) => {
  if (!rawBasePath || !path.startsWith(rawBasePath)) return path;

  return path.slice(rawBasePath.length) || "/";
};
