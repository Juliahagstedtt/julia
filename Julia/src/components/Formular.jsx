import { useState } from 'react'
import Joi from 'joi'
import '../styles/Formular.css'


// const schema = Joi.object({ 
//     firstname: '',
//     lastName: '',
//     email: ''

// })



function Formular() {

    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
            </head>


             <h1> Validering </h1>

            <section className="form-field">
                <label for=""> Förnamn </label>
                <input type="text" placeholder="Ditt namn" title="Användaren har inte varit inne i fältet än" />
                <p class="error"> &nbsp; </p>
                
                <label for="" > Efternamn </label>
                <input type="text" placeholder="Ditt namn" value="Jovovich" class="valid" />
                <p class="error"> &nbsp; </p>
                
                <label for=""> E-postadress </label>
                <input type="text" placeholder="Ditt namn" class="invalid" value="snabel-a.com" />
                <p class="error"> Din e-postadress saknar "@". </p>
            </section>

            <section className="form-field row">
                <button> Spara </button>
                <button class="ghost"> Släng </button>
            </section>
     </div>
    )

}

export default Formular