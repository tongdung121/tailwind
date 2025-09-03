<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaiwindController extends Controller
{
    public function index()
    {
        return view('taiwind.index');
    }

    public function landing()
    {
        return view('taiwind.landing');
    }
}
