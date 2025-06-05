import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface ImageData {
  name: string;
  url: string;
}

interface Props {
  onUpload: (image: ImageData) => void;
}

const UploadForm: React.FC<Props> = ({ onUpload }) => {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!file || !name) {
      console.warn("Upload failed: missing name or file.");
      setValidationError("Please select both an image and enter a name.");
      return;
    }

    setValidationError("");

    console.log("Uploading Image:");
    console.log("Name:", name);
    console.log("File:", file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        console.log(
          "Base64 encoded image:",
          reader.result.slice(0, 50) + "..."
        );
        onUpload({ name, url: reader.result });
        setName("");
        setFile(null);
        console.log("Image uploaded successfully");
      } else {
        console.error("FileReader result not a string");
      }
    };

    reader.onerror = () => {
      console.error("Error reading file:", reader.error);
    };

    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 flex flex-col">
      <label className="block font-medium">Enter Image Name:</label>
      <input
        type="text"
        placeholder="Image name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const selectedFile = e.target.files ? e.target.files[0] : null;
          setFile(selectedFile);
          if (selectedFile) {
            console.log("Selected file:", selectedFile.name);
          }
        }}
        className="max-w-min p-2 bg-zinc-200 rounded"
      />

      {validationError && (
        <div className="text-red-600 text-sm mt-1">{validationError}</div>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
