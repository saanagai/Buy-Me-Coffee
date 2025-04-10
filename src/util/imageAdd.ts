const PRESET_NAME = process.env.NEXT_PUBLIC_PRESET_NAME;
const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;

export const imageUpload = async (file: File | null) => {
  if (!file) {
    alert("Please select a file");
    return;
  }

  if (!PRESET_NAME || !CLOUDINARY_NAME) {
    alert("Missing environment variables");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", PRESET_NAME);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    return data.secure_url;
  } catch (err) {
    console.error("Upload failed:", err);
    alert("Failed to upload file");
  }
};
