var s = require("./proto-build/gen/seldon_deployment_pb.js")


// Creating Deployment

var a = new s.SeldonDeployment()

var spec = new s.DeploymentSpec()

spec.setName("test-deployment")


// Creating Deployment predictor

var pred = new s.PredictorSpec()

pred.setName("default")


// Creating Deployment predictor graph

var graph = new s.PredictiveUnit()

graph.setName("test-graph")

graph.setImplementation("SKLEARN_SERVER")

graph.setModeluri("gs://seldon-models/sklearn/income/model-0.23.2")

// Appending data to deployment

pred.setGraph(graph)

spec.addPredictors(pred)

a.setSpec(spec)

// Printing Deployment

console.log(JSON.stringify(a.toObject(),null,2))