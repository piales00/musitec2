import React from 'react';
import Cursos from '../../components/Cursos/cursos';
import Cursosf1 from '../../components/Cursos/cursofila1';
import Cursosf2 from '../../components/Cursos/cursofila2';
import Cursosf3 from '../../components/Cursos/cursofila3';

function CoursePage() {
    return (
        <>
        <div className='container-cursos'>
            <Cursos />  
            <div className='c1'><Cursosf1 /></div> 
            <div className='c1'><Cursosf2 /></div>
            <div className='c1'><Cursosf3 /></div>   
        </div>
        </>
    );
}

export default CoursePage;
