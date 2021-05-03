package main

import (
    "syscall/js"
)

func GolangPing(this js.Value, p []js.Value) interface{} {
    return js.ValueOf("Pong")
}

func main() {
    c := make(chan struct{}, 0)

    js.Global().Set("GolangPing", js.FuncOf(GolangPing))

    <-c
}
