<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>landing4</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="m-0 p-0 overflow-hidden">
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
            <!-- Swiper container -->
            <div class="swiper mySwiperOuter w-screen">
                <div class="swiper-wrapper">

                    <!-- Section 1 -->
                    <div class="swiper-slide">
                        <div class="flex w-full">
                            <div class="w-3/5">
                                <img src="{{ asset('images/1.webp') }}" class="image" alt="">
                            </div>
                            <div class="w-2/5 flex flex-col justify-center p-8">
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

                    <!-- Section 2 -->
                    <div class="swiper-slide">
                        <div class="flex w-full">
                            <div class="w-2/5 flex flex-col justify-center p-8">
                                <h1 class="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
                                <p class="mb-6 overflow-y-auto h-[500px] text-scrollable">
                                    This is a sample landing page using Tailwind CSS and fullPage.js for smooth
                                    scrolling
                                    between
                                    sections.
                                </p>
                            </div>
                            <div class="w-3/5 relative">
                                <div class="swiper mySwiperFull3 mx-auto">
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
                                <div class="swiper mySwiperThumbs3 h-[100px] !absolute bottom-2 left-0 right-0 mx-auto">
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

                    <!-- Section 3 -->
                    <div class="swiper-slide flex items-center justify-center bg-red-500 text-white">
                        <h1 class="text-5xl font-bold">Section 3</h1>
                    </div>

                </div>
            </div>
        </div>

    </div>
</body>

</html>
