package main

import (
    // "encoding/json"
    "fmt"
    "net/http"
)

// type result struct {
//     Result string `json:"result"`
// }

// var r *result = &result{
//     Result: "Pong",
// }

func ping(w http.ResponseWriter, req *http.Request) {
    // res, _ := json.Marshal(r)
    // w.Write(res)
    fmt.Fprintf(w, "Pong")
}

func headers(w http.ResponseWriter, req *http.Request) {

    for name, headers := range req.Header {
        for _, h := range headers {
            fmt.Fprintf(w, "%v: %v\n", name, h)
        }
    }
}

func main() {

    http.HandleFunc("/ping", ping)
    http.HandleFunc("/headers", headers)

    fmt.Print("Golang: Server is running at http://localhost:8090/")
    http.ListenAndServe(":8090", nil)
}