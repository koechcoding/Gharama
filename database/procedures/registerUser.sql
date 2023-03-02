create
or Alter Procedure registerOrUpdateUser(
    @id varchar(100),
    @fullname varchar(100),
    @email varchar(100),
    @isAdmin Bit = 0,
    @password varchar(100)
) AS BEGIN Declare @exists BIT
select
    @exists = count(id)
from
    users
where
    email = @email
    AND isDeleted = 0 IF @exists = 0 BEGIN
insert into
    users(id, fullname, email, isAdmin, password)
values
    (@id, @fullname, @email, @isAdmin, @password)
END
Else
update
    users
set
    fullname = @fullname,
    email = @email,
    isAdmin = @isAdmin,
    password = @password
where id = @id
END