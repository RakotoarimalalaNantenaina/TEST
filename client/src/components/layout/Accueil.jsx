import React, { Component } from 'react';
import Header from "./Header";
import Atelier from "./Atelier"

class Accueil extends Component {
  
  render() {
    let imgUrl = 'https://cdn.pixabay.com/photo/2015/12/17/16/56/salad-1097595_640.jpg'; 
    return (
      <div className="container-fluid">
        <Header />
        <div class="card card-image" id="header" style={{backgroundImage: 'url(' + imgUrl + ')', 
                                                          backgroundSize: 'cover', backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',}}>
          <div class="text-white text-center rgba-stylish-strong py-5 px-4">
            <div class="py-5">
              <h2 class="card-title h2 my-4 py-2">ATELIER DE CUISINE</h2>
              <p class="mb-4 pb-2 px-md-5 mx-md-5">Ici vous voyez toutes les atéliers de cuisine. <span id="spanheader">Comment avoir une formation de bonne cuisinier ??</span></p>
              <a class="btn peach-gradient" href="#!"><i class="fas fa-clone left"></i>Voir tous les ateliers</a>
            </div>
          </div>
        </div>
        <Atelier/>
      </div>
    )
  }
}
export default Accueil; 
