import React, { useState } from 'react';
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
          setImageUrl(result.info.secure_url);
        }
      }
    ).open();
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
