import React from "react";
import SearchBar from "../components/SearchBar";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";
import useImages from "../hooks/useImage.ts";

const Home: React.FC = () => {
  const { images, handleUpload, handleDelete, setSearchTerm } = useImages();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-zinc-800">
          Image Manager
        </h1>

        <SearchBar onSearch={setSearchTerm} />
        <UploadForm onUpload={handleUpload} />
        <ImageGrid images={images} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Home;
