package settings

import (
	"fmt"
	"log"
	"os"
	"path"

	"gopkg.in/ini.v1"
)

const (
	WORK_DIR = "settings"
	INI_FILE = "config.ini"
	SECTION_NAME = "DB"
)

type Config struct {
	user string
	password string
	address string
	port int
	dbname string
}

func (c Config) User() string {return c.user}

func (c Config) Address() string {return c.address}

func (c Config) Port() int {return c.port}

func (c Config) DbName() string {return c.dbname}

func (c Config) DbUri() string {
	return fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", c.user, c.password, c.address, c.port, c.dbname)
}

var cfg_path string

func init() {
	p, _ := os.Getwd()
	cfg_path = path.Join(p, WORK_DIR, INI_FILE)
	if _, err := os.Stat(cfg_path); err != nil {
		log.Fatal(err.Error())
	}
}

func NewConfigini() Config {
	cfg, err := ini.Load(cfg_path)
	if err != nil {log.Fatalln(err.Error())}
	return Config{
		user: cfg.Section(SECTION_NAME).Key("user").String(),
		password: cfg.Section(SECTION_NAME).Key("password").String(),
		address: cfg.Section(SECTION_NAME).Key("address").String(),
		port: cfg.Section(SECTION_NAME).Key("port").MustInt(),
		dbname: cfg.Section(SECTION_NAME).Key("dbname").String(),
	}
}