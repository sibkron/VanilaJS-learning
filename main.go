package main

import "fmt"

func main() {
	type farenheit int
	type celsius int

	var f farenheit = 32
	var c celsius = 0

	fmt.Println(f)
	fmt.Println(c)
}
