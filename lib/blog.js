import prisma from "./prisma";

export async function getArticles(tag) {
  try {
    if (tag !== "Показати всі") {
      return await prisma.article.findMany({
        where: { tag },
      });
    } else {
      return await prisma.article.findMany();
    }
  } catch (error) {
    return console.log(error);
  }
}

export async function getArticle(urlName) {
  try {
    return await prisma.article.findFirst({ where: { urlName } });
  } catch (error) {
    return console.log(error);
  }
}

export async function updateArticle(article) {
  try {
    return await prisma.article.update({
      where: { id: article.id },
      data: {
        tag: article.tag,
        like: article.like ?? "0",
        dislike: article.dislike ?? "0",
        title: article.title,
        blocks: article.blocks,
        imageUrl: article.imageUrl,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function createArticle(article) {
  try {
    return await prisma.article.create({
      data: {
        tag: article.tag,
        like: article.like,
        dislike: article.dislike,
        title: article.title,
        blocks: article.blocks,
        imageUrl: article.imageUrl,
        urlName: article.urlName,
        seoTitle: article.seoTitle,
        seoDescription: article.seoDescription,
        seoKeywords: article.seoKeywords,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteArticle(id) {
  try {
    return await prisma.article.delete({
      where: { id },
    });
  } catch (error) {
    return console.log(error);
  }
}

export async function editArticle(article) {
  try {
    return await prisma.article.update({
      where: { id: article.id },
      data: {
        tag: article.tag,
        like: article.like,
        dislike: article.dislike,
        title: article.title,
        blocks: article.blocks,
        imageUrl: article.imageUrl,
      },
    });
  } catch (error) {
    return console.log(error);
  }
}
