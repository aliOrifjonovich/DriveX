import { Container } from '@mui/material';
import ImageSlider from '../ImageSlider/ImageSlider';

const SingleProduct = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 py-5">
        <div className="w-full flex-row gap-5 md:flex">
          <div className="w-full md:w-1/2">
            <ImageSlider />
          </div>
          <div className="w-full border border-solid border-red-900 md:w-1/2">Product info</div>
        </div>
        <div>Product Features</div>
        <div>Product Reviews</div>
        <div>Product Location</div>
      </div>
    </Container>
  );
};

export default SingleProduct;
