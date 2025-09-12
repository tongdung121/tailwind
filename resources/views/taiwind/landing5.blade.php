<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="m-0 p-0">
    <div id="loading">
        <div class="spinner"></div>
        <div class="loading-text">Loading...</div>
    </div>
    <!-- Header -->
    <header id="header" class="fixed top-0 left-0 right-0 h-[115px] bg-white shadow z-50 flex items-center px-8">
        <h1 class="text-2xl font-bold">My Landing</h1>
    </header>

    <!-- Swiper Outer -->
    <div class="swiper mySwiperOuter1 h-[calc(100vh-115px)] mt-[115px]">
        <div class="swiper-wrapper">

            <!-- Section 1 -->
            <div class="swiper-slide">
                <div class="flex resolver">
                    <div class="w-3/5 right-col">
                        <img src="{{ asset('images/1.webp') }}" class="image  image-desktop" alt="">
                        <img src="{{ asset('images/mo_1.jpg') }}" class="image  image-mobile" alt="">
                    </div>
                    <div class="w-2/5 p-8 left-col">
                        <h2 class="text-4xl font-bold mb-4">Section 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Molestiae, asperiores.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Section 2 (scrollable text) -->
            <div class="swiper-slide">
                <div class="flex w-full resolver turned">
                    <div class="w-2/5 p-8 left-col relative">
                        <h2 class="text-4xl font-bold mb-4 title">Scrollable Text</h2>
                        <p class="mb-2 overflow-y-auto text-scrollable">
                            @for ($i = 0; $i < 50; $i++)
                                This is line {{ $i }}. Lorem ipsum dolor sit amet.<br>
                            @endfor
                        </p>
                    </div>
                    <div class="w-3/5 right-col">
                        <img src="{{ asset('images/2.jpg') }}" class="image image-desktop" alt="">
                        <img src="{{ asset('images/mo_2.jpg') }}" class="image image-mobile" alt="">
                    </div>
                </div>
            </div>

            <!-- Section 3 (inner swiper + thumbs) -->
            <div class="swiper-slide">
                <div class="flex w-full resolver">
                    <div class="w-3/5 relative right-col">
                        <div class="swiper mySwiperFull1 mx-auto">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="{{ asset('images/1.webp') }}" class="image" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="{{ asset('images/2.jpg') }}" class="image" alt="">
                                </div>
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>
                        <!-- Thumbs -->
                        <div class="swiper mySwiperThumbs1 h-[100px] !absolute bottom-1 left-0 right-0 mx-auto">
                            <div class="swiper-wrapper flex items-center justify-center gap-2">
                                <div class="swiper-slide !w-[100px] !h-[100px]">
                                    <img src="{{ asset('images/1.webp') }}" class="image rounded" alt="">
                                </div>
                                <div class="swiper-slide !w-[100px] !h-[100px]">
                                    <img src="{{ asset('images/2.jpg') }}" class="image rounded" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/5 flex flex-col justify-center p-8 left-col">
                        <h2 class="text-4xl font-bold mb-4">Gallery</h2>
                        <p>Inner swiper with thumbnails.</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <footer id="footer" class="footer fixed bottom-0 w-full">
                    <div class="flex items-center justify-center bg-black text-white p-8">
                        <h2>footer</h2>
                    </div>
                </footer>
            </div>
        </div>
        <!-- Pagination -->
        {{-- <div class="swiper-pagination"></div> --}}
    </div>

</body>

</html>
