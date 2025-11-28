import { Product } from "../entities/Product.js";
import { ProductRepository } from "../respositories/ProductRepository.js";

/**
 * Business Logic Layer (Service) for Products.
 * Handles business rules and coordinates data access.
 */
export const ProductService = {
  /**
   * Fetches all products that are currently marked as available.
   * Includes any necessary business logic (e.g., pricing adjustments, logging).
   * @returns A promise resolving to an array of Product entities.
   */
  getAvailableProducts: async (): Promise<Product[]> => {
    // Example of where future business logic would go (e.g., checking promotions)

    // Delegates the data fetching directly to the Repository
    const products = await ProductRepository.findAllAvailable();

    // Example of post-processing logic (e.g., masking sensitive fields or logging)
    console.log(`Fetched ${products.length} available products.`);

    return products;
  },

  // We will add logic for creating orders, calculating totals, etc., here later.
};
