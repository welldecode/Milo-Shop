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

        $categories = Category::get();
        $brands = Brand::get();
        
        return Inertia::render(
            'Product/Index',
            [
                'categories'=> $categories,
                'brands'=> $brands,
                'products' => $products
            ]
        );
    }
}
