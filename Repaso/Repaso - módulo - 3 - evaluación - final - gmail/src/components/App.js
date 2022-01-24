import "../styles/App.scss";
import { useState } from "react";
import dataEmails from "../data/DataEmails.json";
import { Route, Switch } from "react-router-dom";

const App = () => {
  //Para pintar el listado de emails, lo primero es crear una variable estado
  const [emails, SetEmails] = useState(dataEmails.results);

  //Necesito una nueva variable de estado para la búsqueda de los emails
  const [searchEmails, SetSearchEmails] = useState("");
  const [trashEmails, setTrashEmails] = useState([])

  //Después tengo que hacer un maps para recorrer el array y pintar los resultados
  const handleSearchEmails = (event) => {
    SetSearchEmails(event.currentTarget.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleDeleteEmails = (event) => {
    const deletedEmail = (event.currentTarget.id);
    const findIndex = emails.findIndex((deleted) => deleted.id === parseInt(deletedEmail))
    emails.splice(findIndex, 1);
    SetEmails([...emails])
    // SetEmails('');
    setTrashEmails([...deletedEmail]);
    console.log(trashEmails)


  }

  const handleRenderTrashEmails = () => {

    const rendertrashEmails = trashEmails.map((oneTrashEmail) => {
      <tr key={oneTrashEmail.id} className="cursor-pointer">
        <td>
          <a href="#" className="text--decoration--none">
            {oneTrashEmail.fromName}
          </a>
        </td>
        <td>
          <a href="#" className="text--decoration--none">
            {oneTrashEmail.subject}
          </a>
        </td>
        <td>
          <a href="#" className="text--decoration--none">
            {oneTrashEmail.date}
          </a>
        </td>

      </tr>

      return
    })


  }



  const filteredEmails = emails.filter((oneEmail) => {

    oneEmail.fromName.toLowerCase().includes(searchEmails.toLowerCase()) ||
      oneEmail.subject.toLowerCase().includes(searchEmails.toLowerCase()) ||
      oneEmail.date.toLowerCase().includes(searchEmails.toLowerCase())
    {
      return (
        <tr key={oneEmail.id} className="cursor-pointer">
          <td>
            <a href="#" className="text--decoration--none">
              {oneEmail.fromName}
            </a>
          </td>
          <td>
            <a href="#" className="text--decoration--none">
              {oneEmail.subject}
            </a>
          </td>
          <td>
            <a href="#" className="text--decoration--none">
              {oneEmail.date}
            </a>
          </td>
          <td className="text-align-right">
            <button id={oneEmail.id} className="form__btn fas fa-trash" onClick={handleDeleteEmails} >Borrar</button>
          </td>
        </tr>
      );
    }
  });
  const renderEmails = filteredEmails.map((oneEmail) => {
    if (oneEmail.fromName.toLowerCase().includes(searchEmails.toLowerCase()) ||
      oneEmail.subject.toLowerCase().includes(searchEmails.toLowerCase()) ||
      oneEmail.date.toLowerCase().includes(searchEmails.toLowerCase())) {
      return (
        <tr key={oneEmail.id} className="cursor-pointer">
          <td>
            <a href="#" className="text--decoration--none">
              {oneEmail.fromName}
            </a>
          </td>
          <td>
            <a href="#" className="text--decoration--none">
              {oneEmail.subject}
            </a>
          </td>
          <td>
            <a href="#" className="text--decoration--none">
              {oneEmail.date}
            </a>
          </td>
          <td className="text-align-right">
            <button id={oneEmail.id} className="form__btn fas fa-trash" onClick={handleDeleteEmails}>Borrar</button>
          </td>
        </tr>
      );
    } else {
      return (
        <section className="section">
          <p className="p">La búsqueda no devuelve resultados</p>
        </section>

      )

    }

  });








  return (
    <>
      <header>
        <div>
          <h1 className="title">
            <span className="fas fa-envelope-open-text"></span>
            Gmail
          </h1>
        </div>

        <form className="text-align-right" onSubmit={handleSubmit}>
          <button className="form__btn">
            <span className="fas fa-inbox"></span>
            Recibidos
          </button>
          <button className="form__btn" onClick={handleRenderTrashEmails} >
            <span className="fas fa-trash"></span>
            Papelera
          </button>
          <input
            onChange={handleSearchEmails}
            className="form__input-text"
            type="text"
            placeholder="Buscar un correo"
          />
        </form>
      </header>

      <table className="table">
        <tbody>
          {renderEmails}
          {/* {rendertrashEmails} */}

        </tbody>

      </table>

      <div>
        <div className="col2 mt-1 pt-1">
          <div>
            <h2 className="title--meidum">Entradas ya a la venta</h2>
            <h3 className="title--small">
              <span className="text--bold display-inline-block mr-1">
                Front Fest
              </span>
              <span className="text-normal display-inline-block">
                &lt;info@frontfest.org&gt;
              </span>
            </h3>
          </div>
          <div className="text-align-right">
            <a href="#">
              <button className="fas fa-times-circle form__btn"></button>
            </a>
            <a href="#">
              <button className="fas fa-trash form__btn"></button>
            </a>
          </div>
        </div>

        <p>
          FrontFest es un evento anual y sin ánimo de lucro. Está organizado y
          gestionado por un equipo de voluntarios y voluntarias que pertenecen a
          la comunidad de desarrollo frontend. Celebrado por primera vez en
          2017, pretende ser un punto de encuentro a nivel nacional,
          principalmente en castellano, para todas aquellas personas interesadas
          en las tecnologías de frontend, donde compartir experiencias y
          aprender acerca de las nuevas tendencias en el sector. Y por supuesto,
          acabar divirtiéndose en buena compañía.
        </p>

        <div className="mt-1">
          <button className="form__btn">
            <span className="fas fa-reply"></span>
            Responder
          </button>

          <button className="form__btn">
            <span className="fas fa-reply-all"></span>
            Responder a todos
          </button>

          <button className="form__btn">
            <span className="fas fa-share"></span>
            Reenviar a todos
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
