import { NextResponse } from "next/server";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.v2.uploader.upload(
      "/mnt/data/Gemini_Generated_Image_rn5xsyrn5xsyrn5x.png", // your local file
      {
        folder: "igniterenders/uploads",
        use_filename: true,
        unique_filename: false,
      }
    );

    return NextResponse.json({
      url: result.secure_url,
      result,
    });
  } catch (err) {
    console.error("Cloudinary upload failed:", err);
    return NextResponse.json(
      { error: "Upload failed", details: err },
      { status: 500 }
    );
  }
}
