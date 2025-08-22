<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'Tailwind')</title>
    @vite('resources/css/app.css')
</head>
<body class="min-h-screen flex flex-col">
    <!-- Header -->
    <div class="header bg-blue-500 text-white p-4">
        Header
    </div>

    <!-- Content -->
    <div class="content flex-1 p-4">
        @yield('content')
    </div>

    <!-- Footer -->
    <div class="footer bg-gray-800 text-white p-4 mt-auto">
        Footer
    </div>
</body>
</html>
