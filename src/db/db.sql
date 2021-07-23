CREATE DATABASE IF NOT EXISTS SimpleSign;

USE SimpleSign;
CREATE TABLE IF NOT EXISTS Users (
    id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fullName VARCHAR(255),
    email VARCHAR(255),
    role VARCHAR(25),
    authCode VARCHAR(255),
    createdAt DATE,
    updatedAt DATE
);

INSERT INTO Users (`id`, `fullName`, `email`, `authCode`, `role`, `createdAt`, `updatedAt`) VALUES
('3641', 'Rick Novak', 'rick.novak@gmail.com', '$2b$10$XKYUeJ6PtUpW7C8oKi.iJeB.uFsPTR.1frhpXwXyZrknu5k/HStei', 'admin', '2021-07-21 12:29:11', '2021-07-21 12:29:11'),
('7736', 'Susan Connor', 'susan.connor@gmail.com', '$2b$10$21k1MdIjGnBE1JaSzUFfK.qZzFOQV6eYV293HdNZBHFOV7Y4NmgWe', 'trainer', '2021-07-21 12:29:11', '2021-07-21 12:29:11'),
('3774', 'John Kennedy', 'john.kennedy@gmail.com', '$2b$10$TnnaDfSseISxruLzoaX34ey8ax8M1/bIJI2UkUczNLPqC9dva/Q6i', 'student', '2021-07-21 12:29:11', '2021-07-21 12:29:11');
