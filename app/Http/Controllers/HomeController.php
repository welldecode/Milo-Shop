<?php

namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
 

    public function index()
    { 
        $products = Product::with('brand', 'category', 'product_images')->orderBy('id','desc')->limit(8)->get();
        return Inertia::render('Home' , [
            'products'=>$products,
            'canLogin' => app('router')->has('login'),
            'canRegister' => app('router')->has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
