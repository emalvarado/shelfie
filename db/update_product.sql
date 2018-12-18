update product
set name=$(name), img=$(img), price=$(price)
where id= $(id);
-- select * from product;