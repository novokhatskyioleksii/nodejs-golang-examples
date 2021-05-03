package main

import (
    "fmt"
    "math/big"
    "net/http"
    "strconv"
)

func ping(w http.ResponseWriter, req *http.Request) {
    fmt.Fprintf(w, "Pong")
}

func sum(w http.ResponseWriter, req *http.Request) {
    p1, _ := strconv.Atoi(req.URL.Query().Get("p1"))
    p2, _ := strconv.Atoi(req.URL.Query().Get("p2"))

    sum := p1 + p2

    fmt.Fprint(w, sum)
}

func fibonacci(w http.ResponseWriter, req *http.Request) {
    nValue, _ := strconv.Atoi(req.URL.Query().Get("n"))

    var n = uint(nValue)

    if n <= 1 {
        fmt.Fprint(w, big.NewInt(int64(n)))
    }

    var n2, n1 = big.NewInt(0), big.NewInt(1)

    for i := uint(1); i < n; i++ {
        n2.Add(n2, n1)
        n1, n2 = n2, n1
    }

    fmt.Fprint(w, n1)
}

func main() {

    http.HandleFunc("/ping", ping)
    http.HandleFunc("/sum", sum)
    http.HandleFunc("/fibonacci", fibonacci)

    fmt.Print("Golang: Server is running at http://localhost:8090/")
    http.ListenAndServe(":8090", nil)
}