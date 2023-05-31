import { useEffect, useState } from "react";
import Button from "../../components/button";
import Carousel from "../../components/carousel";
import Modal from "../../components/modal";
import mock from "../../mock/data.json";

// This interface will be inside a ui model/dto folder
interface CarouselItem {
  title: string;
  image: string;
  url: string;
  price: number;
  currency: string;
  brand: string;
  discountPrice?: number;
}

export default function SliderPage() {
  const [selectedProductDetails, setSelectedProduct] =
    useState<CarouselItem | null>(null);

  function onProductClick(item: CarouselItem) {
    // Analytic events or soemthing else can go here.
    setSelectedProduct(item);
  }

  function renderProductDetails() {
    if (!selectedProductDetails) return <></>;
    return (
      <div>
        <h5>{selectedProductDetails.title}</h5>
        <div className="d-flex flex-column">
          <span className="text-capitalize fw-bold small">
            {selectedProductDetails.brand}
          </span>

          <span className="text-capitalize fw-bold small">
            Price:{" "}
            {`${selectedProductDetails.price} ${selectedProductDetails.currency}`}
          </span>
        </div>
        <p className="small text-secondary mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
        <div className="text-center">
          <img
            src={selectedProductDetails.image}
            alt="shoe"
            className="w-100"
            style={{ maxWidth: "300px" }}
          />
        </div>
        <Button
          label="Open Link"
          handleClick={() => window.open(selectedProductDetails.url, "_blank")}
          customClass="mt-5"
        />
      </div>
    );
  }

  useEffect(() => {
    // Importing the json directly. Ideally should make an API call here.
    // Carousel should have a skeleton loading section if the API is providing all the data at a time.
    // If API supports pagination, should make lazy API calls and use lazy image loading.
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <Carousel
            autoPlay
            speedInMs={4000}
            showMaxAtATime={8}
            column={4}
            items={mock}
            onItemClick={onProductClick}
          />
        </div>
      </div>

      <Modal
        isActive={!!selectedProductDetails}
        onClose={() => setSelectedProduct(null)}
      >
        {renderProductDetails()}
      </Modal>
    </>
  );
}
