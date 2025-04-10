import '../styles/Pronto.css'
import { useCountStore } from '../data/countStore.js'
import ProntoCounter from '../components/ProntoCounter'

const Pronto = () => {
  const count = useCountStore(state => state.prontoCount);
//   console.log("Antal i lokalen:", count);  

  return (
    <div className="pronto">
      <h2> Passersystemet Pronto </h2>
      <p> Det finns {count} personer i lokalen. </p>
      <section className="pronto-box">
            <ProntoCounter entrance={'Ingång A'} />
      </section>

       <section className="pronto-box">
            <ProntoCounter className="pronto-box" entrance={'Ingång B'} />
        </section>
    </div>
  );
};

export default Pronto