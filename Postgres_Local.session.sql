drop TABLE if exists movies;

CREATE TABLE movies (
	id varchar NOT null,
	"name" text,
	release_year INTEGER,
	CONSTRAINT movies_pk PRIMARY KEY (id)
);

/*INSERT ENTRIES*/
insert into public.movies 
	(id, "name", release_year)
values 
	(1, 'Mary Poppins', 2022),
	(2, 'Wolf Hall', 2020),
	(3, 'The Matrix', 1999),
	(4, 'Monsters Inc', 2001),
	(5, 'A Knights Tale', 2000);

/* 2. ADD COLUMNS */
ALTER TABLE movies 
ADD runtime INTEGER;


/*3. browsing movies */
SELECT "name" FROM public.movies 
WHERE release_year = 2022; 

/* 4. UPDATE public.movies */

UPDATE movies
SET runtime=120
where runtime IS null;

/*5. alter unique*/
alter table movies add constraint unique_id unique (id);

select * from movies;
