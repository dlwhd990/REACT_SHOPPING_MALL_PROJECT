class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "zqjnyhlf");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dcx3u0sp8/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
