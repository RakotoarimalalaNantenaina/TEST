import React, { Component } from 'react';
import axios from 'axios';

class Atelier extends Component {
    constructor(props) {
        super(props);
        this.state = { profil: [] };
    }
      
    componentDidMount() {
        axios.get('http://localhost:8080/atelier')
            .then(response => {
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    Produit() {
        return <div className="container-fluid">
                <div className="row view-group" id="colonne">
                    {this.state.profil.length > 0 ? (

                        this.state.profil.map(user => (

                            <div class="item col-xs-3 col-lg-3" id="carte">

                                <div className="card card-cascade narrower card-ecommerce">
                                        <img   width="auto" id="imageproduit" height="230px" src={'http://localhost:8080/atelier/' + user.photo_produit} alt={user.photo_produit} />
                                        
                                    <div className="card-body card-body-cascade">

                                        <center><h6 id="description"><span id="nomproduit">{user.titre}</span></h6></center>

                                        <p className="card-text"><strong><span id="description"></span></strong>&nbsp;&nbsp; <div id="point">{user.description}</div> </p>
                                        
                                        <p className="card-text"><strong><span id="description">Date</span></strong>&nbsp;&nbsp; <div id="point">{user.date}</div> </p>
                                        
                                        <p className="card-text"><strong><span id="description">Horaire de debut</span></strong>&nbsp;&nbsp; <div id="point">{user.horaire}</div> </p>
                                        
                                        <p className="card-text"><strong><span id="description">Durée de l'atelier</span></strong>&nbsp;&nbsp; <div id="point">{user.duree}</div> </p>

                                        <p className="card-text"><strong><span id="description">Nombre de place disponible</span></strong>&nbsp;&nbsp; <div id="point">{user.place_dispo}</div> </p>

                                        <p className="card-text"><strong><span id="description">Nombre de place reserve</span></strong>&nbsp;&nbsp; <div id="point">{user.place_reserve}</div> </p>

                                        <span className="spanprix">
                                            <strong>Prix: {user.prix} Euro</strong>
                                        </span><br />

                                        <span class="float-right">

                                            <span class="float-right">
                                                <a href="#!" data-toggle="tooltip" data-placement="top" title="Ajouter au panier">
                                                    <i class="fas fa-shopping-cart grey-text ml-3"></i>
                                                </a>
                                            </span>

                                        </span>

                                        <div className="card-footer px-1">
                                        </div>
                                    </div>

                                </div>
                            </div>

                        ))
                    ) : (
                            <div>
                                <h3 id="h3vide">Aucun Atelier Publié</h3>
                            </div>
                        )}
                </div>
          
        </div>
    }
    render() {
        return (
            <div>
                {this.Produit()}
            </div>
        );
    }
}
export default Atelier; 
