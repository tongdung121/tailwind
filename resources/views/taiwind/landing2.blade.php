<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Landing</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div id="loading">
        <div class="spinner"></div>
        <div class="loading-text">Loading...</div>
    </div>
    <div class="wrapper">
        <div id="header">
            <div class="container">
                <div class="menu">
                    <h1 class="text-xl font-bold">Header</h1>
                </div>
            </div>
        </div>

        <div class="content">
            <main>
                <div id="fullpage2">
                    <div class="section">
                        <div class="flex w-full resolver">
                            <div class="w-3/5 right-col">
                                <img src="{{ asset('images/1.webp') }}" class="image image-desktop" alt="">
                                <img src="{{ asset('images/mo_1.jpg') }}" class="image image-mobile" alt="">
                            </div>
                            <div class="w-2/5 left-col p-8">
                                <h1 class="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
                                <p class="mb-6">
                                    This is a sample landing page using Tailwind CSS and fullPage.js for smooth
                                    scrolling
                                    between
                                    sections.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="flex w-full resolver turned">
                            <div class="w-2/5 left-col p-8">
                                <h1 class="text-5xl font-bold mb-4 title">Welcome to Our Landing Page</h1>
                                <p class="mb-2 overflow-y-auto text-scrollable">
                                    @for ($i = 0; $i < 50; $i++)
                                        This is line {{ $i }}. Lorem ipsum dolor sit amet.<br>
                                    @endfor
                                </p>
                            </div>
                            <div class="w-3/5 relative right-col">
                                <div class="swiper mySwiperFull mx-auto">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img src="{{ asset('images/1.webp') }}" class="image" alt="">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="{{ asset('images/2.jpg') }}" class="image" alt="">
                                        </div>
                                    </div>

                                    <!-- Nút điều hướng -->
                                    <div class="swiper-button-next"></div>
                                    <div class="swiper-button-prev"></div>
                                </div>
                                <!-- Ảnh nhỏ (thumbnail) -->
                                <div class="swiper mySwiperThumbs h-[100px] !absolute bottom-2 left-0 right-0 mx-auto">
                                    <div class="swiper-wrapper flex items-center justify-center gap-2">
                                        <div class="swiper-slide !w-[100px] !h-[100px]">
                                            <img src="{{ asset('images/1.webp') }}" class="w-full h-full rounded"
                                                alt="">
                                        </div>
                                        <div class="swiper-slide !w-[100px] !h-[100px]">
                                            <img src="{{ asset('images/2.jpg') }}" class="w-full h-full rounded"
                                                alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section bg-red-500 flex items-center justify-center">
                        <h1 class="text-5xl font-bold text-white">Section 3</h1>
                    </div>
                </div>
            </main>
        </div>


    </div>


</body>

</html>
