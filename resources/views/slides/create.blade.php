@extends('layouts.app')

@section('content')
    <div class="container mx-auto p-4">
        <div class="title text-2xl font-bold p-4">Create Slide</div>
        <form action="{{ route('slides.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="mb-4">
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
            </div>
            <div class="mb-4">
                <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
                <input type="file" name="image" id="image" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
            </div>
            <div class="mb-4">
                <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                <select name="type" id="type" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                    <option value="">Select Type</option>
                    <option value="1">Type 1</option>
                    <option value="2">Type 2</option>
                </select>
            </div>
            <div class="mb-4">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Create Slide</button>
            </div>
        </form>
    </div>
@endsection
