import { useState } from 'react';
import IconSwitch, { iconType, viweModeType } from './IconSwitch';

type storePropsType = {
  products: Array<productsType>;
};

type productsType = {
  name: string;
  price: string;
  color: string;
  img: string;
};

export default function Store(props: storePropsType) {
  const [viewMode, setViewMode] = useState<viweModeType>('table');
  const [icon, setIcon] = useState<iconType>('view_module');

  const onSwitch = () => {
    viewMode === 'table' ? setViewMode('module') : setViewMode('table');
    icon === 'view_list' ? setIcon('view_module') : setIcon('view_list')
  };

  return (
    <div className="appWrp">
      <h2 className='taskTitle'>Кнопка с права меняет режим отображения контента <IconSwitch onSwitch={onSwitch} icon={icon}/></h2>
      <div className={viewMode === 'module' ? 'containerModule active' : 'containerModule'}>
        {props.products.map((p) => (
          <div className="productCard">
            <h3 className="title">{p.name}</h3>
            <div className="color">{p.color}</div>
            <img className="productImg" src={p.img} alt="snikers" />
            <div className="priceAndBuy">
              <span className="price">${p.price}</span>
              <button className="buyBtn">add to cart</button>
            </div>
          </div>
        ))}
      </div>
      {props.products.map((p) => (
        <div className={viewMode === 'table' ? 'productCardTable active' : 'productCardTable'}>
          <img className="productImgTable" src={p.img} alt="snikers" />
          <h3 className="titleTable">{p.name}</h3>
          <div className="color">{p.color}</div>
          <span className="price">${p.price}</span>
          <button className="buyBtn">add to cart</button>
        </div>
      ))}
    </div>
  );
}
