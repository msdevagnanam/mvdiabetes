export type ProductCategory = 'men' | 'women' | 'unisex';

export interface Product {
    id: string;
    name: string;
    code?: string;
    category: ProductCategory;
    description: string;
    image: string;
    shopUrl: string;
}

export const products: Product[] = [
    {
        id: 'ddf-g029',
        name: 'Style Meets Support: Men\'s Diabetic Footwear',
        code: 'DDF G029',
        category: 'men',
        description: 'Premium diabetic footwear for men combining style with therapeutic support. Designed for optimal comfort and foot health.',
        image: '/images/products/ddf-g029.jpg',
        shopUrl: 'https://stepwisehealth.in/product/designer-diabetic-footwear-ddf-g029/',
    },
    {
        id: 'ddf-g028',
        name: 'Style Meets Support: Men\'s Diabetic Footwear',
        code: 'DDF G028',
        category: 'men',
        description: 'Carefully crafted men\'s diabetic footwear offering a balance of comfort, protection, and everyday style.',
        image: '/images/products/ddf-g028.jpg',
        shopUrl: 'https://stepwisehealth.in/product/designer-diabetic-footwear-ddf-g028/',
    },
    {
        id: 'velcro-shoe',
        name: 'Special Diabetic Velcro Shoe',
        category: 'unisex',
        description: 'Easy-close Velcro diabetic shoe designed for ease of use, comfort, and therapeutic foot support.',
        image: '/images/products/velcro-shoe.jpg',
        shopUrl: 'https://stepwisehealth.in/product/special-diabetic-velcro-shoe/',
    },
    {
        id: 'diabetic-cut-shoe',
        name: 'Precision Design: Men\'s Specially Crafted Diabetic Cut Shoe',
        category: 'men',
        description: 'Specially crafted diabetic cut shoe for men, designed with precision for foot pressure relief and protection.',
        image: '/images/products/diabetic-cut-shoe.jpg',
        shopUrl: 'https://stepwisehealth.in/product/special-diabetic-cut-shoe/',
    },
    {
        id: 'ddf-lr002',
        name: 'Step in Style: Designer Diabetic Footwear for Women',
        code: 'DDF LR002',
        category: 'women',
        description: 'Elegant designer diabetic footwear for women that prioritises foot health without compromising on style.',
        image: '/images/products/ddf-lr002.jpg',
        shopUrl: 'https://stepwisehealth.in/product/designer-diabetic-footwear-ddf-lr002/',
    },
    {
        id: 'ddf-lr003',
        name: 'Designer Diabetic Footwear for Women',
        code: 'DDF LR003',
        category: 'women',
        description: 'Thoughtfully designed women\'s diabetic footwear offering excellent support for daily movement and foot health.',
        image: '/images/products/ddf-lr003.jpg',
        shopUrl: 'https://stepwisehealth.in/product/designer-diabetic-footwear-ddf-lr003/',
    },
    {
        id: 'ddf-lf001',
        name: 'Step in Style: Designer Diabetic Footwear for Women',
        code: 'DDF LF001',
        category: 'women',
        description: 'Premium designer diabetic footwear for women, crafted for therapeutic comfort with modern aesthetics.',
        image: '/images/products/ddf-lf001.jpg',
        shopUrl: 'https://stepwisehealth.in/product/step-in-style-designer-diabetic-footwear-for-women-ddf-lf001/',
    },
    {
        id: 'ddf-lf002',
        name: 'Designer Diabetic Footwear for Women',
        code: 'DDF LF002',
        category: 'women',
        description: 'Beautifully crafted women\'s therapeutic footwear delivering comfort, support, and a refined finish.',
        image: '/images/products/ddf-lf002.jpg',
        shopUrl: 'https://stepwisehealth.in/product/designer-diabetic-footwear-ddf-lf002/',
    },
];

export const menProducts = products.filter((p) => p.category === 'men' || p.category === 'unisex');
export const womenProducts = products.filter((p) => p.category === 'women' || p.category === 'unisex');

export const SHOP_URL = 'https://stepwisehealth.in/shop/';
export const WOMEN_CATEGORY_URL = 'https://stepwisehealth.in/diabetic-women-footwear/';
export const MEN_CATEGORY_URL = 'https://stepwisehealth.in/diabetic-male-footwear/';
