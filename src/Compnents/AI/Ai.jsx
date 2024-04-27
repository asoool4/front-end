import React, { useState, useEffect } from 'react';
import styles from './Ai.module.css';
import d2 from './imgs/gallery-7.jpg';

export default function Ai() {
 const [originalImage, setOriginalImage] = useState(d2);
 const [enhancedImage, setEnhancedImage] = useState(null); // State for the enhanced image
 const [showInFirstCard, setShowInFirstCard] = useState(true); // Always show the first card with the default image
 const [showInSecondCard, setShowInSecondCard] = useState(false);
 const [uploadedFile, setUploadedFile] = useState(null); // Store the File object

 useEffect(() => {
    // Fetch the default image as a Blob to use for enhancement
    fetch(originalImage)
      .then(response => response.blob())
      .then(blob => {
        setUploadedFile(blob); // Store the Blob object
      });
 }, [originalImage]);

 const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setOriginalImage(reader.result); // Set the original image
      setUploadedFile(file); // Store the File object
    };

    if (file) {
      reader.readAsDataURL(file);
    }
 };

 const enhanceImage = async () => {
    if (!uploadedFile) return; // Ensure a file has been uploaded or fetched

    const formData = new FormData();
    formData.append('image', uploadedFile); // Use the File object or the fetched Blob

    const url = "http://localhost:5000/superres";

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const blob = await response.blob();
      const enhancedImageUrl = URL.createObjectURL(blob);
      setEnhancedImage(enhancedImageUrl); // Set the enhanced image
      setShowInSecondCard(true);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
 };

 const handleEnhancementClick = () => {
    enhanceImage();
 };

 const handleDownloadClick = () => {
    const downloadImage = showInSecondCard ? enhancedImage : originalImage;
    const link = document.createElement('a');
    link.href = downloadImage;
    link.download = 'image.jpg';
    link.click();
 };

 return (
    <>
      <section className={styles.imgEnhance}>
        <div className="container">
          <div className={styles.text}>
            <h2>Image Enhancement</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              temporibus ipsam quam aperiam id accusamus minima fuga voluptas
              culpa, <br />
              dignissimos in ipsum ea harum neque ipsa soluta adipisci
              assumenda voluptate?
            </p>

            <div className="row text-center">
              <div className="col-lg-6 col-md-12">
                <div className={styles.upload}>
                 <img src={originalImage} alt="Original Image" />
                </div>
                <div className={styles.inptParent}>
                 <div className="row">
                    <div className="col-lg-5">
                      <input className={styles.inpt} type="file" onChange={handleImageUpload} accept="image/*" />
                    </div>
                 </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className={styles.upload}>
                 {showInSecondCard && <img src={enhancedImage} alt="Enhanced Image" />}
                </div>
                <div className={styles.btns}>
                 <button className={`${styles.btn1} btn btn-primary mx-2 my-4`} onClick={handleEnhancementClick}>
                    Enhancement
                 </button>
                 <button className={`${styles.btn2} btn btn-success my-4`} onClick={handleDownloadClick} disabled={!showInSecondCard}>
                    <i className="fa-solid fa-download"></i>
                 </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
 );
}
