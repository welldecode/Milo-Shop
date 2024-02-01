<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts --> 
    @routes
    @vite(['resources/js/app.js', 'resources/scss/app.scss', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="bg-[#FCFCFC] overflow-x-hidden ">
    @inertia  
</body> 
</html>
