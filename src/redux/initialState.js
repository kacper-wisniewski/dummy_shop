const initialState = {
  cart: [
  ],
  categories: [
    { id: 'sneakers', name: 'Sneakers' },
    { id: 'tees', name: 'Tees' },
    { id: 'bags', name: 'Bags' },
    { id: 'chains', name: 'Chains' },
    { id: 'new', name: 'New Suff' },
    { id: 'all', name: 'All Products' },
  ],
  products: [
    {
      id: 1,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 30,
      isNew: false,
      comprasion: false,
      likes: 123,
      dislikes: 21,
    },
    {
      id: 2,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      category: 'sneakers',
      price: 41,
      isNew: false,
      comprasion: false,
      likes: 23,
      dislikes: 7,
    },
    {
      id: 3,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 25,
      isNew: false,
      comprasion: false,
      likes: 45,
      dislikes: 234,
    },
    {
      id: 4,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1589187832032-3e560ed4e6b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
      category: 'sneakers',
      price: 39,
      isNew: true,
      comprasion: false,
      likes: 36,
      dislikes: 1,
    },
    {
      id: 5,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 30,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 6,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1537189561004-36ad88b87469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
      category: 'sneakers',
      price: 29.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 7,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1523646745854-e018a9bcc73c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 54,
      isNew: true,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 8,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1473010350295-2c82192ebd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 42.50,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 9,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1547701865-941c3731e8af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      category: 'sneakers',
      price: 35,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 10,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1589187731885-5c2260597f9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
      category: 'sneakers',
      price: 22.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 11,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 26,
      isNew: true,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 12,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1601144537844-c2a0494aeb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
      category: 'sneakers',
      price: 28,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 13,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1535562423516-e6721589eeb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      category: 'sneakers',
      price: 34,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 14,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1558004282-e2b2587e3e47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80',
      category: 'sneakers',
      price: 47,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 15,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1562687782-9f2fd422a334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'sneakers',
      price: 56,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 16,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1561095884-bb4b8d43c18b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      category: 'sneakers',
      price: 64,
      isNew: true,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 17,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1557750636-276cf67aeb5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
      category: 'sneakers',
      price: 39,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 18,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1597103821923-2f5f95f5e394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 31,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 19,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 46,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 20,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1529958592265-f90d3c909796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 39.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 21,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1568688574210-419316c9db5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 47,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 22,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1556803471-c9eb6d50eb1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      category: 'sneakers',
      price: 54,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },

    {
      id: 23,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
      category: 'sneakers',
      price: 43,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 24,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1585786124821-f21a308deb08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 61,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 25,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1588207415599-de82d6e5ae0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'sneakers',
      price: 55,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 26,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1528828670893-a3a684b48146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'sneakers',
      price: 36,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 27,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 19.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 28,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1552066344-2464c1135c32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 59.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 29,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1255&q=80',
      category: 'sneakers',
      price: 51,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 30,
      name: 'The coolest sneakers',
      description: 'Those are the coolest sneakers in the whole world! You won`t be able to find any coolest skeakers in your life',
      image: 'https://images.unsplash.com/photo-1519810409043-b6d44921bfa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'sneakers',
      price: 34.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 31,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1521038063972-ab961f8515b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'chains',
      price: 46,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 32,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1572295845436-e3b5d8eddc9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1265&q=80',
      category: 'chains',
      price: 39.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 33,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1533844337338-73463945b347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'chains',
      price: 47,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 34,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1501527244-d9bf0b4117b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'chains',
      price: 54,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },

    {
      id: 35,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1524600123477-909fbe45c9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
      category: 'chains',
      price: 43,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 36,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1600185000029-b1dbe91b23e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      category: 'chains',
      price: 61,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 37,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1598369685657-71e64f65686c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'chains',
      price: 55,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 38,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1566405784470-0ee0d4ca7727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'chains',
      price: 36,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 39,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1595436178847-b75cc3cfd886?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
      category: 'chains',
      price: 19.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 40,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1567962446999-7fdcb480208b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
      category: 'chains',
      price: 59.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 41,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1600442715817-4d9c8b6c729f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'chains',
      price: 51,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
    {
      id: 42,
      name: 'The coolest chain',
      description: 'These is the coolest chain in the whole world! You won`t be able to find any coolest chains in your life',
      image: 'https://images.unsplash.com/photo-1602562887763-851fa56061e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      category: 'chains',
      price: 34.99,
      isNew: false,
      comprasion: false,
      likes: 31,
      dislikes: 1,
    },
  ],
  promo: [
    { id: 1, productId: 7, sale: 10 },
    { id: 2, productId: 11, sale: 5 },
    { id: 3, productId: 26, sale: 50 },
  ],
  bestsellers: [
    { id: 1, productId: 4 },
    { id: 2, productId: 15 },
    { id: 3, productId: 27 },
  ]
}

export default initialState;