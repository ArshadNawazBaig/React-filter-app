export const TYPES = {
  PRODUCTS: 'PRODUCTS',
  SEARCH: 'SEARCH',
  RATTING: 'RATTING',
  CATEGORY: 'CATEGORY',
  REGION: 'REGION',
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
      ratting: 50,
    },
  ],
  search: '',
  ratting: 0,
  category: [],
  region: [],
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

    case TYPES.REGION:
      const currentIndex = state.region.indexOf(payload);
      const newRegionArray = [...state.region];
      if (currentIndex === -1) {
        newRegionArray.push(payload.toLowerCase());
      } else {
        newRegionArray.splice(currentIndex, 1);
      }
      return {
        ...state,
        region: newRegionArray,
      };

    default:
      return state;
  }
};
