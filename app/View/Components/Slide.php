<?php

namespace App\View\Components;

use App\Models\Slide as ModelsSlide;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Collection;
use Illuminate\View\Component;

class Slide extends Component
{
    public Collection $slides;

    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $this->slides = ModelsSlide::all();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.slide');
    }
}
