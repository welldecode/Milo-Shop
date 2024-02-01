<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    public function index($slug)
    {
        $products = Product::where('slug', $slug)->first();

        $product_categorie = Product::with('category')->orderBy('id', 'desc')->limit(8)->get();
        $categories = Category::get();
        $brands = Brand::get(); 
        $relatedPosts = Product::with('brand', 'category', 'product_images')->where('id', '!=', $products->id)
            ->where('published', 0) 
            ->orderByDesc('id')
            ->take(2)
            ->get(); 

        return Inertia::render(
            'Product/Index',
            [
                'categories' => $categories,
                'relatedPosts' => $relatedPosts,
                'brands' => $brands,
                'products' => $products
            ]
        );
    }
}
