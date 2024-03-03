/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

export const CafeImages: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    // eslint-disable-next-line
    'https://media.istockphoto.com/id/1464754561/photo/coffee-cup-latte-art-on-table-in-background-of-interior-of-coffee-shop-local-small-businesses.webp?b=1&s=170667a&w=0&k=20&c=ClDe_nXR-zyUOtWwoRtqfKm3AJDVVorgiPS_YDJT2GE=',
    // eslint-disable-next-line
    'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=pexels-igor-starkov-1307698.jpg&fm=jpg',
    // eslint-disable-next-line
    'https://assets.vogue.com/photos/618e7c4badd0a25be01d750e/master/pass/GettyImages-1222654885.jpg',
    // eslint-disable-next-line
    'https://media.istockphoto.com/id/971247316/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B8%D0%B9-%D1%81%D1%82%D0%B0%D0%BA%D0%B0%D0%BD-%D0%B3%D0%B0%D1%80%D1%8F%D1%87%D0%BE%D1%97-%D0%BA%D0%B0%D0%B2%D0%B8-%D0%B7-%D0%BB%D0%B0%D1%82%D1%82%D0%B5-%D0%B0%D1%80%D1%82-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-%D1%81%D1%82%D0%BE%D0%BB%D1%83.jpg?s=612x612&w=0&k=20&c=umZZyJzZBtRL-UcyU9ZTm1XKdS31pkTwkIymtzTGIEU=',
    // eslint-disable-next-line
    'https://media.istockphoto.com/id/1299733327/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%87%D0%B0%D1%88%D0%BA%D0%B0-%D0%BA%D0%B0%D0%B2%D0%B8-%D0%BA%D1%80%D1%83%D0%B0%D1%81%D0%B0%D0%BD-%D0%B7%D0%B0-%D1%81%D1%82%D0%BE%D0%BB%D0%BE%D0%BC-%D0%B1%D1%96%D0%BB%D1%8F-%D0%B2%D1%96%D0%BA%D0%BD%D0%B0-%D0%B2-%D0%BA%D0%B0%D1%84%D0%B5-%D1%80%D0%BE%D0%B7%D0%BC%D0%B8%D1%82%D0%B8%D0%B9-%D1%84%D0%BE%D0%BD.jpg?s=2048x2048&w=is&k=20&c=gvgw3aP4arMOPHYqCbFK-tiS0A4E18eIpXwIymt0Fgg=',
    // eslint-disable-next-line
    'https://media.istockphoto.com/id/1464525180/photo/cafe-couple-date-cheers-and-woman-smile-in-a-coffee-shop-with-a-man-feeling-love-and.webp?b=1&s=170667a&w=0&k=20&c=_QKeux8K-BU9h-g82GQTHqFRxc7UG6gPa1iQVrAQAxU=',
    // eslint-disable-next-line
    'https://media.istockphoto.com/id/1459254779/photo/entrance-of-coffee-shop-with-tables-and-chairs-on-sidewalk.webp?b=1&s=170667a&w=0&k=20&c=xGL0KF0QdHawIgH2-ewb1SG8k62O1NOherm1S1Dvguc=',
    // eslint-disable-next-line
    'https://media.istockphoto.com/id/1360536528/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D0%BF%D0%B0%D0%BB%D0%B8%D0%BB%D0%B8-%D1%81%D0%B2%D1%96%D1%87%D0%BA%D1%83-%D0%B7%D0%B0-%D0%B2%D1%96%D0%B4%D0%BA%D1%80%D0%B8%D1%82%D0%B8%D0%BC-%D1%81%D1%82%D0%BE%D0%BB%D0%BE%D0%BC-%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D1%83-%D1%80%D1%96%D0%B7%D0%B4%D0%B2%D1%8F%D0%BD%D1%96-%D0%B2%D0%BE%D0%B3%D0%BD%D1%96-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%B4%D0%BD%D1%8C%D0%BE%D0%BC%D1%83-%D0%BF%D0%BB%D0%B0%D0%BD%D1%96.jpg?s=612x612&w=0&k=20&c=EfaZWEWYDyDKU1vo3QihNi8rFZPHTuYgJl3lrmMyUjg=',
  ];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="cafe-info__photo-section">
      {images.map((src, index) => (
        // eslint-disable-next-line
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="100%"
          key={ src }
          style={{ margin: '2px' }}
          alt=""
          className="cafe-info__image"
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll
          closeOnClickOutside
          onClose={ closeImageViewer }
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.8)"
          }}
        />
      )}
    </div>
  );
};
