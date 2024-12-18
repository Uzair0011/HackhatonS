import Image from "next/image";
import { data } from "../../../data/allProductData";

interface Params {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: Params) {
  const { id } = params;

  // Find the specific product by id
  const product = data.find((item) => (item.id === id));

  // If product not found, show a message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="w-full h-auto md:h-[790px] flex flex-col md:flex-row justify-between items-center px-6">
      {/* Left Section */}
      <div className="w-full md:w-[50%] h-[653px]">
        <Image
          src={`/${product.imageURL}.png`} // Dynamically display image
          alt={product.title}
          width={1000}
          height={1000}
        />
      </div>

      {/* Right Section */}
      <div className="w-[50%] h-auto md:h-[653px] flex flex-col text-center md:text-start items-center  py-6 md:py-0">
        <div className="w-[373px] h-auto flex flex-col items-center md:items-start">
          {/* Title and Price */}
          <h1 className="text-[48px] font-medium">
            {product.title}
          </h1>
          <p className="text-[36px] font-medium py-5">{product.price}</p>

          {/* Description */}
          <p>
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its inside out inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </p>

          {/* Add to Cart Button */}
          <button className="w-[175px] h-[44px] bg-black flex items-center justify-center gap-2 text-white rounded-full mt-5 ">
            <Image src="/buy.png" alt="Buy" width={29} height={20} />
            Add To Cart
          </button>
        </div>
      </div>

    </div>
  );
}
