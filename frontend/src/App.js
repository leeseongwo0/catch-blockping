import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Button from './Button';
import './App.css';

function App() {
  const [counter, setCount] = useState(0);
  const [selectedContent, setSelectedContent] = useState(0); // 새로운 상태 추가

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleContentChange = (newValue) => {
    setSelectedContent(newValue); // Footer에서 전달받은 값으로 상태 업데이트
  };

  const renderContent = () => {
    switch (selectedContent) {
      case 0:
        return (
          <>
            <Content counter={counter} />
            <Button onClick={onClick} text="Tap" />
          </>
        );
      case 1:
        return <div>My Record Content</div>;
      case 2:
        return <div>Friends Content</div>;
      default:
        return <Content counter={counter} />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content">
        {renderContent()} {/* 선택된 내용 렌더링 */}
      </div>
      <Footer onContentChange={handleContentChange} /> {/* Footer에 핸들러 전달 */}
    </div>
  );
}

export default App;