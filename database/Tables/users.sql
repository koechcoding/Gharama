create table users(
    id varchar(100) Primary KEY,
    fullname varchar(100) Not Null,
	email varchar(100) unique Not Null,
    isAdmin Bit DEFAULT 0,
    password varchar(100) Not Null,
    isDeleted Bit DEFAULT 0
)

