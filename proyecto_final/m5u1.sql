-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 25-12-2022 a las 21:51:40
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `m5u1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `edad` int(3) NOT NULL,
  `mail` varchar(40) NOT NULL,
  `fecha_de_alta` date NOT NULL,
  `telefono` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `edad`, `mail`, `fecha_de_alta`, `telefono`) VALUES
(1, 'Pablo', 'Lioy', 26, 'pablo@email.com', '2022-11-07', '1530000000'),
(2, 'Pablo', 'Lioy', 26, 'pablo@email.com', '2022-11-07', '1530000000'),
(3, 'Alejandro', 'perez', 21, 'ale@email.com', '2022-10-10', '1530000001');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consola`
--

DROP TABLE IF EXISTS `consola`;
CREATE TABLE IF NOT EXISTS `consola` (
  `id_consola` int(3) NOT NULL,
  `consola` varchar(20) NOT NULL,
  `empresa_des` varchar(20) NOT NULL,
  PRIMARY KEY (`id_consola`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `trabajo` varchar(50) NOT NULL,
  `edad` int(3) NOT NULL,
  `salario` int(8) NOT NULL,
  `mail` varchar(80) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `mail`) VALUES
(1, 'Juan', 'Hagan', 'Programador Senior', 32, 120000, 'juan_hagan@bignet.com'),
(2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, 110000, 'g_pillai@bignet.com'),
(3, 'Ana', 'Dharma', 'Desarrollador Web', 27, 90000, 'ana@bignet.com'),
(4, 'Maria', 'Anchor', 'Desarrollador Web', 26, 85000, 'mary@bignet.com'),
(5, 'Alfredo', 'Fernandez', 'Programador', 31, 75000, 'af@bignet.com'),
(6, 'Juan', 'Aguero', 'Programador', 34, 80000, 'juan@bignet.com'),
(7, 'Eduardo', 'Sacan', 'Programador', 25, 75000, 'eddie@bignet.com'),
(8, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com'),
(23, 'Pablo', 'Lioy', 'Programador', 26, 10000, 'pablo@email.com'),
(10, 'Paublo', 'Simon', 'Especialista Multimedia', 43, 85000, 'ps@bignet.com'),
(11, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 75000, 'arturo@bignet.com'),
(12, 'Jimena', 'Cazado', 'Diseñador Web Senior', 32, 110000, 'jimena@bignet.com'),
(13, 'Roberto', 'Luis', 'Administrador de Sistemas', 35, 100000, 'roberto@bignet.com'),
(14, 'Daniel', 'Gutierrez', 'Administrador de Sistemas', 34, 90000, 'daniel@bignet.com'),
(15, 'Miguel', 'Harper', 'Ejecutivo de Ventas Senior', 36, 120000, 'miguel@bignet.com'),
(16, 'Monica', 'Sanchez', 'Ejecutivo de Ventas', 30, 90000, 'monica@bignet.com'),
(17, 'Alicia', 'Simlai', 'Ejecutivo de Ventas', 27, 70000, 'alicia@bignet.com'),
(18, 'Jose', 'Iriarte', 'Ejecutivo de Ventas', 27, 72000, 'jose@bignet.com'),
(19, 'Sabrina', 'Allende', 'Gerente de Soporte Tecnico', 32, 200000, 'sabrina@bignet.com'),
(20, 'Pedro', 'Campion', 'Gerente de Finanzas', 36, 220000, 'pedro@bignet.com'),
(21, 'Mariano', 'Dharma', 'Presidente', 28, 300000, 'mariano@bignet.com'),
(22, 'Francisco', 'Perez', 'Programador', 26, 90000, 'francisco@bignet.com'),
(24, 'Pablo', 'Lioy', 'Programador', 26, 10000, 'pablo@email.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

DROP TABLE IF EXISTS `galeria`;
CREATE TABLE IF NOT EXISTS `galeria` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`id`, `descripcion`) VALUES
(1, 'cambia10'),
(2, 'testeo 2'),
(3, 'testeo 3'),
(4, 'afdsfasd'),
(5, 'afffssadfsfaf'),
(6, 'asdfasfdaf'),
(7, 'asdfafsafda'),
(8, 'ghafsfds'),
(9, 'vvsdfg sdgvfds'),
(10, 'dfgsbw '),
(11, 'dsafsdfsa'),
(12, 'dsafsdfsa'),
(13, 'nuevo nuevisimo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `hora_fecha` datetime NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `contenido` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `hora_fecha`, `titulo`, `subtitulo`, `contenido`) VALUES
(4, '2022-12-16 00:06:43', 'El nuevo Tomb Raider llegará editado por Amazon Games\r\n', 'Crystal Dynamics está desarrollando un nuevo Tomb Raider en Unreal Engine 5. Lo anunció en abril, y ahora ha confirmado que Amazon Games lo publicará en múltiples plataformas.\r\n', 'La desarrolladora Crystal Dynamics y Amazon Games han anunciado un acuerdo de colaboración para el nuevo juego de la saga Tomb Raider. Desde que Square Enix vendió varios estudios y licencias a Embracer Group por 300 millones de dólares, la franquicia protagonizada por Lara Croft había quedado en manos del estudio responsable del desarrollo de la última trilogía. Ahora se ha confirmado que será la filial de videojuegos de Amazon la que publicará el próximo Tomb Raider.\r\n\r\n'),
(5, '2022-12-16 00:08:46', 'Tekken 8: Todo lo que sabemos del nuevo Torneo del Rey del Puño de Hierro', 'Tekken vuelve más espectacular que nunca y con novedades jugables que prometen reinventar la saga para hacerla más agresiva.\r\n', 'Tekken 7 ha sido la entrega más exitosa de la saga y supera los 10 millones de copias vendidas, pero su contenido postlanzamiento se completó con la incorporación de Lidia Sobieska y el propio juego empieza a achacar su antigüedad –debutó en arcades en 2015, y en sistemas domésticos en 2017-. Tekken 8 es el esperado regreso del Torneo del Rey del Puño de Hierro y promete ser una revolución en la saga a varios niveles además de plantear un nuevo capítulo en su tormentosa historia de los Mishima.\r\n\r\n'),
(6, '2022-12-16 00:08:46', 'Dynasty Warriors. La escisión de Masayoshi Sasaki\r\n', 'Repasamos la extensa colección musical de KOEI en la saga estrella del género de los musou.\r\n', 'Hemos dedicado en este tiempo artículos a algunos de los principales compositores que pasaron por KOEI, como Yoko Kanno, Yoshikiro Ike o incluso Hiroshi Miyagawa, pero su participación y la de veteranas como Michiru Oshima se centró en las sagas de estrategia primigenias, desde Romance of the Three Kingdoms y Nobunaga’s Ambition hasta otras menos populares que no salieron en Europa.\r\n\r\n'),
(7, '2022-12-16 01:24:39', 'Impresiones Scars Above, una desafiante aventura de ciencia ficción', 'Probamos las primeras horas de una nueva y amena aventura de acción y ciencia ficción.', 'Scars Above es justo lo que cabría esperar de una producción AA, un título con una serie de limitaciones que ni hace nada nuevo ni brilla en ninguno de sus apartados individuales, pero que es capaz de ofrecernos una aventura lo suficientemente sólida, directa y entretenida como para hacernos pasar un buen rato entre tantas superproducciones y joyas indies, tal y como hemos podido comprobar tras superar sus primeras horas.\r\n\r\n'),
(8, '2022-12-16 01:44:45', 'The Last of Us Parte 3 está en desarrollo, según un conocido \'insider\'', 'Además del multijugador ambientado en The Last of Us, Naughty Dog tendría en producción la tercera entrega de la saga, dice una fuente conocida en la industria del cine y la televisión.', 'buenas buenas\r\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) COLLATE utf8_german2_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_german2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'pablo', '674f3c2c1a8a6f90461e8a66fb5550ba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `videojuegos`
--

DROP TABLE IF EXISTS `videojuegos`;
CREATE TABLE IF NOT EXISTS `videojuegos` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `fecha_lanzamiento` date NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `videojuegos`
--

INSERT INTO `videojuegos` (`id`, `nombre`, `fecha_lanzamiento`, `descripcion`, `precio`) VALUES
(1, 'Hollow Knight\r\n', '2023-01-21', '¡Forja tu propio camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado a mano.\r\n', 0),
(2, 'Dust: An Elysian Tail\r\n', '2023-01-22', 'Immerse yourself in a gorgeous hand-painted world on a search for your true identity. As the mysterious warrior, Dust, your action-packed journey will take you from peaceful glades to snowy mountaintops and beyond.\r\n', 0),
(3, 'Ori and the Will of the Wisps\r\n', '2023-01-23', 'Comienza un nuevo viaje por un mundo enorme y exótico en el que encontrarás imponentes enemigos y puzles desafiantes en tu misión para desentrañar el destino de Ori.\r\n', 0),
(8, 'elden Ring', '1996-01-21', 'cambiaro xc2', 200),
(10, 'Dragon Ball', '2022-12-12', 'Hola que tal', 300);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
