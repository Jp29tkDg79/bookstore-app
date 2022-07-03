package controllers

import (
	"bookstore-api/constants"
	"bookstore-api/models"
	"bookstore-api/utils"
	"net/http"

	"github.com/gin-gonic/gin"
)


func Signin(ctx *gin.Context) {
	var body map[string]string

	if err := ctx.BindJSON(&body); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "failed to convert request body encode to json",
		})
		return
	}

	if !utils.ReqValid(body, []string{constants.EMAIL, constants.NAME, constants.PASSWORD}...) {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "request body not found",
		})
		return
	}

	if u, _ := models.FindUserOne(body[constants.EMAIL]); !u.IsEmpty() {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "existing user",
		})
		return
	}

	u := models.NewUser(
		body[constants.NAME],
		body[constants.EMAIL],
		body[constants.PASSWORD],
	)

	if err := u.Insert(); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": err.Error(),
		})
		return
	}

	ctx.JSON(http.StatusCreated, u)
}

func Login(ctx *gin.Context) {
	var body map[string]string

	if err := ctx.BindJSON(&body); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "failed to convert request body encode to json",
		})
		return
	}

	if !utils.ReqValid(body, []string{constants.EMAIL, constants.PASSWORD}...) {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "request body not found",
		})
		return
	}

	u, err := models.FindUserOne(body[constants.EMAIL])
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "not user",
		})
		return
	}

	if !u.Compare(body[constants.PASSWORD]) {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "password unmatch",
		})
		return
	}

	ctx.JSON(http.StatusOK, u)
}

func Logout(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{"message": "success"})
}