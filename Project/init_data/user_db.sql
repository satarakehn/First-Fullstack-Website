DROP TABLE IF EXISTS Assignment;

CREATE TABLE IF NOT EXISTS Assignment(       -- This table is for TODO page
  Assignment_id INT PRIMARY KEY,
  Assignment_Name VARCHAR(45) NOT NULL,
  Due_Date DATE NOT NULL,
  Class_Name VARCHAR(45) NOT NULL
);

DROP TABLE IF EXISTS Issue;

CREATE TABLE IF NOT EXISTS Issue(            -- This table is for calendar page
  Issue_id INT PRIMARY KEY,
  Issue_Name VARCHAR(45) NOT NULL,
  Issue_Date DATE NOT NULL,
  Issue_Time TIME NOT NULL
);

DROP TABLE IF EXISTS Student;

CREATE TABLE IF NOT EXISTS Student(          -- This table is for register page
  Student_id INT PRIMARY KEY,
  First_Name VARCHAR(45) NOT NULL,
  Last_Name VARCHAR(45) NOT NULL,
  Student_Email VARCHAR(45) NOT NULL,		
  Student_Password VARCHAR(45) NOT NULL,
  Student_University VARCHAR(45) NOT NULL
);
