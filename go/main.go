package main

import (
    "fmt"
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

func main() {

    http.HandleFunc("/ping", ping)
    http.HandleFunc("/sum", sum)

    fmt.Print("Golang: Server is running at http://localhost:8090/")
    http.ListenAndServe(":8090", nil)
}