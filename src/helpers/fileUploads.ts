export const fileUpload = async (file: File) => {
  const cloudynaryUrl = 'https://api.cloudinary.com/v1_1/dayu9vym7/upload';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'react-journal');

  try {
    const resp = await fetch(cloudynaryUrl, {
      method: 'POST',
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    console.log(error);
  }
};
