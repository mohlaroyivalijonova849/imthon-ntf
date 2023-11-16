import { Button, Link as RouterLink } from "@mui/material";
import { Form, useLoaderData } from "react-router-dom";
// import { Formik, Form } from "formik";
import FormInput from "./FormInput";
import FormCheckBox from "./FormCheckBox";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";

const initialValues = {
  search: "",
  company: "",
  category: "",
  shipping: false,
  order: "",
  price: [0, 100],
};

function Filters() {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  const handleSelectChange = (name, value) => {
  };
  
  return (
    <div className="container">
      <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {/* search */}
        <FormInput
          type="search"
          label="Search Product"
          name="search"
          size="input-md"
          search={initialValues.search}
        />
        {/* category */}
        <FormSelect
          label="Select Category"
          name="category"
          list={meta.categories}
          defaultValue={category}
          size="input-md"
        />
        {/* company */}
        <FormSelect
          label="Company"
          name="company"
          list={meta.companies}
          defaultValue={company}
          size="input-md"
          onSelectChange={handleSelectChange}
        />
        {/* sort by */}
        <FormSelect
          label="Sort By"
          name="order"
          defaultValue={order}
          list={["a-z", "z-a", "high", "low"]}
          size="input-md"
        />
        {/* price range */}
        <FormRange
          label="Select Price"
          name="price"
          size="range-md"
          price={price}
        />
        {/* shipping */}
        <FormCheckBox
          name="shipping"
          size="input-sm"
          label="Free Shipping"
          defaultValue={shipping}
        />
        {/* buttons */}
        <Button type="submit" variant="contained" color="primary" size="small">
          Search
        </Button>
        <RouterLink to="/products">
          <Button variant="outlined" color="secondary" size="small">
            Reset
          </Button>
        </RouterLink>
      </Form>
    </div>
  );
}

export default Filters;
