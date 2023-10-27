import { RiDeleteBinLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";

const packageData = [
  {
    name: "Product1",
    category: "Category1",
    stock: 10,
    price: 110.0,
  },
  {
    name: "Product2",
    category: "Category2",
    stock: 0,
    price: 20.0,
  },
  {
    name: "Product3",
    category: "Category3",
    stock: 30,
    price: 30.0,
  },
  {
    name: "Product4",
    category: "Category4",
    stock: 0,
    price: 50.0,
  },
];

const ProductsTable1 = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Product
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Category
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Stock
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Price
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.category}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      packageItem.stock > 0
                        ? "text-success bg-success"
                        : "text-danger bg-danger"
                    }`}
                  >
                    {packageItem.stock}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.price}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <RiDeleteBinLine />
                    </button>
                    <button className="hover:text-primary">
                      <BiEditAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable1;
