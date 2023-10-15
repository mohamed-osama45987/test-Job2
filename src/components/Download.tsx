import { area } from "../types/area";

interface DownloadProps {
  imageUrl: string | null;
  crops: area[];
}

const Download = ({ imageUrl, crops }: DownloadProps) => {
  const HandelDownload = async (imageUrl: string | null, crops: area[]) => {
    if (!imageUrl) {
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    img.onload = () => {
      // Create a canvas and draw the image on it
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;

      if (!ctx) {
        return;
      }

      ctx.drawImage(img, 0, 0);

      // Draw black boxes on the image
      crops.forEach(
        (area: { x: number; y: number; width: number; height: number }) => {
          const { x, y, width, height } = area;
          ctx.fillStyle = "black";
          ctx.fillRect(x, y, width, height);
        }
      );

      // Convert the canvas to a data URL and download it
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "Edited_Image.png";
      link.click();
    };
  };

  return (
    <button
      className="w-2/3 py-4 bg-purple-600 rounded-full text-white hover:-translate-y-1 transition-transform"
      onClick={() => HandelDownload(imageUrl, crops)}
    >
      Download
    </button>
  );
};

export default Download;
