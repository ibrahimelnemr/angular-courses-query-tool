/* Replace with your SQL commands */

-- SELECT * FROM courses WHERE creative_thinking LIKE '%Visual Thinking%';

-- SELECT course_name FROM courses WHERE creative_thinking LIKE '%Visual Thinking%';


CREATE TABLE arch (
    course_code VARCHAR(255),
    mapped_by VARCHAR(255),
    department VARCHAR(255),
    course_name VARCHAR(255),
    competency_class VARCHAR(255),
    reasoning_interpretation VARCHAR(255),
    complex_problem_solving  VARCHAR(255),
    creative_thinking  VARCHAR(255),
    effective_communication  VARCHAR(255),
    future_intelligence  VARCHAR(255),
    building_managing_relationships  VARCHAR(255),
    fostering_effective_collaboration  VARCHAR(255),
    social_interpersonal_communication  VARCHAR(255),
    digital_fluency  VARCHAR(255),
    prototyping_design VARCHAR(255),
    culture_identity_society VARCHAR(255),
    business_society VARCHAR(255),
    science_technology_society VARCHAR(255),
    self_awareness_self_management VARCHAR(255),
    resilience_grit VARCHAR(255),
    inquisitive_spirit VARCHAR(255),
    ethics_values VARCHAR(255),
    course_comments TEXT
);

-- psql courses_db
-- \COPY arch FROM 'arch.csv' WITH CSV HEADER;
