import { Container } from '@mui/material';
import ImageSlider from '../ImageSlider/ImageSlider';
import Info from '../ProductMainInfo/info';

const SingleProduct = () => {
  return (
    <Container>
      <div className="flex flex-col gap-4 py-5">
        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-5">
          <div className="w-full md:w-1/2">
            <ImageSlider />
          </div>
          <div className="w-full rounded-lg bg-white p-5 shadow-md md:w-1/2">
            <Info />
          </div>
        </div>
        <div>Product Features</div>
        <div>Product Location</div>
      </div>
    </Container>
  );
};

export default SingleProduct;
