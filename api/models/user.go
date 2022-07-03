package models

import (
	"bookstore-api/utils"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)


const (
	TABLE_NAME = "users"
	SALT = "hogehoge"
)

type User struct {
	Name string `json:"name", db:"name"`
	Email string `json:"email", db:"email"`
	password string `json:"-", db:"password"`
}

var schema = fmt.Sprintf(`
	CREATE TABLE IF NOT EXISTS %s (
		name VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL,
		password VARCHAR(255) NOT NULL,
		PRIMARY KEY (email));
`, TABLE_NAME)


func CreateUserTable() error {
	_, err := db.Exec(schema)
	return err
}

func NewUser(name, email, password string) *User {
	return &User{
		Name: name,
		Email: email,
		password: password,
	}
}

func (u User) hashedPassword() string {
	return utils.HashSum256(u.password)
}

func (u *User) Compare(p string) bool {
	return u.password == utils.HashSum256(p)
}

func (u User) IsEmpty() bool {return (User{}) == u}

func (u User) Insert() error {
	q := fmt.Sprintf("INSERT INTO %s VALUES (?, ?, ?)", TABLE_NAME)
	_, err := db.Exec(q, u.Name, u.Email, u.hashedPassword())
	return err
}

func FindUserOne(e string) (*User, error) {
	q := fmt.Sprintf("SELECT * FROM %s WHERE email = ?", TABLE_NAME)
	row := db.QueryRow(q, e)
	if row.Err() != nil {return nil, row.Err()}
	u := &User{}
	err := row.Scan(&u.Name, &u.Email, &u.password)
	return u, err
}