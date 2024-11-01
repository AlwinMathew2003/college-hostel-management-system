-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2024 at 06:31 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hostel`
--

-- --------------------------------------------------------

--
-- Table structure for table `apology`
--

CREATE TABLE `apology` (
  `id` int(10) NOT NULL,
  `admno` varchar(20) NOT NULL,
  `reason` varchar(50) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `apology_no` int(10) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE `complaints` (
  `_id` int(11) NOT NULL,
  `adm_no` varchar(20) DEFAULT NULL,
  `Room_no` varchar(10) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complaints`
--

INSERT INTO `complaints` (`_id`, `adm_no`, `Room_no`, `message`, `status`) VALUES
(1, NULL, NULL, 'This is sample complain\n', '0'),
(2, '123', NULL, 'hello', NULL),
(3, '123', NULL, 'hello123', NULL),
(4, 'testuser', NULL, 'Demo Request', '0');

-- --------------------------------------------------------

--
-- Table structure for table `fees`
--

CREATE TABLE `fees` (
  `id` int(10) NOT NULL,
  `admno` varchar(20) NOT NULL,
  `due` varchar(10) NOT NULL,
  `advance` varchar(10) NOT NULL,
  `gym` varchar(10) NOT NULL,
  `laundry` varchar(10) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `holiday`
--

CREATE TABLE `holiday` (
  `id` int(10) NOT NULL,
  `date` date NOT NULL,
  `reason` varchar(50) NOT NULL,
  `update_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(50) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL DEFAULT 'pass',
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `date`) VALUES
(1, 'testuser', 'pass', '2024-10-29');

-- --------------------------------------------------------

--
-- Table structure for table `mess_cut`
--

CREATE TABLE `mess_cut` (
  `id` int(10) NOT NULL,
  `admno` varchar(20) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `breakfast` tinyint(1) NOT NULL,
  `lunch` tinyint(1) NOT NULL,
  `snack` tinyint(1) NOT NULL,
  `dinner` tinyint(1) NOT NULL,
  `messcut_active` int(5) NOT NULL,
  `request_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mess_request`
--

CREATE TABLE `mess_request` (
  `id` int(10) NOT NULL,
  `admno` varchar(20) NOT NULL,
  `leaving_date` date NOT NULL,
  `leaving_time` time NOT NULL,
  `returning_date` date NOT NULL,
  `returning_time` time NOT NULL,
  `reason` varchar(200) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `remarks` varchar(20) NOT NULL,
  `apply_time` datetime NOT NULL DEFAULT current_timestamp(),
  `update_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mess_request`
--

INSERT INTO `mess_request` (`id`, `admno`, `leaving_date`, `leaving_time`, `returning_date`, `returning_time`, `reason`, `status`, `remarks`, `apply_time`, `update_time`) VALUES
(1, 'testuser', '2024-10-24', '22:54:00', '2024-10-26', '15:59:00', 'Demo Request', '0', '', '2024-10-29 22:56:46', '2024-10-29 22:56:46'),
(2, 'testuser', '2024-10-26', '00:00:00', '2024-10-31', '16:00:00', 'Second Demo Request', '0', '', '2024-10-29 22:59:00', '2024-10-29 22:59:00');

-- --------------------------------------------------------

--
-- Table structure for table `mess_time`
--

CREATE TABLE `mess_time` (
  `id` int(2) NOT NULL,
  `type` varchar(50) NOT NULL,
  `start-time` time NOT NULL,
  `end-time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `admno` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `room_no` varchar(5) NOT NULL,
  `department` varchar(50) NOT NULL,
  `sem` varchar(2) NOT NULL,
  `phone_no` varchar(20) NOT NULL,
  `guardian_name` varchar(50) NOT NULL,
  `guardian_no` varchar(20) NOT NULL,
  `jecc_mail` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`admno`, `name`, `room_no`, `department`, `sem`, `phone_no`, `guardian_name`, `guardian_no`, `jecc_mail`) VALUES
('testuser', 'testname', '123', 'CSE', '7', '1234567890', 'guardian', '2154625145', 'test@gmail.com\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apology`
--
ALTER TABLE `apology`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `complaints`
--
ALTER TABLE `complaints`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `fees`
--
ALTER TABLE `fees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `holiday`
--
ALTER TABLE `holiday`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `mess_cut`
--
ALTER TABLE `mess_cut`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mess_request`
--
ALTER TABLE `mess_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mess_time`
--
ALTER TABLE `mess_time`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `complaints`
--
ALTER TABLE `complaints`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fees`
--
ALTER TABLE `fees`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `holiday`
--
ALTER TABLE `holiday`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mess_cut`
--
ALTER TABLE `mess_cut`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mess_request`
--
ALTER TABLE `mess_request`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `mess_time`
--
ALTER TABLE `mess_time`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
