import React from 'react';
import './loader.css';

function Loader() {
  return (
    <div>
      <div class="loader">
        <p class="heading">Loading</p>
        <div class="loading">
          <div class="load"></div>
          <div class="load"></div>
          <div class="load"></div>
          <div class="load"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader;