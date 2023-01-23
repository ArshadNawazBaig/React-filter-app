export const TYPES = {
  PRODUCTS: 'PRODUCTS',
  SEARCH: 'SEARCH',
  RATTING: 'RATTING',
  CATEGORY: 'CATEGORY',
};

export const initialState = {
  products: [
    {
      id: 1,
      title: 'Iphone',
      price: 100,
      category: 'Used',
      ratting: 4,
    },
    {
      id: 2,
      title: 'Oneplus',
      price: 200,
      category: 'New',
      ratting: 3,
    },
    {
      id: 3,
      title: 'Nokia',
      price: 50,
      category: 'Used',
      ratting: 5,
    },
  ],
  search: '',
  ratting: 0,
  category: [
    { name: 'free', value: false },
    { name: 'paid', value: false },
    { name: 'universal', value: false },
  ],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case TYPES.SEARCH:
      return {
        ...state,
        search: payload,
      };

    case TYPES.RATTING:
      return {
        ...state,
        ratting: payload,
      };

    case TYPES.CATEGORY:
      return {
        ...state,
        category: payload,
      };

    default:
      return state;
  }
};
