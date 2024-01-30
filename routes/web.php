<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ProductController;  
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/product/{slug}', [ProductsController::class, 'index'])->name('product');

//add to cart 

Route::group(['prefix' => 'cart'], function () {
    Route::get('/', [CartController::class, 'view'])->name('cart.view');  
    Route::post('store/{product}', [CartController::class, 'store'])->name('cart.store');  
    Route::patch('update/{product}', [CartController::class, 'update'])->name('cart.update');  
    Route::delete('delete/{product}', [CartController::class, 'delete'])->name('cart.delete');  
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/', [AdminController::class, 'index'])->name('admin.dashboard');

    //products routes  
       //products routes 
       Route::get('/products', [ProductController::class, 'index'])->name('admin.products.index');
       Route::post('/products/store',[ProductController::class,'store'])->name('admin.products.store');
       Route::put('/products/update/{id}',[ProductController::class,'update'])->name('admin.products.update');
       Route::delete('/products/image/{id}',[ProductController::class,'deleteImage'])->name('admin.products.image.delete');
       Route::delete('/products/destory/{id}',[ProductController::class,'destory'])->name('admin.products.destory');
       
});

//end

require __DIR__ . '/auth.php';
