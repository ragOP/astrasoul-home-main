import React from 'react';

const SignatureVideoSection = () => {
  return (
    <section className="py-4 mb-2">
      <div className="max-w-4xl mx-auto relative">
        <video
          className="w-full h-64 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/signature-video.mp4" type="video/mp4" />
          <source src="/signature-video.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default SignatureVideoSection; 