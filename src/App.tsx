import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or;
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [redGoods, setRedGoods] = useState<Good[]>([]);
  const [first5Goods, setFirst5Goods] = useState<Good[]>([]);

  useEffect(() => {
    getAll().then(setAllGoods);
    getRedGoods().then(setRedGoods);
    get5First().then(setFirst5Goods);
  }, []);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        onClick={() => setGoods(allGoods)}
        type="button"
        data-cy="all-button"
      >
        Load all goods
      </button>

      <button
        onClick={() => setGoods(first5Goods)}
        type="button"
        data-cy="first-five-button"
      >
        Load 5 first goods
      </button>

      <button
        onClick={() => setGoods(redGoods)}
        type="button"
        data-cy="red-button"
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
