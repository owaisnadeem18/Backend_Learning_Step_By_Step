# Mongo DB All basics and understanding points of theory

--- Step-by-Step Guide to MongoDB Basics ---

1. MongoDB kya hai?
Definition: MongoDB ek NoSQL database hai jo data ko documents ki form mein store karta hai. Ye relational databases (like MySQL) ki tarah tables use nahi karta.
Features:
Flexible schema (aap different types of data store kar sakte hain).
High performance for large datasets.
Scalability.

# Important Terminologies 

Database: SchoolDB (Holds all school data).
Collection: students and teachers (Groups of similar records).
Document: Individual record of a student or teacher (like a row in a table).
Schema: Defines the structure of data (optional, like a blueprint).
Model: Uses the schema to interact with the database (via Mongoose).

------------- Notes: --------------

DataBase ====> Collection ====> Document 

This is the above mentioned cycle which explains the concept of databases.


        Code                --             DataBase

mongoose.connect            --              Creates DataBase in db

model create                --              Creates Collection in db

CREATE Code                 --              Document         