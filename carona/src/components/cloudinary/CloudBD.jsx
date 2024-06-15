import React, { useState } from 'react';
import axios from 'axios';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import { Cloudinary } from 'cloudinary-core';

const ProfileImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');

  const openWidget = () => {
    const cloudinary = new Cloudinary({ cloud_name: 'caronaCloudinary' });

    cloudinary.createUploadWidget(
      {
        cloudName: 'caronaCloudinary',
        uploadPreset: 'profile_pictures',
        sources: ['local', 'url', 'camera'],
        multiple: false,
        cropping: true,
      },
      (error, result) => {
        if (result.event === 'success') {
          const uploadedImageUrl = result.info.secure_url;
          setImageUrl(uploadedImageUrl);
          saveImageUrl(uploadedImageUrl);
        }
      }
    ).open();
  };

  const saveImageUrl = async (url) => {
    try {
      const response = await axios.post('/api/save-profile-image', {
        imageUrl: url,
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error saving image URL:', error);
    }
  };

  return (
    <div>
      <button onClick={openWidget}>Upload Image</button>
      {imageUrl && (
        <CloudinaryContext cloudName="caronaCloudinary">
          <Image publicId={imageUrl}>
            <Transformation width="200" height="200" crop="thumb" />
          </Image>
        </CloudinaryContext>
      )}
    </div>
  );
};

export default ProfileImageUpload;
