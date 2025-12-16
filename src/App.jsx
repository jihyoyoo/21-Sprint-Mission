import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import BestItem from './components/BestItem';
import AllItem from './components/AllItem';
import axios from './utils/axios';
import Pagination from './components/Pagination';


function App() {
  const [ items, setItems ] = useState([]);
  const [ keyword, setKeyword ] = useState('');
  const [ order, setOrder ] = useState('recent');
  const [ bestItems, setBestItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호
  const [totalCount, setTotalCount] = useState(0); //전체 아이템 개수
  
  const itemPerPage = 10;
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value); 
    setCurrentPage(1); 
};
  
  //api 데이터에서 자동으로 정렬한 데이터 가져오기
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
  }, []);
  
  const handleLoadBestItems = useCallback(async () => {
    const response = await axios.get('/products', {
      params: {
        orderBy: 'favorite',
        pageSize: 4,
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
  }, [order, currentPage, keyword, handleLoad]);

  useEffect(() => {
    handleLoadBestItems();
  }, [handleLoadBestItems]);


  return (
    <>
      <Header />
      <BestItem items={bestItems} />
      <AllItem items={items} onOrderChange={setOrder} currentOrder={order} onKeywordChange={handleKeywordChange}/>
      <Pagination 
        currentPage={currentPage}
        totalCount={totalCount}
        itemPerPage={itemPerPage}
        onPageChange={handlePageChange}/>
    </>
  )
}

export default App;
