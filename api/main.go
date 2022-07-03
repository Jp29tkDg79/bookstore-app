package main

import (
	"bookstore-api/controllers"
	"bookstore-api/models"
	"flag"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
)

var port string;

func init() {
	flag.StringVar(&port, "p", "8000", "listion on port no")

	if err := models.Connnect(); err != nil {log.Fatalln(err.Error())}
	if err := models.CreateUserTable(); err != nil {log.Fatalln(err.Error())}
}

func main() {
	flag.Parse()
	router := gin.Default()
	defer models.Disconnect()

	router.POST("/signin", controllers.Signin)
	router.POST("/login", controllers.Login)
	router.POST("/logout", controllers.Logout)

	fmt.Println("listion on port no :"+port)
	router.Run(fmt.Sprintf(":%s", port))
}