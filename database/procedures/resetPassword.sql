create or alter procedure passwordReset (
     @email varchar(100),
       @password varchar(100)
)
AS
BEGIN
update users set password = @password where email = @email
END