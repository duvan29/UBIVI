import ProductCard from "../productCard/productCard";
import style from './products.module.css'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Mariposa',
      href: '#',
      imageSrc: '/r2.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65.000',
      color: 'Elaborada de manera artesanal y fabricada con materiales biodegradables.',
    },
    {
      id: 2,
      name: 'Caballito de mar',
      href: '#',
      imageSrc: '/r1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65.000',
      color: 'Elaborada de manera artesanal y fabricada con materiales biodegradables.',
    },
    {
      id: 3,
      name: 'Labios estilo comic',
      href: '#',
      imageSrc: '/r3.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65.000',
      color: 'Elaborada de manera artesanal y fabricada con materiales biodegradables.',
    },
    {
      id: 4,
      name: 'Oso',
      href: '#',
      imageSrc: '/r4.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65.000',
      color: 'Elaborada de manera artesanal y fabricada con materiales biodegradables.',
    },
    {
      id: 5,
      name: 'Cisne',
      href: '#',
      imageSrc: '/r5.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65.000',
      color: 'Elaborada de manera artesanal y fabricada con materiales biodegradables.',
    },
    {
      id: 6,
      name: 'Luna',
      href: '#',
      imageSrc: '/r6.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$65.000',
      color: 'Elaborada de manera artesanal y fabricada con materiales biodegradables.',
    },
    // {
    //   id: 7,
    //   name: 'Basic Tee',
    //   href: '#',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$65.000',
    //   color: 'Black',
    // },
    // {
    //   id: 8,
    //   name: 'Basic Tee',
    //   href: '#',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$65.000',
    //   color: 'Black',
    // },
    // {
    //   id: 9,
    //   name: 'Basic Tee',
    //   href: '#',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //   imageAlt: "Front of men's Basic Tee in black.",
    //   price: '$65.000',
    //   color: 'Black',
    // },
  ]
  return (
    <>
      <div className={style.contenedor}>
        <div>
          <h1 className={style.title} >Repisas</h1>
          <div className={style.mainDiv}>
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
      </div>
    </div>
    </>
    
  );
}