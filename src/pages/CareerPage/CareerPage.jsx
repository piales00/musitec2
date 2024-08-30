import { Fragment } from 'react';
import React from 'react';
import './CareerPage.css';
import TitleCareer from '../../components/Careers/TitleCareer';
import CareerCards from '../../components/Careers/CareerCards';
import SliderCareer from '../../components/Careers/SliderCareer';
import SectionQuestionsCareer from '../../components/Careers/SectionQuestionsCareer';

function CareerPage (){

    return(
    <>
        <div>
            <TitleCareer />
            <CareerCards />
            <SliderCareer />
            <SectionQuestionsCareer />
        </div>
    </>
    );
}

export default CareerPage;