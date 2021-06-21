-- Drops models table
DROP TABLE IF EXISTS models cascade;

-- Drops entities table
DROP TABLE IF EXISTS entities cascade;

-- Drops attributes table
DROP TABLE IF EXISTS attributes cascade;
-- Creates models table

-- Drops associations table
DROP TABLE IF EXISTS associations;

CREATE TABLE IF NOT EXISTS models (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name varchar(50) NOT NULL
);

-- Creates entities table
CREATE TABLE IF NOT EXISTS entities (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , model_id INT
    , name varchar(50) NOT NULL
    , CONSTRAINT fk_entity_model
      FOREIGN KEY(model_id) 
	  REFERENCES models(id)
);

-- Creates attributes table
CREATE TABLE IF NOT EXISTS attributes (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , entity_id INT
    , name varchar(50) NOT NULL
    , the_type varchar(50) NOT NULL
    , CONSTRAINT fk_attribute_entity
      FOREIGN KEY(entity_id) 
	  REFERENCES entities(id)
);

-- Creates associations table
CREATE TABLE IF NOT EXISTS associations (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , model_id INT
    , name varchar(50) NOT NULL
    , source_id INT
    , target_id INT
    , CONSTRAINT fk_association_model
      FOREIGN KEY(model_id) 
	  REFERENCES models(id)
    , CONSTRAINT fk_association_source
      FOREIGN KEY(source_id) 
	  REFERENCES entities(id)
    , CONSTRAINT fk_association_target
      FOREIGN KEY(target_id) 
	  REFERENCES entities(id)
);