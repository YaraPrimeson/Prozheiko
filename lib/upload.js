import prisma from "./prisma";

export async function getImages() {
  try {
    const images = await prisma.image.findMany();
    return { images };
  } catch (error) {
    return error;
  }
}

export async function createImage(originalname, mimetype, path) {
  try {
    const image = await prisma.image.create({
      data: {
        originalname,
        mimetype,
        path,
      },
    });
    return { img: image };
  } catch (error) {
    return error;
  }
}

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     upload.single("image")(req, res, async (err) => {
//       if (err) {
//         return res.status(500).json({ error: "Failed to upload image" });
//       }
//
//       const { originalname, mimetype, path } = req.file;
//       try {
//         const uploadedImage = await prisma.image.create({
//           data: {
//             originalname,
//             mimetype,
//             path,
//           },
//         });
//
//         res.status(200).json({ id: uploadedImage.id });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to save image in database" });
//       }
//     });
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// };
