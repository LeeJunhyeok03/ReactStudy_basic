import './App.css';
import Profile from './components/Profile'; 
import Avarta from "./components/Avarta"

function AppProfile() {
  const handleClick = (event) => {
      console.log(event);
      alert("버튼이 클릭됨");
    }
  return (
    <>
        <button onClick={handleClick}>버튼</button>
        
        <Profile
            img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" title="프론트엔드 개발자" 
            name="name1" 
            newChk="ok"
            />
        <Profile
            img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" title="프론트엔드 개발자" 
            name="name2"/>
        <Avarta newChk="ok" img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"></Avarta>

    </>
  )
  ;
}

export default AppProfile;
