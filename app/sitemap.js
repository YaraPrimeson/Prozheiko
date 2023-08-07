import { getArticles } from "../lib/blog";
import { getServices } from "../lib/service";

const URL = "https://prozheiko.kiev.ua";

export default async function sitemapXml() {
  const articles = await getArticles("Показати всі");
  const articlesMap = articles.map(({ id, updatedAt }) => ({
    url: `${URL}/blog/${id}`,
    lastModified: updatedAt,
  }));
  const services = await getServices("Показати всі");
  const servicesMap = services.map(({ id, updatedAt }) => ({
    url: `${URL}/services/${id}`,
    lastModified: updatedAt,
  }));

  const routes = [
    "",
    "/services",
    "/blog",
    "/clinic",
    "/contacts",
    "/doctors",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...articlesMap, ...servicesMap];
}
