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

                    <div class="section">
                        <div class="flex w-full">
                            <div class="w-2/5 flex flex-col justify-center p-8">
                                <h1 class="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
                                <p class="mb-6">
                                    This is a sample landing page using Tailwind CSS and fullPage.js for smooth
                                    scrolling
                                    between
                                    sections.
                                </p>
                            </div>
                            <div class="w-3/5 swiper mySwiperFull mx-auto tw-right">
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
