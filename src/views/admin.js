import { useState, useEffect } from 'react';

import Nabvar from '../components/navbar';
import ButtonSave from '../components/buttonSave';
import MessageInfo from '../components/messageInfo';

import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export default function Admin(){

    const [eIngreso, seteIngreso] = useState([]);
    const eIngresoColRef = collection(db, "encuestasIngreso");

    useEffect(() =>{

        const geteIngreso = async () =>{
          const data = await getDocs(eIngresoColRef);
          seteIngreso(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
    
        geteIngreso()
      }, [])
    return (
        <>
            {/*<Nabvar />*/}
            <div className="title-main-quizz block">
                <p className="title is-2">Encuesta Ingreso</p>
            </div>

            {/* Módulo de encuesta*/}
                <div className="container is-align-content-center">
                    <div className="field is-horizontal box">
                    <h2>Registros:</h2>
                        <div className="field-is is-normal">
                            {eIngreso.map((e) => {
                                return  (
                                <div className="encuesta">
                                    <div className="columns">
                                        <div className="column">Registro</div>
                                        <div className="column is-align-items-flex-end	"><button>Editar</button></div>
                                    </div>
                                    <div className="box field is-horizontal">
                                        <div className="column question-id">Escuela de procedencia: <br/>{e.res1}</div>
                                        <div className="column">Especialidad cursada en tu escuela de procedencia: <br/>{e.res2}</div>
                                        <div className="column">¿Cómo te enteraste de la Universidad Politécnica de Durango? <br/>{e.res3}</div>
                                        <div className="column">¿Qué te motiva a estudiar Ingeniería en Software? <br/>{e.res4}</div>
                                    </div>
                                    {/* <button onClick={() =>{deleteEIngreso(e.id)}}>Eliminar</button> */}
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Botón de guardar encuesta*/}

                <ButtonSave />
        </>
    );
}
