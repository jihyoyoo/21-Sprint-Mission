
import { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import BestItem from '../components/BestItem';
import AllItem from '../components/AllItem';
import axios from '../utils/axios';
import Pagination from '../components/Pagination';

function UsedItems() {
  const [ items, setItems ] = useState([]);
  const [ keyword, setKeyword ] = useState('');
  const [ order, setOrder ] = useState('recent');
  const [ bestItems, setBestItems ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1); 
  const [ totalCount, setTotalCount ] = useState(0); 
  const [ itemPerPage, setItemPerPage ] = useState(10);
  const [ bestItemPerPage, setBestItemPerPage ] = useState(4);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value); 
    setCurrentPage(1); 
  };
  
  //전체 상품 불러오기
  const handleLoad = useCallback(async (orderParam, pageParam, keywordParam) => {
    const response = await axios.get('/products', {
      params: {
        orderBy: orderParam,
        pageSize: itemPerPage,
        page: pageParam,
        keyword: keywordParam,
      }
    });
    const { list, totalCount } = response.data;
    setItems(list);
    setTotalCount(totalCount);
  }, [itemPerPage]);
  
  //베스트 상품 불러오기
  const handleLoadBestItems = useCallback(async (pageParam) => {
    const response = await axios.get('/products', {
      params: {
        orderBy: 'favorite',
        pageSize: pageParam,
        page: 1,
      }
    });
    const { list } = response.data;
    setBestItems(list);
  }, []);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect (() => {
    handleLoad(order, currentPage, keyword); 
  }, [order, currentPage, keyword, handleLoad, itemPerPage]);

  useEffect(() => {
    handleLoadBestItems(bestItemPerPage);
  }, [handleLoadBestItems, bestItemPerPage]);

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;
      if (width <= 376) {     
        setItemPerPage(4);
        setBestItemPerPage(1);
      } else if (width <= 744) { 
        setItemPerPage(6);
        setBestItemPerPage(2);
      } else {                   
        setItemPerPage(10);
        setBestItemPerPage(4);
      }
    };

    updatePageSize(); 
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  return (
    <>
      <Header />
      <BestItem items={bestItems} />
      <AllItem items={items} onOrderChange={setOrder} currentOrder={order} onKeywordChange={handleKeywordChange}/>
      <Pagination 
        currentPage={currentPage}
        totalCount={totalCount}
        itemPerPage={itemPerPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default UsedItems;
