package models

import (
	"bookstore-api/settings"
	"database/sql"
)

var db *sql.DB


func Connnect() error {
	c := settings.NewConfigini()
	d, err := sql.Open("mysql", c.DbUri())
	if err != nil {return err}
	if err := d.Ping(); err != nil {return err}
	db = d
	return nil
}

func Disconnect() {db.Close()}