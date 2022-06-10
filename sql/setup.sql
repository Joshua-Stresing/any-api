-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists consoles;

CREATE table consoles (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    year INT NOT NULL
);

INSERT INTO consoles (name, description, year) VALUES ('Atari', 'Classically viewed as the original game console.', 1977), ('NES', 'Considered to be what put gaming consoles onto the market.', 1983), ('Sega', 'Nintendos competitor. Failed to compete on the first wave of consoles.', 1983), ('Sony Playstation', 'The game changer. This console set a new standard for gaming. 3D models and environments were starting to become the new standard. It led its generation', 1994), ('Nintendo 64', 'This competed with the PS1 for the most part and was overall loved despite losing out in the end.', 1996);
