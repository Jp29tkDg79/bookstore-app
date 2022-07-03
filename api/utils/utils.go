package utils

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
)


func HashSum256(t string) string {
	s := sha256.Sum256([]byte(t))
	h := hmac.New(sha256.New, s[:])
	b := h.Sum(nil)
	return hex.EncodeToString(b)
}


func ReqValid(d map[string]string, keys... string) bool {
	r := true
	for _, v := range keys {
		if _, ok := d[v]; !ok {r = false}
	}
	return r
}