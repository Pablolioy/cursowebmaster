-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 04-01-2023 a las 00:58:58
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
-- Estructura de tabla para la tabla `empleados`
--

DROP TABLE IF EXISTS `empleados`;
CREATE TABLE IF NOT EXISTS `empleados` (
  `id_emp` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(80) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `descripcion` text NOT NULL,
  `puesto` varchar(30) NOT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id_emp`, `nombre`, `apellido`, `descripcion`, `puesto`) VALUES
(1, 'Juan', 'Hagan', 'esta desde hace rato', 'programador'),
(2, 'Gonzalo', 'Pillai', 'esta desde hace rato, desde octubre', 'programador'),
(3, 'Ana', 'Dharma', 'esta desde hace rato', 'programador'),
(4, 'Maria', 'Anchor', 'Nuevo', 'programador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

DROP TABLE IF EXISTS `galeria`;
CREATE TABLE IF NOT EXISTS `galeria` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`id`, `descripcion`) VALUES
(17, 'nueva'),
(4, 'afdsfasd'),
(5, 'afffssadfsfaf'),
(6, 'asdfasfdaf'),
(7, 'asdfafsafda'),
(8, 'ghafsfds'),
(9, 'vvsdfg sdgvfds'),
(10, 'dfgsbw ');

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
(8, '2022-12-16 01:44:45', 'The Last of Us Parte 3 está en desarrollo, según un conocido \'insider\'', 'Además del multijugador ambientado en The Last of Us, Naughty Dog tendría en producción la tercera entrega de la saga, dice una fuente conocida en la industria del cine y la televisión.', 'buenas buenas jasjkasdjksalkjdsaljkdsajkldasasd');

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_german2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `password`) VALUES
(1, 'flavia', '202cb962ac59075b964b07152d234b70'),
(2, 'pablo', '99c5e07b4d5de9d18c350cdf64c5aa3d'),
(4, 'lioy', '123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoraciones`
--

DROP TABLE IF EXISTS `valoraciones`;
CREATE TABLE IF NOT EXISTS `valoraciones` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `autor` varchar(50) NOT NULL,
  `valoracion` int(2) NOT NULL,
  `reseña` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `valoraciones`
--

INSERT INTO `valoraciones` (`id`, `autor`, `valoracion`, `reseña`) VALUES
(1, 'Zyred ', 10, 'Muy buen juego, gráficamente hermoso y una excelente banda sonora. 10/10'),
(2, 'Benjaxc', 8, 'Juego lindo, juego hermoso, juegazo. Comprar juego.'),
(3, 'medio bestia 333', 7, 'La ambientación esta buena ,la jugabilidad se siente fluida la historia es hermosa ,no hay mucho que decir que a estas alturas no sepan ya, compralo no te arrepentirás'),
(4, 'vEnJa', 10, 'Simplemente maravilloso, denle una oportunidad cuando puedan.'),
(5, 'Anme ', 9, 'Que decir de Hollow Knight que no se haya dicho ya, un metroidvania maravilloso con una historia igual de buena. Completamente recomendado ya sea que estes o no familiarizado con el genero, es una experiencia que sin duda alguna disfrutaras y posiblemente como muchos de nosotros lo añadiras a tu top 10 de juegos indies, sin duda no debe faltar en tu biblioteca de juegos.');

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
  `youtube_id` varchar(100) NOT NULL,
  `steam_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `videojuegos`
--

INSERT INTO `videojuegos` (`id`, `nombre`, `fecha_lanzamiento`, `descripcion`, `precio`, `youtube_id`, `steam_id`) VALUES
(1, 'Hollow Knight\r\n', '2023-01-21', '¡Forja tu propio camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado a mano.\r\n', 0, 'UAO2urG23S4', '367520'),
(2, 'Dust: An Elysian Tail\r\n', '2023-01-22', 'Immerse yourself in a gorgeous hand-painted world on a search for your true identity. As the mysterious warrior, Dust, your action-packed journey will take you from peaceful glades to snowy mountaintops and beyond.\r\n', 0, 'yTcWW2lEn2U', '236090'),
(3, 'Ori and the Will of the Wisps', '2022-11-23', 'Comienza un nuevo viaje por un mundo enorme y exótico en el que encontrarás imponentes enemigos y puzles desafiantes en tu misión para desentrañar el destino de Ori.\r\n', 0, '2kPSl2vyu2Y', '1057090'),
(8, 'elden Ring', '1996-01-21', 'EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.\r\n', 400, 'YekdlQp-o60', '1245620');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
