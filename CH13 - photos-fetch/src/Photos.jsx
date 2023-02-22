import { useEffect, useState } from "react";

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then(setPhotos);
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
      ))}
    </div>
  );
}

export default Photos;
