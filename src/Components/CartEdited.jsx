import cartimage2 from "../assets/cartimage2.jpg";
import { FaStar } from "react-icons/fa";
const CartEdited = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-[#313D6A]">
        <h1 className="text-white text-center text-2xl font-semibold py-4">
          My Cart
        </h1>
      </div>

      <div className="flex flex-col w-[90%] m-auto  lg:flex-row gap-8 py-20 min-h-screen">
        {/* LEFT: Product Cards */}
        <div className="flex-1 flex flex-col gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white border border-gray-300 rounded-md shadow-sm p-3 flex flex-col md:flex-row items-start gap-4"
            >
              {/* Thumbnail */}
              <img
                src={cartimage2}
                alt="Course Thumbnail"
                className="w-full md:w-40 h-40 md:h-auto object-cover rounded-md"
              />

              {/* Course Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-gray-800 font-semibold text-base">
                    Adobe Photoshop: Beginner To Advance In 1 Month
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">By Ibrahim Akram</p>

                  {/* Rating and Students */}
                  <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
                    <span className="text-yellow-500 font-medium">4.8</span>
                    <FaStar className="text-yellow-500" />
                    <span className="text-gray-500">(579)</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600 font-medium">
                      770 Students
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-2 flex gap-4 text-sm text-blue-600 font-medium">
                  <button className="hover:underline">Remove</button>
                  <button className="hover:underline">Move To Wishlist</button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right md:text-right mt-2 md:mt-0">
                <p className="text-pink-600 font-bold text-sm">20K PKR</p>
                <p className="text-xs text-gray-400 line-through">40K PKR</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Cart Summary */}
        <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-fit">
          <div className="flex justify-between text-lg font-bold text-gray-800 mb-6">
            <span className="text-2xl text-gray-600">Total</span>
            <div>
              {" "}
              <p className="text-xs text-gray-400 line-through">40K PKR</p>
              <p className="text-pink-600 font-bold text-sm">20K PKR</p>
            </div>
          </div>

          <button className="w-full bg-[#F5BB07] text-white py-3 rounded-lg hover:bg-[#f5ba07cb] transition cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartEdited;
