<?php

namespace App\Http\Controllers;

use App\Models\Slide;
use Illuminate\Http\Request;

class SlideController extends Controller
{
    public function index()
    {
        return view('slides.index');
    }

    public function create()
    {
        return view('slides.create');
    }

    public function store(Request $request)
    {
        // Validate and store the slide
        $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required',
            'type' => 'required|integer',
        ]);

        $slide = new Slide();
        try {
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $extension = $image->getClientOriginalExtension();
                $fileName = md5(time() . rand(0, 999999)) . '.' . $extension;
                $image->move(public_path('uploads/slides/'), $fileName);
                $slide->image = $fileName;
            }
            $slide->title = $request->input('title');
            $slide->type = $request->input('type');
            $slide->save();
        } catch (\Exception $e) {
            dd($e->getMessage());
            return redirect()->back()->with('error', 'Failed to create slide: ' . $e->getMessage());
        }


        return redirect()->route('slides.create')->with('success', 'Slide created successfully.');
    }
}
