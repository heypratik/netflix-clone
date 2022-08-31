import React, { useState, useEffect } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav';
import { SkeletonTheme } from 'react-loading-skeleton';


function App() {

   return (
    <div className="App">
      <Nav />
      <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <Banner />
      <Row isSmall={false} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isSmall title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row isSmall title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row isSmall title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row isSmall title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row isSmall title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row isSmall title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row isSmall title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </SkeletonTheme>
    </div>
  );
}

export default App;
