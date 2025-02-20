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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.669749571933!2d69.21251371128267!3d41.23206427120037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61947afb5fb3%3A0x4eb5241eda3b95f1!2sSergeli%20Moshina%20Bozor!5e1!3m2!1sru!2s!4v1740053775625!5m2!1sru!2s"
          width="100%"
          height="450"
          loading="lazy"
          style={{ borderRadius: '10px' }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Container>
  );
};

export default SingleProduct;
