import ImageCard from "./ImageCard";

interface ImageData {
  id: number;
  name: string;
  url: string;
}

interface Props {
  images: ImageData[];
  onDelete: (id: number) => void;
}

const ImageGrid: React.FC<Props> = ({ images, onDelete }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ImageGrid;
