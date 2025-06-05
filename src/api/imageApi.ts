import axios from "axios";
import type { ImageData } from "../hooks/useImage";

const API_URL = "/api/images";

export async function getImages(): Promise<ImageData[]> {
  try {
    const res = await axios.get<ImageData[]>(API_URL);
    console.log("Fetched images:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
}

export async function uploadImage(
  image: Omit<ImageData, "id">
): Promise<ImageData | null> {
  try {
    const res = await axios.post<ImageData>(API_URL, image);
    console.log("Uploaded image:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}

export async function deleteImage(id: number): Promise<boolean> {
  try {
    await axios.delete(`${API_URL}/${id}`);
    console.log(`Deleted image with id: ${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting image with id ${id}:`, error);
    return false;
  }
}
