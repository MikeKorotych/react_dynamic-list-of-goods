import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [allGoods, setAllGoods] = useState<Good[]>([]);
  const [goodsToShow, setGoodsToShow] = useState<Good[]>([]);

  useEffect(() => {
    goodsAPI.getAll().then(setAllGoods);
  }, []);

  const handleShowAll = () => {
    setGoodsToShow(allGoods);
  };

  const handleShowFirst5 = () => {
    setGoodsToShow(goodsAPI.get5First(allGoods));
  };

  const handleShowRed = () => {
    setGoodsToShow(goodsAPI.getRedGoods(allGoods));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <>
        <button onClick={handleShowAll} type="button" data-cy="all-button">
          Load all goods
        </button>

        <button
          onClick={handleShowFirst5}
          type="button"
          data-cy="first-five-button"
        >
          Load 5 first goods
        </button>

        <button onClick={handleShowRed} type="button" data-cy="red-button">
          Load red goods
        </button>

        <GoodsList goods={goodsToShow} />
      </>
    </div>
  );
};
