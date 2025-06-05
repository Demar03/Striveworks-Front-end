import { useEffect, useState } from "react";
import { getImages, uploadImage, deleteImage } from "../api/imageApi";

export interface ImageData {
  id: number;
  name: string;
  url: string;
}

export default function useImages() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const data = await getImages();
      setImages(data);
    }
    fetchData();
  }, []);

  const filteredImages = images.filter((img) =>
    img.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpload = async (img: Omit<ImageData, "id">) => {
    const newImage = await uploadImage(img);
    if (newImage) {
      setImages((prev) => [...prev, newImage]);
    } else {
      console.warn("Upload failed: no image returned");
    }
  };

  const handleDelete = async (id: number) => {
    const success = await deleteImage(id);
    if (success) {
      setImages((prev) => prev.filter((img) => img.id !== id));
    } else {
      console.warn(`Delete failed for image id ${id}`);
    }
  };

  return {
    images: filteredImages,
    handleUpload,
    handleDelete,
    setSearchTerm,
  };
}
