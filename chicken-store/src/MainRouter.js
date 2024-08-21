import logo from './logo.svg';
import './App.css';
import ChickenList from './component/ChickenList';
import ChickenFrom from './component/ChickenForm';
import { useState } from 'react';
import Modal from './component/Modal';

const MainRouter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //사용자가 보고싶을 때 볼 수 있또록 처음에는 false 보이지 않음 설정 해줌

  // 오픈 true 닫음 false
  // const에서 동작하는 기능이 1개일 때 {} 중괄호 생략 가능
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
  }
  
  return (
    <div className="app-container">
      <button className='chicken-register-button' onClick={openModal}>메뉴등록하기</button>
      <ChickenList/>


      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ChickenFrom/>
      </Modal>
    </div>
  );
}

export default MainRouter;
