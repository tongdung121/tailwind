<div class="swiper mySwiper w-full mx-auto">
    <div class="swiper-wrapper">
        @foreach ($slides as $item)
            <div class="swiper-slide flex items-center justify-center w-full">
                <div class="aspect-[1920/500]">
                    <img src="{{ asset('uploads/slides/' . $item->image) }}" class="w-full h-full object-cover" />
                </div>
            </div>
        @endforeach
    </div>

    <!-- Nút điều hướng -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
</div>
<!-- Ảnh nhỏ (thumbnail) -->
<div class="swiper mySwiperThumbs w-full h-[100px]">
    <div class="swiper-wrapper">
        @foreach ($slides as $item)
            <div class="swiper-slide w-[100px] cursor-pointer">
                <img src="{{ asset('uploads/slides/' . $item->image) }}"
                    class="w-full h-full object-cover rounded-md" />
            </div>
        @endforeach
    </div>
</div>
