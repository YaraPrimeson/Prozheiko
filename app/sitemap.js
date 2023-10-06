import { getArticles } from "../lib/blog";
import { getServices } from "../lib/service";

const URL = "https://prozheiko.kiev.ua";

export default async function sitemapXml() {
  const articles = await getArticles("Показати всі");
  const articlesMap = articles?.map(({ urlName, updatedAt }) => ({
    url: `${URL}/blog/${urlName}`,
    lastModified: updatedAt,
  }));

  const services = (await getServices("Показати всі")) || [];
  const servicesMap = services?.map(({ urlName, updatedAt }) => ({
    url: `${URL}/services/${urlName}`,
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
