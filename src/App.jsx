import './App.css';
import { useState, useEffect, useCallback} from 'react';
import Header from './components/Header';
import BestItem from './components/BestItem';
import AllItem from './components/AllItem';
import axios from './utils/axios';
import Pagination from './components/Pagination';


const itemPerPage = 10;
function App() {
  const [ items, setItems ] = useState([]);
  const [ keyword, setKeyword ] = useState('');
  const [ order, setOrder ] = useState('recent');
  
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호
  const [totalCount, setTotalCount] = useState(0); //전체 아이템 개수
  

  
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
  }, [itemPerPage]);
  
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //웹 실행되고 한번만 데이터 가져오기
  useEffect (() => {
    // 정렬이나 페이지가 바뀔 때는 항상 handleLoad로 해당 페이지 데이터만 새로 불러옴
    handleLoad(order, currentPage, keyword); 
  }, [order, currentPage, keyword, handleLoad]);


  return (
    <>
      <Header />
      <BestItem items={items} />
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
