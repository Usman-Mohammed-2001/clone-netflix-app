import React from 'react';
import Row from "../Row/Row.js";
import requests from "../../../utils/requests.js";



const RowList = () => {
  return (
    <>
  
      <Row
       title="NETFLIX ORIGINALS"
       fetchUrl= {requests.fetchNetflixOriginals}
       isLargeRow={true}
      />
  <Row title="Trending"      fetchUrl=  {requests.fetchTrending}/>

  <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
  <Row title="Action Movies"  fetchUrl= {requests.fetchActionMovies}/>
  {/* <Row title="Comedy Movies"  fetchUrl= {requests.fetchComedyMovies}/> */}
    <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />  
  <Row title="Horror Movies"  fetchUrl= {requests.fetchHorrorMovies}/>
  <Row title="Romance Movies" fetchUrl= {requests.fetchRomanceMovies}/>
 <Row title="Drama"       fetchUrl= {requests.fetchDrama}/>
   <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries} />

  


    </>
  )
}

export default RowList
