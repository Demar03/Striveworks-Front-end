interface ImageData {
  id: number;
  name: string;
  url: string;
}

interface Props {
  image: ImageData;
  onDelete: (id: number) => void;
}

const ImageCard: React.FC<Props> = ({ image, onDelete }) => {
  return (
    <div className="border rounded shadow-sm p-2">
      <img
        src={image.url}
        alt={image.name}
        className="w-full h-40 object-cover rounded"
      />
      <div className="flex justify-between items-center mt-2">
        <p className="truncate font-medium">{image.name}</p>
        <button
          onClick={() => onDelete(image.id)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
