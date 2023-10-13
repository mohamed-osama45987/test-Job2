import React, { useState } from "react";

import ImageEditor from "./Editor";

const ImageUpload = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-4/5 flex justify-center items-center">
      {!image && (
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      )}
      {image && <ImageEditor imgUrl={image.toString()} />}
    </div>
  );
};

export default ImageUpload;
