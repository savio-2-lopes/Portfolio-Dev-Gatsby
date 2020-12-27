import React from 'react';
import BubbleChart from '@weknow/react-bubble-chart-d3';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Resume from '../components/sections/Resume';
import config from '../../config';

const skillsData = [
  {label: 'React', value: 10},
  {label: 'TypeScript', value: 5},
  {label: 'CSS', value: 10},
  {label: 'HTML', value: 10},
  {label: 'PHP', value: 5},
  {label: 'Databases', value: 5},
  {label: 'Javascript', value: 15},
  {label: 'Front End', value: 10},
]

  const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume
        firstName={config.firstName}
        lastName={config.lastName}
        address={config.address}
        phone={config.phone}
        email={config.email}
        socialLinks={config.socialLinks}
      >
        Entusiasta pelas mais modernas tecnologias e apaixonado por inovação, estudante de Análise e Desenvolvimento de Sistemas  e estagiário na área de Front-End.
        Tenho grande interesse na área de pesquisa e desenvolvimento tecnológico, principalmente na área de Desenvolvimento Web.
      </Resume>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Estágiário como Desenvolvedor Front End Jr </h3>
              <div className="subheading mb-3">Cazalab</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Novembro 2020 - Data Atual</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Formação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Fatec Prof. Waldomiro May </h3>
              <div className="subheading mb-3">Graduação</div>
              <div>Análise e Desenvolvimento de Sistemas</div>
            </div>

            <div className="resume-date text-md-right">
              <span className="text-primary">Julho 2019 - Julho 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Etec Prof. José Sant'Ana de Castro</h3>
              <div className="subheading mb-3">Curso Técnico</div>
              <div>Marketing</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2019 - Não terminado</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Etec Prof. Marcos Uchôas dos Santos Penchel</h3>
              <div className="subheading mb-3">Curso Técnico</div>
              <div>Turismo Receptivo</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2017 - Julho 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Etec Prof. Marcos Uchôas dos Santos Penchel</h3>
              <div className="subheading mb-3">Curso Técnico integrado ao Ensino Médio</div>
              <div>Eletrônica</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Fevereiro 2015 - Dezembro 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>

          <BubbleChart 
            padding = {0}
            showLegend
            data = {skillsData}
          />
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Capacitações &amp; Certificações</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Capacitação MDL ERP INTELLIGENCE - MDL Consulting
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Certificação como um dos Entrevistadores na Pesquisa de Campo para a Loja Margaridas - Cruzeiro/SP
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Certificação como Voluntário no 1º Encontro de Desenvolvimento e Oportunidade Cruzeiro/SP.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Premiação no 2º Ryla – Prêmio Rotary de Liderança Juvenil.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Certificação como Voluntário no evento “3º Encontro de Turismo”, Cachoeira Paulista/SP.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Voluntário no Evento “AMITESP/COMTUR”, Cachoeira Paulista/SP. 
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
