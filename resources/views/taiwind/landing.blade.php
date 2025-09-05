<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Landing</title>
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
</head>

<body>
    <div id="fullpage">
        <div class="section">
            <div class="flex h-screen w-full">
                <div class="w-3/5 h-screen">
                    <img src="{{ asset('images/1.webp') }}" class="aspect-[1152/953] h-full" alt="">
                </div>
                <div class="w-2/5 flex flex-col justify-center p-8">
                    <h1 class="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
                    <p class="mb-6">
                        This is a sample landing page using Tailwind CSS and fullPage.js for smooth scrolling between
                        sections.
                    </p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="flex h-screen w-full">
                <div class="w-2/5 flex flex-col justify-center p-8">
                    <h1 class="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
                    <p class="mb-6">
                        This is a sample landing page using Tailwind CSS and fullPage.js for smooth scrolling between
                        sections.
                    </p>
                </div>
                <div class="w-3/5 h-screen relative">
                    <div class="swiper mySwiperFull w-full h-full ml-auto">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="{{ asset('images/1.webp') }}" class="aspect-[1152/953] h-full" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="{{ asset('images/2.jpg') }}" class="aspect-[1152/953] h-full" alt="">
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
                                <img src="{{ asset('images/1.webp') }}" class="w-full h-full rounded" alt="">
                            </div>
                            <div class="swiper-slide !w-[100px] !h-[100px]">
                                <img src="{{ asset('images/2.jpg') }}" class="w-full h-full rounded" alt="">
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

</body>

</html>
