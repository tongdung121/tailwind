<?php

use App\Http\Controllers\SlideController;
use App\Http\Controllers\TaiwindController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TaiwindController::class, 'index'])->name('taiwind.index');
Route::get('/landing', [TaiwindController::class, 'landing'])->name('taiwind.landing');

Route::domain('vini.test')->group(function () {
    Route::get('/', function () {
        return 'Hello from storage.local';
    });
});

Route::domain('api.local')->group(function () {
    Route::get('/', function () {
        return 'Hello from api.local';
    });
});

Route::get('/create', [SlideController::class, 'create'])->name('slides.create');
Route::post('/store', [SlideController::class, 'store'])->name('slides.store');
