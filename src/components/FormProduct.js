import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { AddTableDiv, FormInput } from "../styles";
import { createProduct } from "../store/actions";
import { useHistory, useParams } from "react-router";

const FormProduct = () => {
  const products = useSelector((state) => state.products);
  const foundProduct = products.find((p) => p.slug === productSlug);
  const [product, setProduct] = useState(
    foundProduct ?? {
      name: "",
      imageUrl: "",
      price: 0,
      description: "",
    }
  );
  const { productSlug } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const resetForm = () => {
    setProduct({ name: "", imageUrl: "", price: 0, description: "" });
  };

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProduct(product));
    resetForm();
    history.push("/products");
  };
  return (
    <form onSubmit={handleSubmit}>
      <AddTableDiv>
        <title>{}</title>
        <FormInput
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="enter table name"
        />
        <FormInput
          onChange={handleChange}
          type="text"
          name="imageUrl"
          placeholder="paste image address here"
        />
        <FormInput
          onChange={handleChange}
          type="number"
          name="price"
          placeholder="enter table price"
        />
        <FormInput
          onChange={handleChange}
          type="text"
          name="description"
          placeholder="enter table description"
        />
        <button type="submit">Submit</button>
      </AddTableDiv>
    </form>
  );
};

export default FormProduct;
