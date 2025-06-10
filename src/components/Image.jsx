import product from "../product";

function Image() {
  return (
    <img src={product.image} alt={product.name} className='card-img-top fluid' />
  );
}

export default Image;
