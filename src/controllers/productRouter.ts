import { Router, Request, Response } from "express";
import { ProductService } from "../services/ProductService.js";

// Router handles all product-related API endpoints
export const productRouter = Router();

/**
 * @route GET /api/v1/products
 * @desc Retrieves a list of all available products.
 * @access Public
 */
productRouter.get("/", async (req: Request, res: Response) => {
  try {
    // Controller delegates business logic to the Service Layer
    const products = await ProductService.getAvailableProducts();

    // Sends successful HTTP 200 response with the data
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    // Sends a generic HTTP 500 error response
    return res.status(500).json({
      message: "Internal Server Error during product retrieval.",
    });
  }
});

productRouter.post("/", async (req: Request, res: Response) => {
  try {
    const data = req.body; // Product data comes from the request body

    const newProduct = await ProductService.createNewProduct(data);

    // RESTful best practice: Use HTTP 201 Created status code
    // and return the newly created resource.
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    // Handle specific validation errors differently in a real app
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Invalid input data.",
    });
  }
});