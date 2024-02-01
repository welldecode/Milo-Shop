<script setup>
import { router, usePage } from '@inertiajs/vue3';
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

defineProps({
    products: Array
})

const brands = usePage().props.brands;
const categories = usePage().props.categories;


// console.log(products);
const isAddProduct = ref(false);
const editMode = ref(false);
const dialogVisible = ref(false)

//upload mulitpel images
const productImages = ref([])
const dialogImageUrl = ref('')
const handleFileChange = (file) => {
    console.log(file)
    productImages.value.push(file)
}

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
}

const handleRemove = (file) => {
    console.log(file)
}
//prodct from data
const id = ref('');
const title = ref('')
const price = ref('')
const quantity = ref('')
const description = ref('')
const product_images = ref([])
const published = ref('')
const category_id = ref('')
const brand_id = ref('')
const inStock = ref('')
//end

const openEditModal = (product, index) => {

    console.log(product, index);
    //updatde data
    id.value = product.id;
    title.value = product.title;
    price.value = product.price;
    quantity.value = product.quantity;
    description.value = product.description;
    brand_id.value = product.brand_id;
    category_id.value = product.category_id;
    product_images.value = product.product_images;

    editMode.value = true;
    isAddProduct.value = false
    dialogVisible.value = true

}


//open add modal 
const openAddModal = () => {
    isAddProduct.value = true
    dialogVisible.value = true
    editMode.value = false;

}

// add product method 
const AddProduct = async () => {
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('price', price.value);
    formData.append('quantity', quantity.value);
    formData.append('description', description.value);
    formData.append('brand_id', brand_id.value);
    formData.append('category_id', category_id.value);
    // Append product images to the FormData
    for (const image of productImages.value) {
        formData.append('product_images[]', image.raw);
    }

    try {
        await router.post('products/store', formData, {
            onSuccess: page => {
                Swal.fire({
                    toast: true,
                    icon: 'success',
                    position: 'top-end',
                    showConfirmButton: false,
                    title: page.props.flash.success
                })
                dialogVisible.value = false;
                resetFormData();
            },
        })
    } catch (err) {
        console.log(err)
    }



}

//rest data after added
const resetFormData = () => {
    id.value = '';
    title.value = '';
    price.value = '';
    quantity.value = '';
    description.value = '';
    productImages.value = [];
    dialogImageUrl.value = ''
};



//delete sigal product image 

const deleteImage = async (pimage, index) => {
    try {
        await router.delete('/admin/products/image/' + pimage.id, {
            onSuccess: (page) => {
                product_images.value.splice(index, 1);
                Swal.fire({
                    toast: true,
                    icon: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    title: page.props.flash.success
                });
            }
        })
    } catch (err) {
        console.log(err);
    }
}

//update product method
const updateProduct = async () => {
    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('price', price.value);
    formData.append('quantity', quantity.value);
    formData.append('description', description.value);
    formData.append('category_id', category_id.value);
    formData.append('brand_id', brand_id.value);
    formData.append("_method", 'PUT');
    // Append product images to the FormData
    for (const image of productImages.value) {
        formData.append('product_images[]', image.raw);
    }

    try {
        await router.post('products/update/' + id.value, formData, {
            onSuccess: (page) => {
                dialogVisible.value = false;
                resetFormData();
                Swal.fire({
                    toast: true,
                    icon: "success",
                    position: "top-end",
                    showConfirmButton: false,
                    title: page.props.flash.success
                });
            }
        })
    } catch (err) {
        console.log(err)
    }
}

//delete product method 
const deleteProduct = (product, index) => {
    Swal.fire({
        title: 'Are you Sure',
        text: "This actions cannot undo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'no',
        confirmButtonText: 'yes, delete!'
    }).then((result) => {
        if (result.isConfirmed) {
            try {
                router.delete('products/destory/' + product.id, {
                    onSuccess: (page) => {
                        this.delete(product, index);
                        Swal.fire({
                            toast: true,
                            icon: "success",
                            position: "top-end",
                            showConfirmButton: false,
                            title: page.props.flash.success
                        });
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    })

}
</script>
<template>
    <section class="  p-3 sm:p-5">

        <!-- end -->
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" id="simple-search"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search" required="">
                            </div>
                        </form>
                    </div>
                    <div
                        class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button type="button" @click="openAddModal"
                            class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <svg class="h-5 w-5  mr-5" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            Adicionar Produto
                        </button>

                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-3">Nome do Produto</th>
                                <th scope="col" class="px-4 py-3">Categoria</th>
                                <th scope="col" class="px-4 py-3">Quantidade</th>
                                <th scope="col" class="px-4 py-3">Preço</th>
                                <th scope="col" class="px-4 py-3">Estoque</th>
                                <th scope="col" class="px-4 py-3">Status</th>
                                <th scope="col" class="px-4 py-3">
                                    <span class="sr-only">Ações</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, index) in products" :key="product.id"
                                class="border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ product.title }}</th>
                                <td class="px-4 py-3">{{ product.category.name }}</td>
                                <td class="px-4 py-3">{{ product.quantity }}</td>
                                <td class="px-4 py-3">R$ {{ product.price }}</td>

                                <td class="px-4 py-3">
                                    <span v-if="product.inStock == 0"
                                        class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Em Estoque</span>
                                    <span v-else
                                        class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Fora de estoque</span>

                                </td>
                                <td class="px-4 py-3">
                                    <button v-if="product.published == 0" type="button"
                                        class="px-3 py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publicado</button>
                                    <button v-else type="button"
                                        class="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Não publicado</button>

                                </td>

                                <td class="px-4 py-3 flex items-center justify-end">

                                    <button :id="`${product.id}-button`" :data-dropdown-toggle="`${product.id}`"
                                        class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                                        type="button">
                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </button>
                                    <div :id="`${product.id}`"
                                        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            :aria-labelledby="`${product.id}-button`">

                                            <li>
                                                <a href="#" @click="openEditModal(product)"
                                                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Editar</a>
                                            </li>
                                        </ul>
                                        <div class="py-1">
                                            <a href="#" @click="deleteProduct(product, index)"
                                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Deletar Produto</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </section>
</template>