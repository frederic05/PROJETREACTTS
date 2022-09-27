import React from 'react';
import Ppageone from './component/ppageone';
import UserClass from './component/pclasspage';
import UseEffectClear from './component/useEffectClear';
import { CurrenteData } from './interfaceTS/dataItems'
import Test from './component/Test';
import './App.css';

function App() {

   //Mieux formater notre donner JSON
  //console.log('RETOUR', JSON.stringify(CurrenteData, null, ' '))
  return (
    <div className='container'>
      <blockquote>
          <UseEffectClear />
      </blockquote>
    <blockquote cite="Benjamin Franklin">
      Dis-moi et j'oublie, apprends-moi et je me souviendrai peut-être, implique-moi et j'apprends.    
    </blockquote>
    <Test />
    <Ppageone data={CurrenteData}/>
    <UserClass name="boka" note={15} istrue={true}/>
    </div>
  );
}

export default App;
