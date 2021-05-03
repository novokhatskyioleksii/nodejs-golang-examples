package main

import (
    "math/big"
    "syscall/js"
)

func GolangFibonacci(this js.Value, p []js.Value) interface{} {
    var n = uint(p[0].Int())

    if n <= 1 {
        return big.NewInt(int64(n))
    }

    var n2, n1 = big.NewInt(0), big.NewInt(1)

    for i := uint(1); i < n; i++ {
        n2.Add(n2, n1)
        n1, n2 = n2, n1
    }

    return js.ValueOf(n1.String())
}

func main() {
    c := make(chan struct{}, 0)

    js.Global().Set("GolangFibonacci", js.FuncOf(GolangFibonacci))

    <-c
}
