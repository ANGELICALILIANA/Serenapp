-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 16, 2020 at 03:12 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `serenapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `generosmusicales`
--

CREATE TABLE `generosmusicales` (
  `idGenerosMusicales` int(11) NOT NULL,
  `nombreGenero` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `generosmusicales`
--

INSERT INTO `generosmusicales` (`idGenerosMusicales`, `nombreGenero`) VALUES
(1, 'Vallenato');

-- --------------------------------------------------------

--
-- Table structure for table `usuarioscontratantes`
--

CREATE TABLE `usuarioscontratantes` (
  `idUsuariosContratantes` int(11) NOT NULL,
  `nombreUsuario` varchar(200) DEFAULT NULL,
  `numeroTelUsuarios` int(11) DEFAULT NULL,
  `correoUsuarios` varchar(100) NOT NULL,
  `passUsuarios` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `usuariosmusicos`
--

CREATE TABLE `usuariosmusicos` (
  `idUsuariosMusicos` int(11) NOT NULL,
  `nombreGrupo` varchar(200) DEFAULT NULL,
  `nombreEncargado` varchar(200) DEFAULT NULL,
  `idGeneroMusical` int(11) DEFAULT NULL,
  `correoMusico` varchar(100) NOT NULL,
  `telefonoMusico` int(11) DEFAULT NULL,
  `passMusicos` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `generosmusicales`
--
ALTER TABLE `generosmusicales`
  ADD PRIMARY KEY (`idGenerosMusicales`);

--
-- Indexes for table `usuarioscontratantes`
--
ALTER TABLE `usuarioscontratantes`
  ADD PRIMARY KEY (`idUsuariosContratantes`);

--
-- Indexes for table `usuariosmusicos`
--
ALTER TABLE `usuariosmusicos`
  ADD PRIMARY KEY (`idUsuariosMusicos`),
  ADD KEY `idGeneroMusical` (`idGeneroMusical`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `generosmusicales`
--
ALTER TABLE `generosmusicales`
  MODIFY `idGenerosMusicales` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `usuariosmusicos`
--
ALTER TABLE `usuariosmusicos`
  ADD CONSTRAINT `usuariosmusicos_ibfk_1` FOREIGN KEY (`idGeneroMusical`) REFERENCES `generosmusicales` (`idGenerosMusicales`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
