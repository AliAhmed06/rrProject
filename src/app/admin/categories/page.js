import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import TableOne from "../components/Tables/TableOne";
import TableThree from "../components/Tables/TableThree";
import TableTwo from "../components/Tables/TableTwo";
import ProductsTable1 from "./CategoriesTable1";

const ListCategories = () => {
  return (
    <>
      <Breadcrumb pageName="Categories" />

      <div className="flex flex-col gap-10">
        <ProductsTable1 />
      </div>
    </>
  );
};

export default ListCategories;
