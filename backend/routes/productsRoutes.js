import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

// description  ------   fetch all products
// route        ------   Get/api/products
// privacy      ------   public

router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.send(products);
  }),
);

// description  ------   fetch product by id
// route        ------   Get/api/product/:id
// privacy      ------   public

router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404);
      throw new Error("product not found");
    }
  }),
);

export default router;
