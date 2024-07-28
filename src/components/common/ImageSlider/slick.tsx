const settings = {
  dots: true,
  infinity: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type Image = {
  title: string;
  alt: string;
  src: string;
};

interface ImageSlider {
  images: Image[];
}

// const ImageSlider = (images : ImageSlider) = {
//     return (

//     )
// }
