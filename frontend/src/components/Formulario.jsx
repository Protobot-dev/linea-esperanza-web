import React, { Component } from "react";
import axios from "axios";
import Paises from "./Paises";

import {
  FormularioBase,
  FormularioTabla,
  FormularioAtributos,
  FormularioOpciones,
  Inputs,
  FormularioEnviar,
  EspacioCompartido,
  OpcionesFormulario,
  Popup,
} from "../css/style";

export default class mail extends Component {
  state = {
    users: [],
  };

  getPacientes = async () => {
    const res = await axios.get("http://198.12.249.206:7000/formulario");
    this.setState({ users: res.data });
  };

  async componentDidMount() {
    // const res = await axios.get("http://localhost:4000/api/notes");
    this.getPacientes();
    console.log(this.state.users);
  }

  onChangeNombre = (e) => {
    this.setState({
      nombre: e.target.value,
    });
  };

  onChangeApellido = (e) => {
    this.setState({
      apellido: e.target.value,
    });
  };

  onChangeSexo = (e) => {
    this.setState({
      sexo: e.target.value,
    });
  };

  onChangeEdad = (e) => {
    this.setState({
      edad: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangeTelefonoCelular = (e) => {
    this.setState({
      telefonoCelular: e.target.value,
    });
  };

  onChangeTelefonoFijo = (e) => {
    this.setState({
      telefonoFijo: e.target.value,
    });
  };

  onChangePais = (e) => {
    this.setState({
      pais: e.target.value,
    });
  };

  onChangeCiudad = (e) => {
    this.setState({
      ciudad: e.target.value,
    });
  };

  onChangeFormaContacto = (e) => {
    this.setState({
      formaContacto: e.target.value,
    });
  };

  onChangeMotivoConsulta = (e) => {
    this.setState({
      motivoConsulta: e.target.value,
    });
  };

  onChangeDescripcionEmocional = (e) => {
    this.setState({
      descripcionEmocional: e.target.value,
    });
  };

  onChangeHabitosPersonales = (e) => {
    this.setState({
      habitosPersonales: e.target.value,
    });
  };

  onChangeComentarioAdicional = (e) => {
    this.setState({
      comentarioAdicional: e.target.value,
    });
  };

  onSubmitPacientes = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://198.12.246.206:7000/formulario/mail", {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      sexo: this.state.sexo,
      edad: this.state.edad,
      email: this.state.email,
      telefonoCelular: this.state.telefonoCelular,
      telefonoFijo: this.state.telefonoFijo,
      pais: this.state.pais,
      ciudad: this.state.ciudad,
      formaContacto: this.state.formaContacto,
      motivoConsulta: this.state.motivoConsulta,
      descripcionEmocional: this.state.descripcionEmocional,
      habitosPersonales: this.state.habitosPersonales,
      comentarioAdicional: this.state.comentarioAdicional,
    });

    this.getPacientes();
  };

  render() {
    return (
      <FormularioBase>
        <h1>Formulario de solicitud de atención psicológica</h1>

        <FormularioTabla onSubmit={this.onSubmitPacientes}>
          <FormularioAtributos className="columna-uno">
            <div>
              <Inputs
                type="text"
                placeholder="Nombre"
                autoComplete="none"
                onChange={this.onChangeNombre}
              />
            </div>
            <div>
              <Inputs
                type="text"
                autoComplete="none"
                placeholder="Apellido"
                onChange={this.onChangeApellido}
              />
            </div>
            <EspacioCompartido className="SexoEdad">
              <div>
                {/* <Inputs type="text" autoComplete="none" placeholder="Sexo" onChange = {this.onChangeSexo}/> */}
                <OpcionesFormulario className="opcionesSexo">
                  <option value="Sexo" id="AF">
                    Sexo
                  </option>
                  <option value="Femenino" id="AR">
                    Femenino
                  </option>
                  <option value="Masculino" id="BO">
                    Masculino
                  </option>
                </OpcionesFormulario>
              </div>
              <div>
                <Inputs
                  className="inputEdad"
                  type="tel"
                  autoComplete="none"
                  placeholder="Edad"
                  onChange={this.onChangeEdad}
                />
              </div>
            </EspacioCompartido>
            <div>
              <Inputs
                type="email"
                autoComplete="none"
                placeholder="Email"
                onChange={this.onChangeEmail}
              />
            </div>
          </FormularioAtributos>
          <FormularioAtributos className="columna-dos">
            <EspacioCompartido className="AreaConTelefono">
              <div>
                <input
                  className="codigoTelefono"
                  type="tel"
                  autoComplete="none"
                  placeholder="Cod. Area"
                  onChange={this.onChangeTelefonoCelular}
                />
              </div>
              <div>
                <input
                  className="celularTelefono"
                  type="tel"
                  autoComplete="none"
                  placeholder="Teléfono Celular"
                  onChange={this.onChangeTelefonoCelular}
                />
              </div>
            </EspacioCompartido>
            <EspacioCompartido className="AreaConTelefono">
              <div>
                <input
                  className="codigoTelefono"
                  type="tel"
                  autoComplete="none"
                  placeholder="Cod. Area"
                  onChange={this.onChangeTelefonoFijo}
                />
              </div>
              <div>
                <input
                  className="celularTelefono"
                  type="tel"
                  autoComplete="none"
                  placeholder="Teléfono Fijo"
                  onChange={this.onChangeTelefonoFijo}
                />
              </div>
            </EspacioCompartido>

            <div>
              <Paises />
            </div>
            <div>
              <Inputs
                type="text"
                autoComplete="none"
                placeholder="Ciudad"
                onChange={this.onChangeCiudad}
              />
            </div>
          </FormularioAtributos>
          <div>
            <h2>¿De qué forma quiere ser contactado?</h2>
            <FormularioOpciones onChange={this.onChangeFormaContacto}>
              <option value="Sin seleccionar">Preferencia</option>
              <option value="Video conferencia">Video conferencia</option>
              <option value="Presencialmente">Presencialmente</option>
              <option value="Llamada telefónica">Llamada telefónica</option>
              <option value="Chat de Whatsapp">Chat de Whatsapp</option>
            </FormularioOpciones>
          </div>
          <div>
            <h2>¿Cúal es el motivo de su consulta?</h2>
            <Inputs
              className="contar"
              type="text"
              autoComplete="none"
              placeholder="Motivo de consulta"
              onChange={this.onChangeMotivoConsulta}
            />
          </div>
          <div>
            <h2>¿Describe cómo te sientes emocionalmente en este momento?</h2>
            <Inputs
              className="contar"
              type="text"
              autoComplete="none"
              placeholder="Cuéntanos"
              onChange={this.onChangeDescripcionEmocional}
            />
          </div>
          <div>
            <h2>
              Menciona los campos importantes en los hábitos personales que has
              notado recientemente
            </h2>
            <Inputs
              className="contar"
              type="text"
              autoComplete="none"
              placeholder="Ejemplo: Alimentacion, Concentracion, Aseo personal, Vitalidad"
              onChange={this.onChangeHabitosPersonales}
            />
          </div>
          <div>
            <h2>¿Quieres agregar algún comentario adicional?</h2>
            <Inputs
              className="contar"
              type="text"
              autoComplete="none"
              placeholder="Cuéntanos"
              onChange={this.onChangeComentarioAdicional}
            />
          </div>
          <a>
            <FormularioEnviar type="submit">ENVIAR FORMULARIO</FormularioEnviar>
          </a>
        </FormularioTabla>
      </FormularioBase>
    );
  }
}