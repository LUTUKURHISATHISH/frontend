import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer';

const Harshavardhini = () => {
  return (
    <>
      <Header parentMenu='page' menuCategoryEnable='enable' />
               <div className="container-fluid">
                 <iframe src='https://aec.edu.in/harshavardhini/'  style= {{ width:'100%',height:'960px'}}> </iframe>
               </div>

      <FooterTwo />
    </>
  );
}

export default Harshavardhini;
