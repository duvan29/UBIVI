import PropTypes from 'prop-types';
import style from './productCard.module.css'
import Button from '../button/button';

const ProductCard = ({ product }) => {
    ProductCard.propTypes = {
        product: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
          imageSrc: PropTypes.string.isRequired,
          imageAlt: PropTypes.string.isRequired,
          price: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
        }).isRequired,
      };
      return (
        <div className={style.cardDiv}>
          <div className={style.imgCard}>
            <div className={style.sombra}></div>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className={style.img}
            />
            <div className={style.price}>
              <p>{product.price}</p>
        </div>
          </div>
          <div className={style.propiedades}>
            <div>
              <h3 className={style.title}>
                <a href={product.href}>
                  <span aria-hidden="true"  />
                  {product.name}
                </a>
              </h3>
              <div className={style.color}>
                <p>{product.color}</p>
              </div>
              <Button/>
            </div>
      </div>
    </div>
  );
};

export default ProductCard;
