import { useState, useEffect } from 'react';

import Nabvar from '../../components/navbar';
import ButtonSave from '../../components/buttonSave';
import MessageInfo from '../../components/messageInfo';


import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export default function IncomeSurvey(){
    const [newEIngresoR1, setNewEIngresoR1] = useState("");
    const [newEIngresoR2, setNewEIngresoR2] = useState("");
    const [newEIngresoR3, setNewEIngresoR3] = useState("");
    const [newEIngresoR4, setNewEIngresoR4] = useState("");
  
    const [eIngreso, seteIngreso] = useState([]);
    const eIngresoColRef = collection(db, "encuestasIngreso");

    const createEIngreso = async () =>{
        alert(newEIngresoR1,newEIngresoR2,newEIngresoR3,newEIngresoR4);
        await addDoc(eIngresoColRef, {res1: newEIngresoR1, res2: newEIngresoR2, res3: newEIngresoR3, res4: newEIngresoR4});
      };
    return (
        <>
            <Nabvar />
            <div className="title-main-quizz block">
                <p className="title is-2">Encuesta de ingreso al programa de estudios de ingeniería en software</p>
            </div>
            <MessageInfo />

            {/* Módulo de encuesta*/}
            <form className="quizz-main m-auto">
                <div className="field is-horizontal box">
                    <div className="field-is is-normal">
                        <label name="question_id" className="label">Escuela de procedencia: <span className="span-req">*</span></label>
                    </div>
                    <div className="field-body block">
                        <div className="field">
                            <p className="control">
                                <input name="answer" className="input is-purple" type="text" placeholder="respuesta"  onChange={(event) =>{setNewEIngresoR1(event.target.value)}}/>
                            </p>
                        </div>
                    </div>
                    <div className="field-is is-normal">
                        <label name="question_id" className="label">Especialidad cursada en tu escuela de procedencia: <span
                            className="span-req">*</span></label>
                    </div>
                    <div className="field-body block">
                        <div className="field">
                            <p className="control">
                                <input name="answer" className="input is-purple" type="text" placeholder="respuesta"  onChange={(event) =>{setNewEIngresoR2(event.target.value)}}/>
                            </p>
                        </div>
                    </div>
                    {/* Módulo checkradio*/}
                    <div className="block">
                        <label name="question_id" className="label">¿Cómo te enteraste de la Universidad Politécnica de Durango?</label>
                        <div className="section-check">
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" value="paginas" onChange={(event) =>{setNewEIngresoR3(event.target.value)}}/>
                                    Páginas Web
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" onChange={(event) =>{setNewEIngresoR3(event.target.value)}}/>
                                    Redes Sociales
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" onChange={(event) =>{setNewEIngresoR3(event.target.value)}}/>
                                    Medios de comunicación (televisión, radio, periódico, otro)
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" onChange={(event) =>{setNewEIngresoR3(event.target.value)}}/>
                                    Visita guiada programada por mi bachillerato
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" onChange={(event) =>{setNewEIngresoR3(event.target.value)}}/>
                                    Pendones
                                </label>
                            </div>
                            <div className="control">
                                <label className="radio">
                                    <input name="answer" type="radio" onChange={(event) =>{setNewEIngresoR3(event.target.value)}}/>
                                    Recomendación de alguien más
                                </label>
                            </div>
                        </div>
                        <div className="control ">
                            <div className="field-is is-normal">
                                <label className="label">Otro:</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control">
                                        <input name="answer" className="input is-purple" type="text" placeholder="respuesta" onChange={(event) =>{setNewEIngresoR3(event.target.value)}}/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Módulo checkbox*/}
                    <div className="block">
                        <label name="question_id" className="label">¿Qué te motiva a estudiar Ingeniería en Software?</label>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" onChange={(event) =>{setNewEIngresoR4(event.target.value)}}/>
                                Diseñar y desarrollar software a la medida y/o genérico de calidad.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" onChange={(event) =>{setNewEIngresoR4(event.target.value)}}/>
                                Diseñar y crear bases de datos y aplicaciones para su manipulación.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" onChange={(event) =>{setNewEIngresoR4(event.target.value)}}/>
                                Gestionar, administrar e implementar proyectos de innovación en el área de software.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" onChange={(event) =>{setNewEIngresoR4(event.target.value)}}/>
                                Proporcionar soporte técnico y estratégico a la infraestructura de tecnologías de información.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" onChange={(event) =>{setNewEIngresoR4(event.target.value)}}/>
                                Integrar nuevas soluciones de software a servicios modernos como el comercio electrónico.
                            </label>
                        </div>
                        <div className="section-check">
                            <label className="checkbox">
                                <input name="answer_c" type="checkbox" onChange={(event) =>{setNewEIngresoR4(event.target.value)}}/>
                                Desarrollar investigación en el campo del desarrollo y reingeniería de las tecnologías de la
                                información.
                            </label>
                        </div>
                        <div className="control ">
                            <div className="field-is is-normal">
                                <label name="question_id" className="label">Otro:</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <p className="control">
                                        <input name="answer" className="input is-purple" type="text" placeholder="respuesta" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botón de guardar encuesta*/}

                <ButtonSave onClick={createEIngreso}/>
            </form>
        </>
    );
}
