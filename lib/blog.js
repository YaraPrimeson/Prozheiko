import prisma from "./prisma";

export async function getArticles() {
  try {
    return await prisma.article.findMany();
  } catch (error) {
    return console.log(error);
  }
}
export async function getArticle(id) {
  try {
    return await prisma.article.findUnique({ where: { id } });
  } catch (error) {
    return console.log(error);
  }
}

export async function createArticle(article) {
  console.log(article);
  try {
    return await prisma.article.create({
      data: article,
    });
  } catch (error) {
    return console.log(error);
  }
}

// tag: "діагностика",
//         like: "12",
//         dislike: "1",
//         blocks: [
//           { type: "title", value: "Diagnostic" },
//           { type: "paragraph", value: "lorem ipsum dolor sit amet" },
//         ],
//       },
