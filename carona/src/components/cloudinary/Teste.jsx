import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';

const UserProfile = ({ userId }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/get-user-profile/${userId}`);
        setImageUrl(response.data.imageUrl);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div>
      <h1>User Profile</h1>
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

export default UserProfile;
