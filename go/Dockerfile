FROM golang:1.22 as builder

WORKDIR /usr/src/app

COPY go.mod ./

RUN go mod download && go mod verify

COPY ./ .
RUN go build -o /usr/src/app/golang-app .

FROM scratch

WORKDIR /usr/src
COPY --from=builder /usr/src/app/golang-app .

ENTRYPOINT [ "./golang-app" ]