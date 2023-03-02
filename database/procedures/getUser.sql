create
or alter procedure getUser(@email varchar(100)) AS BEGIN
select
    id,
    fullname,
	email
    isAdmin,
    password
from users
where
    email = @email
    AND isDeleted = 0
END