import Joi from "joi"
import { useState , useEffect } from 'react'
import '../styles/PinkForum.css'

// const schema = Joi.object({
//     name: Joi.string()
//         .min(1)
//         .required(),

//     email: Joi.string
//         .email({ tlds: false })
//         .required(),
    
//     adress: Joi.string
//         .adress()
//         .required

//     land: Joi.string
//         .land()
//         .notrequired

//     age: Joi.string
//         .age()
//         .required
    
//     password: Joi.string
//         .password(7)
//         .required
// })




function PinkForum() {
    const [countries, setCountries] = useState([])
    const [languages, setLanguages] = useState([])


    useEffect(()  => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {

            const sortedCountries = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)        
    )
    setCountries(sortedCountries)


    const allLanguages = new Set()
    data.forEach(country => {
        if (country.languages) {
            Object.values(country.languages).forEach(lang => allLanguages.add(lang)
        )
      }
    })

        setLanguages([...allLanguages].sort())
        })
        .catch(error => console.error("Fel vid hämtning av Språk:", error))
        }, [])


    



return (
    <div>
        <section className="pink">
                <label className="forum-box" for=""> Förnamn *</label>
                <input className="text-box" placeholder="Namn och Efternamn"/> 
                <p class="error"> &nbsp; </p>


                <label className="forum-box" for=""> Epost *</label>
                <input className="text-box" placeholder="epost"/>
                <p class="error"> &nbsp; </p>


                <label className="forum-box" for=""> Adress * </label>
                <input className="text-box" placeholder="Adress"/>
                <p class="error"> &nbsp; </p>


                <label className="forum-box" for=""> Land </label>
                <select className="text-box">
                    <option value="">Välj Land</option>
                    {countries.map(Country => (
                        <option key={Country.cca2} value={Country.name.common}>
                            {Country.name.common}
                        </option>
                    ))}
                </select>
                <p class="error"> &nbsp; </p>


                <label className="forum-box" for=""> Ålder *</label>
                <input className="text-box" />
                <p class="error"> &nbsp; </p>



                <label className="forum-box" for=""> Lösenord *</label>
                <input className="text-box" />
                <p class="error"> &nbsp; </p>


                <label className="forum-box" for=""> Språk </label>
                <select className="text-box">
                    <option value="">Välj Språk</option>
               {languages.map(lang => (
                <option key={lang}
                value={lang}>
                    {lang}
                </option>
               ))}
                </select>
                <p class="error"> &nbsp; </p>
        </section>
    </div>
)
}

export default PinkForum