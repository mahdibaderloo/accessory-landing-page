import starIcon from "../../data/images/star.svg";

function ProductDetails({ product }) {
  const { id, name, price, image, category, description, rating, stock } =
    product;

  return (
    <div>
      <img src={image} alt="product image" />
      <div>
        <h3>{name}</h3>
        <p>$ {price}</p>
        <p>
          Products / {category} / {name}
        </p>
        <p>{description}</p>
        <p>
          <img src={starIcon} alt="star icon" />
          <span>{rating} / 5</span>
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
