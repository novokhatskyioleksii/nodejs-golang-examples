package main

import (
    "crypto/sha256"
    "encoding/hex"
    "syscall/js"
    "sync"
)

func sha256Worker(c chan string, wg *sync.WaitGroup) {
    h := sha256.New()
    h.Write([]byte("nodejs-golang"))
    sha256_hash := hex.EncodeToString(h.Sum(nil))

    c <- sha256_hash
    wg.Done()
}

func GolangSha256(this js.Value, p []js.Value) interface{} {
    n := p[0].Int()

    c := make(chan string, n)
    var wg sync.WaitGroup

    for i := 0; i < n; i++ {
        wg.Add(1)
        go sha256Worker(c, &wg)
    }

    wg.Wait()

    return js.ValueOf(n)
}

func main() {
    js.Global().Set("GolangSha256", js.FuncOf(GolangSha256))

    select {}
}
