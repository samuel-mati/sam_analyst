'use client';

import { useEffect } from 'react';

export default function VideoTest() {
  useEffect(() => {
    console.log("VideoTest component mounted");
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Video Test</h1>
      
      <div className="border-2 border-red-500 p-2 mb-4">
        <h2 className="text-xl mb-2">Test 1: Using video element directly</h2>
        <video 
          width="400" 
          controls
          className="border border-blue-500"
        >
          <source src="/videos/hero/hero_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="border-2 border-green-500 p-2 mb-4">
        <h2 className="text-xl mb-2">Test 2: Using direct path in img</h2>
        <img 
          src="/videos/hero/hero_video.mp4" 
          alt="This should fail but helps verify path"
          className="border border-blue-500 h-40"
        />
      </div>
      
      <p className="text-sm mt-4">
        If you see a playable video in Test 1, the path is correct and the video exists.<br />
        If not, there's an issue with either the file path or the file itself.
      </p>
    </div>
  );
} 