import { ImageDtoRes } from "./image";
import { Pagination } from "./pagination";

export interface CategoryResDto {
    id: number;
    name: string;
    image: ImageDtoRes | null;
}

export interface BrandResDto {
    id: number;
    name: string;
    image: ImageDtoRes | null;
}

export interface ProductResDto {
    id: number;
    name: string;
    description: string;
    originalPrice: number;
    discountPercentage: number | null;
    discountAmount: number | null;
    newPrice: number;
    isOnDiscount: boolean;
    stockQuantity: number;
    averageRating: number;
    totalReviews: number;
    inStock: boolean;
    isFeatured: boolean;
    category: CategoryResDto;
    brand: BrandResDto;
    thumbnail: ImageDtoRes | null;
}

export interface ProductFilters {
    pageIndex: number;
    pageSize: number;
    brandIds?: number[];
    categoryIds?: number[] ;
    ratings?: number[] ;
    search?: string ;
    inStock?: boolean ;
    minPrice?: number ;
    maxPrice?: number ;
    sort?: string ;
    sortOrder?: string;
}

export interface ProductPaginationRes extends Pagination<ProductResDto>{
    minPrice?: number ;
    maxPrice?: number ;
}