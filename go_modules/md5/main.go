package main

import (
    "crypto/md5"
    "encoding/hex"
    "syscall/js"
    "sync"
)

func md5Worker(c chan string, wg *sync.WaitGroup) {
    hash := md5.Sum([]byte("nodejs-golang"))

    c <- hex.EncodeToString(hash[:])

    wg.Done()
}

func GolangMd5(this js.Value, p []js.Value) interface{} {
    n := p[0].Int()

    c := make(chan string, n)
    var wg sync.WaitGroup

    for i := 0; i < n; i++ {
        wg.Add(1)
        go md5Worker(c, &wg)
    }

    wg.Wait()

    return js.ValueOf(n)
}

func main() {
    js.Global().Set("GolangMd5", js.FuncOf(GolangMd5))

    select {}
}
