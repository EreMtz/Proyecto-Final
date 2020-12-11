import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ere',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      //hashados install bcrypt
      isAdmin: true,
    },
    {
      name: 'Juana la iguana',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  
  products: [
    {
      name: 'Cama perro',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Trueq',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Cama',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Trueq',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'producto',
      category: 'mueble',
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Trueq',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'Myuebe',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Trueq',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Mueble',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Desconocida',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'HM',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'na',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;
