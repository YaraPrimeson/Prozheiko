// // import prisma from "./prisma";
// import {PrismaClient} from '@prisma/client'
//
// const prisma = new PrismaClient()
//
// export async function getTags() {
//     try {
//         // @ts-ignore
//         const tags = await prisma.tag.findMany();
//         return tags
//     } catch (error) {
//         return error;
//     }
// }
//
// export async function createTag(tagText: string) {
//     try {
//         // @ts-ignore
//         const tag = await prisma.tag.create({
//             data: {
//                 tag: tagText,
//             },
//         });
//         return tag;
//     } catch (error) {
//         return error;
//     }
// }
//
// import {createTag, getTags} from "../../../lib/tag";
//
// export default async function handler(req, res) {
//     if (req.method === "GET") {
//         try {
//             const {tags, error} = await getTags();
//             if (error) throw new Error(error);
//             return res.status(200).json(tags);
//         } catch (e) {
//             return res.status(500).json({error: e.message});
//         }
//     }
//
//     if (req.method === "POST") {
//         try {
//             const {tagText} = req.body;
//             console.log(tagText)
//             const uploadedTag = await createTag(tagText);
//
//             res.status(200).json(uploadedTag);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({error: "Failed to save image in database"});
//         }
//     } else {
//         res.status(405).json({error: "Method not allowed"});
//     }
// }
// // import {PrismaClient} from "@prisma/client";
// //
// // declare global {
// //     var prisma: PrismaClient | undefined;
// // }
// // const prisma = global.prisma || new PrismaClient();
// //
// // if (process.env.NODE_ENV === "development") global.prisma = prisma;
// // export default prisma;
//
// import { PrismaClient } from '@prisma/client'
//
// const prisma = new PrismaClient()
// export default prisma;
//
// generator client {
//     provider = "prisma-client-js"
// }
//
// datasource db {
//     provider = "mongodb"
//     url      = env("DATABASE_URL")
// }
//
// model Tag {
//     id  String @id @default(auto()) @map("_id") @db.ObjectId
//     tag String
// }
