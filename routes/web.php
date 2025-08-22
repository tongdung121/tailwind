<?php

use App\Http\Controllers\TaiwindController;
use Illuminate\Support\Facades\Route;

Route::get('/',[TaiwindController::class, 'index'])->name('taiwind.index');
