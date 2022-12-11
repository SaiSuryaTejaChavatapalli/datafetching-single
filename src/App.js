import logo from "./logo.svg";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import HelloJsx from "./components/HelloWithJSX";
import HelloJsx1 from "./components/HelloWithoutJSX";
import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import CompLC from "./components/CompLC";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import RegComp from "./components/RegComp";
import ParentComp from "./components/ParentComp";
import Refs from "./components/Refs";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import GetHTTP from "./components/HTTP/GetHTTP";
import PostForm from "./components/HTTP/PostForm";
import Styled from "./components/StyledComponenets/Styled";
import ClassCounter from "./hooks/ClassCounter";
import HooksCounter from "./hooks/HooksCounter";
import HookCounterTwo from "./hooks/HookCounterTwo";
import HookCounterThree from "./hooks/HookCounterThree";
import HookCounterFour from "./hooks/HookCounterFour";
import ClassCounterOne from "./hooks/ClassCounterOne";
import UseEffectOne from "./hooks/UseEffectOne";
import ClassUseEffectConditioanlly from "./hooks/ClassUseEffectConditioanlly";
import HookUseEffectConditioanlly from "./hooks/HookUseEffectConditioanlly";
import ClassMouse from "./hooks/ClassMouse";
import HookMouse from "./hooks/HookMouse";
import MouseContainer from "./hooks/MouseContainer";
import DataFetching from "./hooks/DataFetching";
import DataFetchingSingle from "./hooks/DataFetchingSingle";
import ComponentC from "./hooks/ComponentC";
import React from "react";
import UseCallbackParent from "./hooks/UseCallbackParent";
import UseMemoCounter from "./hooks/UseMemoCounter";
import UseReducer from "./hooks/UseReducer1";
import UseReducer1 from "./hooks/UseReducer1";
import UseReducer2 from "./hooks/UseReducer2";
import DataFetchingUseState from "./hooks/DataFetchingUseState";
import DataFetchingUseReducer from "./hooks/DataFetchingUseReducer";
import DocTitleOne from "./hooks/CustomHooks/DocTitleOne";
import DocTitleTwo from "./hooks/CustomHooks/DocTitleTwo";
import CustomCounterOne from "./hooks/CustomHooks/CustomCounterOne";
import CustomCounterTwo from "./hooks/CustomHooks/CustomCounterTwo";
import CustomUseInput1 from "./hooks/CustomHooks/CustomUseInput1";
import AxiosPr from "./AXIOS/AxiosPr";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <Greet name="Sai Surya Teja" sigil="unbound,unbend">
        <p>This is children of greet</p>
      </Greet>
      <Welcome name="SNL" sigil="Always pays its debt"> 
      <button>Add me</button>
      </Welcome> 
      <Message/>
      <Greet name="SST" sigil="winter is coming"><p>Stark</p></Greet>
      <ClassClick />
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      <Stylesheet primary={true}/>
       <h1 className='error'>Error</h1>
      
      <h1 className={styles.success}>Success</h1> 
      <Inline/>
      <Form/>
      <ParentComp/>
      <CompLC/>
      <Refs/>
      <ClickCounter />
      <HoverCounter />
      <GetHTTP />
      <Styled />
      <PostForm />
   <ClassCounter />
    
       <HookCounterTwo />
       <HookCounterThree />
       <HookCounterFour />
       <ClassCounterOne />
        <UseEffectOne />
         <ClassUseEffectConditioanlly />
         <HookUseEffectConditioanlly />
         <ClassMouse />
         <HookMouse />
          <MouseContainer />
            <DataFetching />
            
             <UserContext.Provider value={"Sai Surya Teja"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
       <UseCallbackParent />
       <UseMemoCounter />
       <UseReducer1 />
       <UseReducer2 />
       <DataFetchingUseState />
       <DataFetchingUseReducer />
       <DocTitleOne />
      <DocTitleTwo />
      <CustomCounterOne />
      <CustomCounterTwo />
       <CustomUseInput1 />
        <HooksCounter />
       <AxiosPr />
       <DataFetching />
      */}
      <DataFetchingSingle />
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello,SST
        </a>
      </header> */
}
