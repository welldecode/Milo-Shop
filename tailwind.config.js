/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
],
  theme: {
    extend: {},
  },
 
  plugins: [forms, require("flowbite/plugin")],

}

