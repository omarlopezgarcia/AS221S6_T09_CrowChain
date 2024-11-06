'use client';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './pageHome.css';
import React from 'react';

const HomePage = () => {

    const integrantes = [
        {
            nombre: 'Michael Quispe Chavez',
            imagen: 'https://github.com/miquidev.png',
            github: 'https://github.com/miquidev',
            linkedin: 'https://www.linkedin.com/in/michael-joseph-quispe-chavez-267185238'
        },
        {
            nombre: 'Trilary Quispe Luyo',
            imagen: 'https://github.com/TrilaryDev.png',
            github: 'https://github.com/TrilaryDev',
            linkedin: 'https://www.linkedin.com/in/trilary-misciel-quispe-luyo-372aa2239'
        },
        {
            nombre: 'Omar López García',
            imagen: 'https://github.com/omarlopezgarcia.png',
            github: 'https://github.com/omarlopezgarcia',
            linkedin: 'https://www.linkedin.com/in/omar-lópez-garcía-a88074235'
        }
    ];


    const data = [
        {
            title: 'Beneficios',
            grid: 'benefits',
            skill: ['Al unirte a nuestra plataforma, disfrutarás de una serie de beneficios, incluyendo la posibilidad de crear campañas personalizadas y colaborar con otros donantes.']
        },
        {
            title: 'Objetivos',
            grid: 'objectives',
            skill: ['Nuestro objetivo es facilitar la creación y gestión de campañas de donaciones, permitiendo a los usuarios apoyar diferentes causas y conectar con personas que comparten sus valores y preocupaciones.', 'Impulsar la transparencia y confianza en las campañas de donación, proporcionando información clara y actualizada sobre cómo se utilizan los fondos y el impacto generado en las causas apoyadas.', 'Fomentar el uso de aplicaciones virtuales como billeteras digitales para simplificar las donaciones y promover la inclusión financiera, permitiendo a los usuarios realizar transacciones de manera rápida, segura y accesible desde cualquier lugar.']
        },
        {
            title: 'Descripción',
            grid: 'description',
            skill: ['Este sistema de campañas de donaciones permite a los usuarios crear, gestionar y publicar sus propias campañas. Aquí podrás contribuir a diversas causas, compartir iniciativas y hacer una diferencia en la vida de quienes más lo necesitan, todo en un solo lugar.']
        },
        {
            title: 'Características',
            grid: 'characteristics',
            skill: ['Crea campañas personalizadas de manera sencilla.', 'Gestiona tus campañas con herramientas intuitivas.', 'Vistazo detallado de las campañas en general.', 'Protección sin riesgos en la accesibilidad de los recursos.']
        },
    ];




    return (
        <div className="flex flex-col items-start justify-start min-h-screen px-8 py-8">
            <h1 className="text-white text-4xl font-bold mb-6">Bienvenido al Inicio</h1>

            {/* Contenedor de habilidades */}
            <div id="skills" className="skills">
                {data.map((tech, index) => (
                    <div
                        key={index}
                        className="skills__container"
                        style={{ gridArea: tech.grid }}
                    >
                        <div className="skills__header">{tech.title}</div>
                        <ul className="skills__list">
                            {tech.skill.map((skill, skillIndex) => (
                                <li key={skillIndex} className="skills__list-item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Contenedor de Integrantes */}
            <div className="w-full p-8 mt-6 -lg shadow-lg bg-[#18181B]">
                <h2 className="text-white text-2xl mb-4">Integrantes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {integrantes.map((integrante, index) => (
                        <div key={index} className="bg-[#252527] p-6 rounded-lg shadow-lg text-center">
                            <img
                                src={integrante.imagen}
                                alt={`Foto de ${integrante.nombre}`}
                                className="w-32 h-32 rounded-full mx-auto mb-4 transform transition-transform duration-300 hover:scale-105" />
                            <h3 className="text-white text-xl font-bold mb-2">{integrante.nombre}</h3>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href={integrante.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#333] text-white hover:bg-white hover:text-black transition-colors">
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href={integrante.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] text-white hover:bg-white hover:text-[#0077B5] transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Contenedor de Conclusiones */}
            <div className="w-full p-8 mt-6 -lg shadow-lg bg-[#18181B]">
                <h2 className="text-white text-2xl mb-4">Conclusiones</h2>
                <p className="text-[#A3C1C1] leading-relaxed overflow-wrap break-words">
                    Con este sistema de campañas de donaciones, estamos convencidos de que podemos hacer una
                    diferencia positiva en la sociedad. Al proporcionar una plataforma para la creación, gestión y
                    promoción de campañas, empoderamos tanto a los donantes como a las personas que buscan apoyo
                    para sus causas. Esto puede generar un impacto significativo en las vidas de quienes más lo
                    necesitan.
                </p>
            </div>

        </div>
    );
};

export default HomePage;