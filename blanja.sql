-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2021 at 05:34 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blanja`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address_type` varchar(255) NOT NULL,
  `recipient_name` varchar(255) NOT NULL,
  `address` longtext NOT NULL,
  `city` varchar(255) NOT NULL,
  `postal` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `user_id`, `address_type`, `recipient_name`, `address`, `city`, `postal`, `phone`) VALUES
(4, 3, 'kost', 'Arif Nur Agung', 'Jalan Kertoasri Dalam No 53', 'Malang', '65113', '08989898980'),
(5, 18, 'kost', 'Firmanda Nugroho', 'Gandaria City', 'Jakarta Selatan', '12140', '0898080808'),
(6, 18, 'home', 'Arif Nur Agung', 'Jalan Kertoasri dalam No 53', 'Malang', '65113', '0890000000'),
(7, 18, 'Kost', 'Moko', 'Jalan Mayjen Panjaitan', 'Malang', '65113', '08000000'),
(8, 21, 'Rumah', 'Moko', 'Malang', 'Malang', '61553', '0857xxxx'),
(9, 25, 'Kos', 'Agung', 'Klojen', 'Malang', '65113', '62890000');

-- --------------------------------------------------------

--
-- Table structure for table `bag`
--

CREATE TABLE `bag` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blocklist_token`
--

CREATE TABLE `blocklist_token` (
  `token` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'T-shirt'),
(2, 'Short'),
(3, 'Jacket'),
(4, 'Pants'),
(5, 'Shoes');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `color_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id`, `color_name`) VALUES
(1, 'Red'),
(2, 'Green'),
(3, 'Blue'),
(4, 'Black');

-- --------------------------------------------------------

--
-- Table structure for table `conditions`
--

CREATE TABLE `conditions` (
  `id` int(11) NOT NULL,
  `condition_name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `conditions`
--

INSERT INTO `conditions` (`id`, `condition_name`) VALUES
(1, 'New'),
(2, 'Second');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_status`
--

CREATE TABLE `delivery_status` (
  `id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `delivery_status`
--

INSERT INTO `delivery_status` (`id`, `status`) VALUES
(1, 'Order Created'),
(2, 'On Process'),
(3, 'Delivering'),
(4, 'Delivered');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `payment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `payment`) VALUES
(1, 'Gopay'),
(2, 'MasterCard'),
(3, 'Pos');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `condition_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_price` int(11) NOT NULL,
  `product_desc` text NOT NULL,
  `qty` int(11) NOT NULL,
  `product_img` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `user_id`, `size_id`, `color_id`, `condition_id`, `category_id`, `product_price`, `product_desc`, `qty`, `product_img`, `created_at`, `updated_at`) VALUES
(1, 'Adidas 3bar Shorts', 3, 1, 2, 1, 2, 170000, '- adidas performance\n- Celana pendek training desain klasik dengan iconic 3-stripes\n- Warna hitam\n- Material katun kombinasi tidak transparan, ringan, dan tidak stretch\n- Mid rise\n- Regular fit\n- Karet pinggang elastis\n- Tinggi model 188cm, lingkar pinggang 80cm, mengenakan ukuran M', 0, '/images/image-1608057256527.jpg,/images/image-1608057256530.jpg,/images/image-1608057256534.jpg,/images/image-1608057256538.jpg,/images/image-1608057256539.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(2, 'Adidas essentials 3 stripes t-shirt', 3, 2, 3, 1, 1, 280000, '- adidas performance\n- Kaos detail 3-stripes logo dengan extra-soft feel\n- Warna hitam\n- Material katun jersey tidak transparan, ringan dan tidak stretch\n- Kerah crew\n- Unlined\n- Regular fit', 0, '/images/image-1608057384028.jpg,/images/image-1608057384034.jpg,/images/image-1608057384038.jpg,/images/image-1608057384041.jpg,/images/image-1608057384043.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(3, 'BDU Tactical Blackbeard R6S', 3, 3, 4, 1, 1, 230000, 'specification :\n• ripstop cream\n• combed 30s/20s\n• zipper\n• hoodie\n• velcro patch\n• 2 arm pocket\n• plastisol ink\n• chain snitching', 0, '/images/image-1608057462464.jpg,/images/image-1608057462466.jpg,/images/image-1608057462468.jpg,/images/image-1608057462474.jpg,/images/image-1608057462478.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(4, 'Billabong Scheme X-short', 3, 4, 1, 1, 2, 230000, '- Celana cargo bergaya urban chic dalam nuansa dark tone\n- Warna hitam\n- Mid rise\n- Unlined\n- Regular fit\n- Kancing dan resleting depan\n- Detail kantong\n- Material katun tidak transparan, ringan, dan tidak stretch\n- Tinggi model 184cm, lingkar pinggang 79cm, mengenakan ukuran 32in', 0, '/images/image-1608057527181.jpg,/images/image-1608057527184.jpg,/images/image-1608057527185.jpg,/images/image-1608057527187.jpg,/images/image-1608057527189.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(5, 'Cargo Robe Mens Jogger Pants', 3, 3, 1, 2, 4, 280000, '- Celana Jogger bergaya urban chic dalam nuansa dark tone\n- Warna hitam\n- Mid rise\n- Unlined\n- Regular fit\n- Kancing dan resleting depan\n- Detail kantong\n- Material katun tidak transparan, ringan, dan tidak stretch\n- Tinggi model 184cm, lingkar pinggang 79cm, mengenakan ukuran 32in', 0, '/images/image-1608057605871.jpg,/images/image-1608057605873.jpg,/images/image-1608057605876.jpg,/images/image-1608057605879.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(6, 'Converse All Star Canvas - Hi Sneakers', 3, 2, 2, 2, 5, 480000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057675938.jpg,/images/image-1608057675940.jpg,/images/image-1608057675942.jpg,/images/image-1608057675944.jpg,/images/image-1608057675946.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(7, 'DC Midway Men\'s Sneaker', 3, 1, 3, 1, 5, 590000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057702452.jpg,/images/image-1608057702454.jpg,/images/image-1608057702455.jpg,/images/image-1608057702457.jpg,/images/image-1608057702459.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(8, 'Emersongear Blue Label Ergonomic Fit Long', 3, 2, 4, 1, 4, 690000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057742311.jpg,/images/image-1608057742314.jpg,/images/image-1608057742316.jpg,/images/image-1608057742319.jpg,/images/image-1608057742322.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(9, 'Hoodie ZIp Zero R6S', 3, 3, 1, 2, 3, 690000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057767370.jpg,/images/image-1608057767371.jpg,/images/image-1608057767374.jpg,/images/image-1608057767375.jpg,/images/image-1608057767377.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(10, 'LVNK Jaket Bomber Original Motz', 3, 1, 2, 1, 3, 600000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057801450.jpg,/images/image-1608057801457.jpg,/images/image-1608057801459.jpg,/images/image-1608057801460.jpg,/images/image-1608057801462.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(11, 'MARKS & SPENCER Faux Fur Jacket', 3, 2, 3, 2, 3, 800000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057836546.jpg,/images/image-1608057836548.jpg,/images/image-1608057836550.jpg,/images/image-1608057836552.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(12, 'Nike Air Max Invigor', 3, 3, 4, 1, 3, 820000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057859054.jpg,/images/image-1608057859056.jpg,/images/image-1608057859058.jpg,/images/image-1608057859060.jpg,/images/image-1608057859062.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(13, 'Nike Mens Dri-Fit WIld Run Tank', 3, 10, 4, 1, 1, 180000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057886421.jpg,/images/image-1608057886423.jpg,/images/image-1608057886424.jpg,/images/image-1608057886427.jpg,/images/image-1608057886432.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(14, 'Nine Points Slim Pants Casual Pria', 3, 5, 3, 1, 4, 280000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057914287.jpg,/images/image-1608057914290.jpg,/images/image-1608057914291.jpg,/images/image-1608057914297.jpg,/images/image-1608057914300.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(15, 'PUMA Man City Training Jersey', 3, 6, 2, 1, 1, 280000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057937647.jpg,/images/image-1608057937649.jpg,/images/image-1608057937650.jpg,/images/image-1608057937652.jpg,/images/image-1608057937654.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(16, 'Puma Run Fav 7 Session Shorts', 3, 3, 1, 1, 2, 250000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057962620.jpg,/images/image-1608057962622.jpg,/images/image-1608057962623.jpg,/images/image-1608057962625.jpg,/images/image-1608057962627.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(17, 'Rothco Concealed Carry Soft Shell Jacket', 3, 2, 1, 1, 3, 750000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608057988411.jpg,/images/image-1608057988430.jpg,/images/image-1608057988436.jpg,/images/image-1608057988441.jpg,/images/image-1608057988447.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(18, 'Sukajan Waterproof Yasuo LoL', 3, 2, 2, 2, 3, 350000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608058017243.jpg,/images/image-1608058017245.jpg,/images/image-1608058017248.jpg,/images/image-1608058017249.jpg,/images/image-1608058017251.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(19, 'Tactical Hoodie Ela R6S', 3, 1, 3, 2, 3, 250000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608058042944.jpg,/images/image-1608058042946.jpg,/images/image-1608058042947.jpg,/images/image-1608058042948.jpg,/images/image-1608058042950.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(20, 'Tactical Jacket Hibana R6S', 3, 4, 4, 2, 3, 200000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1611192196374.jpg,/images/image-1611192196376.jpg,/images/image-1611192196379.jpg,/images/image-1611192196635.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(21, 'kaos architect', 3, 5, 1, 1, 1, 500000, 'kaos jos', 0, '/images/image-1608166907670.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(24, 'Tactical Jacket WP Hibana R6S', 3, 1, 2, 1, 3, 500000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1608082631358.jpg,/images/image-1608082631363.jpg,/images/image-1608082631364.jpg,/images/image-1608082631365.jpg,/images/image-1608082631367.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(26, 'Nike Airmax', 3, 1, 3, 1, 5, 500000, 'test post', 0, '/images/image-1608176270939.webp,/images/image-1608176270951.webp,/images/image-1608176270953.webp', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(27, 'Tactical Jacket WP Hibana R6S', 3, 2, 4, 1, 3, 500000, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus lectus. Nulla suscipit, diam vitae elementum finibus, libero enim ornare turpis, id venenatis nisi orci sit amet ligula. In hac habitasse platea dictumst. Vivamus vestibulum vel massa a sagittis. Duis tincidunt, sem vel egestas molestie, ante turpis malesuada elit, ut rutrum purus metus nec magna. Aenean ut eleifend mi, nec bibendum nisl. Phasellus finibus massa ex, ut scelerisque neque molestie id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et elit ullamcorper, semper ligula id, imperdiet nisl. Duis quis lectus mauris. Sed eget neque semper, sollicitudin enim eu, consequat purus. Nunc efficitur leo non congue placerat. Vivamus felis ligula, mollis in massa et, vulputate viverra est. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 0, '/images/image-1611052970026.jpg,/images/image-1611052970033.jpg,/images/image-1611052970036.jpg,/images/image-1611052970038.jpg,/images/image-1611052970046.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(28, 'mpssh', 3, 2, 1, 1, 5, 1000, 'ahh', 0, '/images/image-1611061139394.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(33, 'Kaos Gundam', 3, 4, 4, 2, 1, 150000, 'Kaos wibu ', 0, '/images/image-1611225281836.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(34, 'Kaos Gundam', 3, 6, 2, 1, 1, 150000, 'Kaos wibu ', 0, '/images/image-1611798990170.jpg', '2021-01-25 17:42:40', '2021-01-25 17:43:08'),
(40, 'Vk-47 Flatline', 19, 3, 4, 1, 3, 1000000, 'heavy ammo assault rifle', 0, '/images/image-1611804980167.jpg', '2021-01-28 10:36:20', '2021-01-28 10:36:20'),
(41, 'Skin HK-416 the division', 19, 3, 3, 1, 3, 150000, 'skin HK-416 gfl on collaboration with the division 2', 0, '/images/image-1611810792968.jpg,/images/image-1611810792974.jpg,/images/image-1611810792979.jpg', '2021-01-28 12:13:12', '2021-01-28 12:13:12'),
(43, 'laptop butut edit', 3, 5, 2, 1, 2, 10000000, 'a', 0, '/images/image-1611821210952.jpg,/images/image-1611821210963.jpg', '2021-01-28 15:06:50', '2021-01-28 15:06:50');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `size_name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `size`
--

INSERT INTO `size` (`id`, `size_name`) VALUES
(1, 'S'),
(2, 'M'),
(3, 'L'),
(4, '28'),
(5, '29'),
(6, '30'),
(7, '31'),
(8, '32'),
(9, '33'),
(10, '34'),
(11, '35'),
(12, '36'),
(13, '37'),
(14, '38'),
(15, '39'),
(16, '40'),
(17, '41'),
(18, '42');

-- --------------------------------------------------------

--
-- Table structure for table `tb_chat`
--

CREATE TABLE `tb_chat` (
  `id` int(11) NOT NULL,
  `seller` int(11) NOT NULL,
  `buyer` int(11) NOT NULL,
  `chatroom` varchar(255) NOT NULL,
  `sender` int(11) NOT NULL,
  `message` longtext NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tb_item_order`
--

CREATE TABLE `tb_item_order` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `color` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `product_img` longtext NOT NULL,
  `trxId` varchar(255) NOT NULL,
  `payment` int(11) NOT NULL,
  `address` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_item_order`
--

INSERT INTO `tb_item_order` (`id`, `product_id`, `product_name`, `color`, `size`, `qty`, `price`, `product_img`, `trxId`, `payment`, `address`, `user_id`) VALUES
(5, 1, 'Adidas 3bar Shorts', 'Green', '31', 1, 170000, '/images/image-1608057256527.jpg', 'TRX001', 1, 5, 18),
(6, 20, 'Tactical Jacket Hibana R6S', 'Green', '29', 2, 200000, 'image-1608058064925.jpg', 'TRX0015', 2, 5, 18),
(7, 18, 'Sukajan Waterproof Yasuo LoL', 'Blue', 'M', 1, 350000, '/images/image-1608058017243.jpg', 'TRX002998181', 2, 5, 18),
(8, 12, 'Nike Air Max Invigor', 'Red', 'L', 1, 820000, '/images/image-1608057859054.jpg', 'TRX001258843', 3, 6, 18),
(9, 13, 'Nike Mens Dri-Fit WIld Run Tank', 'Black', 'L', 1, 180000, '/images/image-1608057886421.jpg', 'TRX001258843', 3, 6, 18),
(10, 11, 'MARKS & SPENCER Faux Fur Jacket', 'Red', 'L', 3, 800000, '/images/image-1608057836546.jpg', 'TRX00384345', 2, 7, 18),
(11, 20, 'Tactical Jacket Hibana R6S', 'Green', '30', 1, 200000, '/images/image-1611192196374.jpg', 'TRX00384346', 1, 7, 18),
(12, 1, 'Adidas 3bar Shorts', 'Black', '42', 3, 170000, '/images/image-1608057256527.jpg', 'TRX002786081', 2, 8, 21),
(13, 11, 'MARKS & SPENCER Faux Fur Jacket', 'Black', '32', 1, 800000, '/images/image-1608057836546.jpg', 'TRX202260', 3, 5, 18),
(14, 11, 'MARKS & SPENCER Faux Fur Jacket', 'Red', 'L', 1, 800000, '/images/image-1608057836546.jpg', 'TRX4015045', 2, 6, 18),
(15, 11, 'MARKS & SPENCER Faux Fur Jacket', 'Green', 'M', 1, 800000, '/images/image-1608057836546.jpg', 'TRX4025119', 1, 5, 18),
(16, 41, 'Skin HK-416 the division', 'Red', '30', 2, 150000, '/images/image-1611810792968.jpg', 'TRX1882011', 1, 9, 25),
(17, 40, 'Vk-47 Flatline', 'Green', '28', 1, 1000000, '/images/image-1611804980167.jpg', 'TRX1882012', 2, 9, 25),
(18, 43, 'laptop butut edit', 'Green', '29', 1, 10000000, '/images/image-1611821210952.jpg', 'TRX9203836', 1, 6, 18);

-- --------------------------------------------------------

--
-- Table structure for table `tb_notification`
--

CREATE TABLE `tb_notification` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_notification`
--

INSERT INTO `tb_notification` (`id`, `user_id`, `level`, `title`, `message`) VALUES
(1, 18, 1, 'Horee,', 'Pesanan kamu sedang diproses'),
(2, 18, 1, 'Horee,', 'Pesanan kamu sudah dikirim'),
(3, 19, 2, 'Horee~', 'Pesanan telah diterima'),
(4, 18, 1, 'Transaksi TRX9203836 berhasil diproses', 'Hore pembelian kamu berhasil. Ayo belanja lebih banyak dan dapetin kupon cashbacknya'),
(5, 19, 2, 'Horee~', '1 pesanan baru diterima'),
(6, 18, 1, 'Horee,', 'Pesanan kamu sedang diproses'),
(7, 18, 1, 'Horee,', 'Pesanan kamu sudah dikirim'),
(8, 19, 2, 'Horee~', 'Pesanan telah diterima');

-- --------------------------------------------------------

--
-- Table structure for table `tb_otp`
--

CREATE TABLE `tb_otp` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `otp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_otp`
--

INSERT INTO `tb_otp` (`id`, `email`, `otp`) VALUES
(2, 'imbakaka@gmail.com', 'lC3G78');

-- --------------------------------------------------------

--
-- Table structure for table `tb_otp_activation`
--

CREATE TABLE `tb_otp_activation` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `otp` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_otp_activation`
--

INSERT INTO `tb_otp_activation` (`id`, `email`, `otp`) VALUES
(3, 'harajukuarif@gmail.com', 'Fhjxhr'),
(6, '145450301111079@gmail.com', 'yf9yD5'),
(7, '145450301111079@mail.ub.ac.id', 'L0UgbQ');

-- --------------------------------------------------------

--
-- Table structure for table `tb_review`
--

CREATE TABLE `tb_review` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL DEFAULT 0,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `review` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_review`
--

INSERT INTO `tb_review` (`id`, `order_id`, `product_id`, `user_id`, `rating`, `review`, `created_at`) VALUES
(1, 5, 1, 18, 5, 'BUKA BAJU INUI LANGSUNG\r\nCEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROT CROT\r\nCEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CROT\r\nCEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROTCEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROTCEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CEPLOK CROT CEPLOK CEPLOK CEPLOK CEPLOK CROT MONNCROOOTOOOOOOOOOOOOOOOOOOOOOOO', '2021-01-21 04:59:20'),
(2, 0, 1, 18, 2, 'jos gandos', '2021-01-21 05:56:15'),
(3, 0, 11, 18, 5, 'Jos Gandos', '2021-01-21 17:30:34'),
(4, 0, 1, 21, 5, 'Bagus gan hhe', '2021-01-26 15:31:25'),
(5, 0, 41, 25, 5, 'hk416 wangy', '2021-01-28 15:14:48');

-- --------------------------------------------------------

--
-- Table structure for table `tb_transaksi`
--

CREATE TABLE `tb_transaksi` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `TrxId` varchar(255) NOT NULL,
  `payment` int(11) NOT NULL,
  `address` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `trackingNumber` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_transaksi`
--

INSERT INTO `tb_transaksi` (`id`, `user_id`, `TrxId`, `payment`, `address`, `total`, `qty`, `trackingNumber`, `status`, `created_at`) VALUES
(11, 21, 'TRX002786081', 2, 8, 525000, 1, 'XXXXXXXXXXXXXXX-02786081', 3, '2021-01-26 15:30:34'),
(12, 18, 'TRX202260', 3, 5, 815000, 1, 'XXXXXXXXXXXXXXX-0202260', 4, '2021-01-28 08:29:59'),
(13, 18, 'TRX4015045', 2, 6, 815000, 1, 'XXXXXXXXXXXXXXX-04015045', 4, '2021-01-28 11:52:16'),
(14, 18, 'TRX4025119', 1, 5, 815000, 1, 'XXXXXXXXXXXXXXX-04025119', 1, '2021-01-28 11:54:36'),
(15, 25, 'TRX1882011', 1, 9, 315000, 1, 'XXXXXXXXXXXXXXX-01882011', 4, '2021-01-28 15:13:45'),
(16, 25, 'TRX1882012', 2, 9, 1015000, 1, 'XXXXXXXXXXXXXXX-01882012', 3, '2021-01-28 15:17:38'),
(17, 18, 'TRX9203836', 1, 6, 10015000, 1, 'XXXXXXXXXXXXXXX-09203836', 4, '2021-02-12 10:01:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `store` varchar(255) NOT NULL DEFAULT '',
  `level_id` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL DEFAULT '/images/default.jpg',
  `isActive` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fullname`, `store`, `level_id`, `photo`, `isActive`) VALUES
(1, '', 'admin', 'arif nur agung', '', 0, '/images/default.jpg', 0),
(2, '', '$2b$10$wBCFG.6HHXI866efWRVRWunF3tILslPMhp370EPI2BEVWZYhjkeC2', 'arif nur agung', '', 1, '/images/default.jpg', 0),
(3, 'imbakakakv2@gmail.com', '$2b$05$Kz8r2VzX0ZcFzl5B59ugdOSKI95.isXvJ6CqJ6zkzhUPiNIWDkVc.', 'Jack Eastwood', 'Grab Toko', 2, '/images/default.jpg', 1),
(18, 'imbakakak@gmail.com', '$2b$08$fgcS4FrjiybBr2Yyzy0Vku5crNcUJEtAP28bHccWhZEVYYmMbnqIm', 'Johnny Sasaki', '', 1, '/images/default.jpg', 1),
(19, 'agung.arifnur@gmail.com', '$2b$08$9ShePG72EmVU/SaeNVKcQuyg0uKxmLBQI4fHk5ZrQ0PFBSGucxoGi', 'Sam Carter', 'GrabToko', 2, '/images/default.jpg', 1),
(21, 'ariefwidiyatmoko38@gmail.com', '$2b$04$sEXygFWMQQIC625H4dDRw.Zx/1t01wPQ7LBzN3neh29ovOGBb81Am', 'Arief W', '', 1, '/images/default.jpg', 1),
(25, '145150301111079@mail.ub.ac.id', '$2b$04$JnYrMCP/K8EQteBpLhEry.KpP0rkqKTEP9T.QhhTijphkZNj7S/pa', 'Agung', '', 1, '/images/default.jpg', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `bag`
--
ALTER TABLE `bag`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `color_id` (`color_id`),
  ADD KEY `size_id` (`size_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_status`
--
ALTER TABLE `delivery_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `size_id` (`size_id`),
  ADD KEY `condition_id` (`condition_id`),
  ADD KEY `color_id` (`color_id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_chat`
--
ALTER TABLE `tb_chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_item_order`
--
ALTER TABLE `tb_item_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_notification`
--
ALTER TABLE `tb_notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_otp`
--
ALTER TABLE `tb_otp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_otp_activation`
--
ALTER TABLE `tb_otp_activation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_review`
--
ALTER TABLE `tb_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `bag`
--
ALTER TABLE `bag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `delivery_status`
--
ALTER TABLE `delivery_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tb_chat`
--
ALTER TABLE `tb_chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_item_order`
--
ALTER TABLE `tb_item_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tb_notification`
--
ALTER TABLE `tb_notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tb_otp`
--
ALTER TABLE `tb_otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `tb_otp_activation`
--
ALTER TABLE `tb_otp_activation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tb_review`
--
ALTER TABLE `tb_review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tb_transaksi`
--
ALTER TABLE `tb_transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `bag`
--
ALTER TABLE `bag`
  ADD CONSTRAINT `bag_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `bag_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`),
  ADD CONSTRAINT `bag_ibfk_3` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`),
  ADD CONSTRAINT `products_ibfk_4` FOREIGN KEY (`condition_id`) REFERENCES `conditions` (`id`),
  ADD CONSTRAINT `products_ibfk_5` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`);

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
