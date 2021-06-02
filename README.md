# seldon-deployment-proto-js

This repo demonstrates how to use seldon deployment proto definitions to generate javascript code that can be utilized to created seldon deployment specifications 
> Note: Works with Seldon Core version v1.8.0

## Generate JavaScript code from proto definitions

```
make build_protos
make proto-gen
```

## Run demo to view deployment created

```
node .
```

## References

- [Protobuf JavaScript Generated Code](https://developers.google.com/protocol-buffers/docs/reference/javascript-generated)
- [Seldon Deployment Proto](https://github.com/SeldonIO/seldon-core/blob/master/proto/seldon_deployment.proto)
