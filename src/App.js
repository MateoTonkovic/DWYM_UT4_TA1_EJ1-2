import "./App.css";
import Card from "./Card";

const CardWithChildren = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        backgroundColor: "blue",
      }}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card
          titulo="Tarea 1"
          descripcion="Descripción de la tarea 1"
          personaAsignada="Persona 1"
          fechaInicio="2021-10-01"
          fechaFin="2021-10-15"
        />
        <Card
          titulo="Tarea 2"
          descripcion="Descripción de la tarea 2"
          personaAsignada="Persona 2"
          fechaInicio="2021-10-16"
          fechaFin="2021-10-30"
        />
        <Card
          titulo="Tarea 3"
          descripcion="Descripción de la tarea 3"
          personaAsignada="Persona 3"
          fechaInicio="2021-11-01"
          fechaFin="2021-11-15"
        />
        <CardWithChildren>
          <h1>Children</h1>
          <p>Children are the best!</p>
        </CardWithChildren>
      </header>
    </div>
  );
}

export default App;
