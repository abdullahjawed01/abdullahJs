//  JSON vs Object

/*
Theory differnce
Feature                        JSON                                                         Object Table
What it is                    Text format for storing/transferring data                     Structured storage system (usually in databse)

Usage                         For APIs,configs,and communication                            For querying and persistent data storage

Structure                     Key-value pairs                                               Rows & coulums (SQL) or Documents (NoSQL)

Language Support              Universal (JS,python etc.)                                    Depemds on DB engine (SQL,Mongo DB,etc.)

Editable by humans?           Yes                                                           Usually via queries or admin tools

Supports functions?           NO                                                             Sometimes(e.g. SQl functions,triggers)


*/

// Syntax difference
/*

Definition                      Text format for storing & transferring data             in-memory data structure used in code

Quotes for keys                 Mandatory double quotes("key")                          Optional quotes-- can use key,'key' or "key"

String values                   Must use double quotes only                             can use single or double quotes

Function allowed?               No                                                      Yes

Comments allowed?               No                                                      Yes

Data types Allowed              string,numbers,boolean,null,object,array                Yes(//or/* *)

Usage                           for APIs,configs files, and storage                     For logic inside JS programs

*/